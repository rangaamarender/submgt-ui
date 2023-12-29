import React, { useEffect, useRef, useState } from 'react';

import MntViewerSteps from '../../components/viewers/MntViewerSteps';
import CreateInvoicesWizard from './components/CreateInvoicesWizard';

import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import FilterMenu from '../../components/filterUtils/filterMenu';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';

import { useDispatch, useSelector } from 'react-redux';
import invoicesColumnConfig from './config/invoicesColumnConfig';
import invoicesDashboardCounts from './config/invoicesDashboardCount';
import invoicesTabs from './config/invoicesTabs';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const InvoiceListPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [columnConfig, setColumnConfig] = useState(invoicesColumnConfig);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const dataTableRef = useRef(null);
    const columnFilterButtonRef = useRef(null);

    
    const { invoices, loading, error } = useSelector((state) => state.invoice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Invoices'));
    }, [dispatch]);

    useEffect(() => {
        if (columnConfig.length > 0) {
            initFilters(columnConfig);
        }
    }, [columnConfig]);

    const exportInvoiceActionHandler = () => {
        setShowExportModal(true);
    };
    const columnFilterUserActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };
    const filterInvoiceActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addInvoiceActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddInvoiceActionHandler = () => {
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
            icon: 'pi pi-fw pi-download',
            actionHandler: exportInvoiceActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterUserActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterInvoiceActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addInvoiceActionHandler,
        },
    ];
    console.log(loading, error);
    return (
        <>
            <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={invoices}
                dataTableRef={dataTableRef}
            />
            <FilterMenu
                columnConfig={columnConfig}
                setColumnConfig={setColumnConfig}
                handleCheckboxChange={handleCheckboxChange}
                columnFilterButtonRef={columnFilterButtonRef}
            />
            <MntViewerSteps
                title="Create New Invoices"
                visible={sidebarVisible}
                onHide={closeAddInvoiceActionHandler}
                contentComponent={<CreateInvoicesWizard />}
            />

            <EntityDashboardCounts widgetList={invoicesDashboardCounts} />

            <TabMenuContainer
                tabItems={invoicesTabs({ columnConfig, handleFilterClick })}
                actionButtons={actionButtons}
            />
        </>
    );
};

export default InvoiceListPage;
