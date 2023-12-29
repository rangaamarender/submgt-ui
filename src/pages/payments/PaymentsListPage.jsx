import React, { useEffect, useRef, useState } from 'react';
import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import FilterMenu from '../../components/filterUtils/filterMenu';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import paymentsColumnConfig from './config/paymentsColumnConfig';
import paymentsDashboardCounts from './config/paymentsDashboardCount';
import { paymentsData } from './config/paymentsData';
import paymentsTabs from './config/paymentsTabs';
import WizardComponent from '../../components/viewers/WizardComponent';
import paymentWizardSteps from './config/paymentWizardSteps';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const PaymentsListPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [columnConfig, setColumnConfig] = useState(paymentsColumnConfig);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const dataTableRef = useRef(null);
    const columnFilterButtonRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Payment'));
    }, [dispatch]);

    useEffect(() => {
        if (columnConfig.length > 0) {
            initFilters(columnConfig);
        }
    }, [columnConfig]);

    const exportPaymentsActionHandler = () => {
        setShowExportModal(true);
    };

    const columnFilterUserActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };

    const filterPaymentsActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addPaymentsActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddPaymentsActionHandler = () => {
        setSidebarVisible(false);
    };

    const handleCheckboxChange = (event) => {
        const updatedColumn = columnConfig?.map((col) => {
            if (col.field === event.target.name) {
                col.isSelected = !col.isSelected;
                col.isChecked = !col.isChecked;
            }
            return col;
        });
        setColumnConfig(updatedColumn);
    };

    const actionButtons = [
        {
            label: 'Export',
            icon: 'pi  pi-download fw-bold fs-6',
            severity: 'secondary',
            actionHandler: exportPaymentsActionHandler,
        },
        {
            label: '',
            icon: 'pi  pi-server fw-bold fs-6',
            actionHandler: columnFilterUserActionHandler,
            severity: 'secondary',
        },
        {
            label: '',
            icon: 'pi  pi-filter-fill fw-normal fs-6',
            actionHandler: filterPaymentsActionHandler,
            severity: 'secondary',
        },
        {
            label: '',
            icon: 'pi  pi-plus fw-normal fs-5',
            actionHandler: addPaymentsActionHandler,
        },
    ];
    return (
        <>
            <WizardComponent
                title="Create New Payment"
                visible={sidebarVisible}
                onHide={closeAddPaymentsActionHandler}
                steps={paymentWizardSteps}
            />
            <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={paymentsData}
                dataTableRef={dataTableRef}
            />
            <FilterMenu
                columnConfig={columnConfig}
                setColumnConfig={setColumnConfig}
                handleCheckboxChange={handleCheckboxChange}
                columnFilterButtonRef={columnFilterButtonRef}
            />
            <EntityDashboardCounts widgetList={paymentsDashboardCounts} />
            <TabMenuContainer
                tabItems={paymentsTabs({ columnConfig, handleFilterClick })}
                actionButtons={actionButtons}
            />
        </>
    );
};

export default PaymentsListPage;
