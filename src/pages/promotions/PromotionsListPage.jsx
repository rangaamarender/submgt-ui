import React, { useEffect, useRef, useState } from 'react';

import MntViewerSteps from '../../components/viewers/MntViewerSteps';
import CreatePromotionsWizard from './components/CreatePromotionsWizard';

import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import FilterMenu from '../../components/filterUtils/filterMenu';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import PromotionsDashboardCounts from './config/PromotionsDashboardCount';
import promotionsColumnConfig from './config/promotionsColumnConfig';
import { promotionsData } from './config/promotionsData';
import promotionsTabs from './config/promotionsTabs';
import { useDispatch } from 'react-redux';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const PromotionsListPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [columnConfig, setColumnConfig] = useState(promotionsColumnConfig);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const dataTableRef = useRef(null);
    const columnFilterButtonRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Promotions'));
    }, [dispatch]);

    useEffect(() => {
        if (columnConfig.length > 0) {
            initFilters(columnConfig);
        }
    }, [columnConfig]);

    const exportPromotionsActionHandler = () => {
        // Your code to open the sidebar
        setShowExportModal(true);
    };

    const columnFilterUserActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };

    const filterPromotionsActionHandler = () => {
        // Your code to open the sidebar
        setHandleFilterClick(!handleFilterClick);
    };

    const addPromotionsActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddPromotionsActionHandler = () => {
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
            actionHandler: exportPromotionsActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterUserActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterPromotionsActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addPromotionsActionHandler,
        },
    ];
    return (
        <>
            <MntViewerSteps
                title="Create New Promotions"
                visible={sidebarVisible}
                onHide={closeAddPromotionsActionHandler}
                contentComponent={<CreatePromotionsWizard />}
            />
            <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={promotionsData}
                dataTableRef={dataTableRef}
            />
            <FilterMenu
                columnConfig={columnConfig}
                setColumnConfig={setColumnConfig}
                handleCheckboxChange={handleCheckboxChange}
                columnFilterButtonRef={columnFilterButtonRef}
            />
            <EntityDashboardCounts widgetList={PromotionsDashboardCounts} />
            <TabMenuContainer
                tabItems={promotionsTabs({ columnConfig, handleFilterClick })}
                actionButtons={actionButtons}
            />
        </>
    );
};

export default PromotionsListPage;
