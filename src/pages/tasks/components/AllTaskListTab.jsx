import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import handleTaskAction from '../config/handleTaskAction';
import taskActionMenu from '../config/taskActionMenu';
import taskSelectedColumns from '../config/taskSelectedColumns';
import { tasksData } from '../config/tasksData';
import viewTaskTabs from '../config/viewTaskTabs';

const AllTaskListTab = ({handleFilterClick,columnConfig}) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const data = [];
    console.log(data);
    return (
        <Card>
            <ViewerWithTabs visible={sidebarVisible} onHide={toggleSidebar} tabs={viewTaskTabs} />
            <CustomDataTable
                data={tasksData}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={taskActionMenu}
                selectedColumns={taskSelectedColumns}
                handleAction={handleTaskAction}
                columnConfig={columnConfig}
                handleFilterClick={handleFilterClick}
            />
        </Card>
    );
};

export default AllTaskListTab;
