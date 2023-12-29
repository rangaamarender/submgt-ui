import React, { useEffect, useRef, useState } from 'react';


import EntityDashboardCounts from '../../components/dashboard/EntityDashboardCounts';
import DataExportModal from '../../components/exportUtils/DataExportModal';
import FilterMenu from '../../components/filterUtils/filterMenu';
import { initFilters } from '../../components/filterUtils/tableDataFilterUtils';
import TabMenuContainer from '../../components/tabmenu/TabMenuContainer';
import MntViewerSteps from '../../components/viewers/MntViewerSteps';
import CreateTaskWizard from './components/CreateTaskWizard';
import taskColumnConfig from './config/taskColumnConfig';
import taskDashboardCount from './config/taskDashboardCount';
import taskTabs from './config/taskTabs';
import { tasksData } from './config/tasksData';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';
import { useDispatch } from 'react-redux';

const TaskListPage = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
    const [columnConfig, setColumnConfig] = useState(taskColumnConfig);
    const [handleFilterClick, setHandleFilterClick] = useState(false);
    const dataTableRef = useRef(null);
    const columnFilterButtonRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPageName('Tasks'));
    }, [dispatch]);

    useEffect(() => {
        if (columnConfig.length > 0) {
            initFilters(columnConfig);
        }
    }, [columnConfig]);

    const exportTasksActionHandler = () => {
        setShowExportModal(true);
    };

    const columnFilterTasksActionHandler = (event) => {
        columnFilterButtonRef.current.toggle(event);
        event.stopPropagation();
    };
    const filterUserActionHandler = () => {
        setHandleFilterClick(!handleFilterClick);
    };

    const addTenantActionHandler = () => {
        setSidebarVisible(true);
    };

    const closeAddTenantActionHandler = () => {
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
            label: 'All',
            icon: 'pi  pi-angle-down',
            actionHanlder: exportTasksActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-server',
            actionHandler: columnFilterTasksActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-filter',
            actionHandler: filterUserActionHandler,
        },
        {
            label: '',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addTenantActionHandler,
        },
    ];
    return (
        <>
            <DataExportModal
                showExportModal={showExportModal}
                setShowExportModal={setShowExportModal}
                columnConfig={columnConfig}
                exportData={tasksData}
                dataTableRef={dataTableRef}
            />
            <FilterMenu
                columnConfig={columnConfig}
                setColumnConfig={setColumnConfig}
                handleCheckboxChange={handleCheckboxChange}
                columnFilterButtonRef={columnFilterButtonRef}
            />
            <MntViewerSteps
                title="Create New Task"
                visible={sidebarVisible}
                onHide={closeAddTenantActionHandler}
                contentComponent={<CreateTaskWizard />}
            />
            <EntityDashboardCounts widgetList={taskDashboardCount} />
            <TabMenuContainer tabItems={taskTabs({ columnConfig, handleFilterClick })} actionButtons={actionButtons} />
        </>
    );
};

export default TaskListPage;
