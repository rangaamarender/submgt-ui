import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDataTable from '../../components/datatable/CustomDataTable';
import Viewer from '../../components/viewers/Viewer';
import { fetchUserRequest, selectUserRequest, addUserRequest } from '../../redux/actions/userActions';

import UserForm from './mnt/UserForm';
import ActionBar from '../../../components/controls/ActionBar';
import { setCurrentPageName } from '../../redux/actions/headerTitleActions';

const UserList = () => {
    const dispatch = useDispatch();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(15);

    useEffect(() => {
        dispatch(setCurrentPageName('Dashboard'));
    }, [dispatch]);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    //Handle Row select in datatable
    const handleRowSelect = (event) => {
        const id = event.data.id;
        dispatch(selectUserRequest(id));
        console.log('  id:' + id);
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        //Nothing to do
        setSidebarVisible(sidebarVisible);
    };
    //default search criteria
    const searchCriteria = { page: 0, pageSize: 10 };

    //Handle on page change rows/next/previous/first/last navigation
    const handleOnPageChange = (event) => {
        setPage(event.first);
        setPageSize(event.rows);
        searchCriteria.page = event.first;
        searchCriteria.pageSize = event.rows;
        console.log('handle onpagechange' + event.first + '  ' + event.rows);
        dispatch(fetchUserRequest(searchCriteria));
    };

    //UseEffect load the data per searchCriteria
    useEffect(() => {
        dispatch(fetchUserRequest(searchCriteria));
    }, [dispatch]);

    //select the required data from the redux
    const { users, navigationData, pageable, loading, error } = useSelector((state) => state.user);

    //selected columns
    const selectedColumns = [
        'userID',
        'createdBy',
        'createdDt',
        'updatedBy',
        'updatedDt',
        'emailID',
        'externalCode',
        'lastLoginDt',
        'password',
        'salt',
        'status',
        'roleID',
        'username',
        'userType',
        'subMgtRole',
        'phoneNbr',
        'photo',
    ];

    //columns to be configured in the datatable
    const columnsConfig = [
        {
            field: 'userID',
            header: 'userID',
        },
        {
            field: 'createdBy',
            header: 'createdBy',
        },
        {
            field: 'createdDt',
            header: 'createdDt',
        },
        {
            field: 'updatedBy',
            header: 'updatedBy',
        },
        {
            field: 'updatedDt',
            header: 'updatedDt',
        },
        {
            field: 'emailID',
            header: 'emailID',
        },
        {
            field: 'externalCode',
            header: 'externalCode',
        },
        {
            field: 'lastLoginDt',
            header: 'lastLoginDt',
        },
        {
            field: 'password',
            header: 'password',
        },
        {
            field: 'salt',
            header: 'salt',
        },
        {
            field: 'status',
            header: 'status',
        },
        {
            field: 'roleID',
            header: 'roleID',
        },
        {
            field: 'username',
            header: 'username',
        },
        {
            field: 'userType',
            header: 'userType',
        },
        {
            field: 'subMgtRole',
            header: 'subMgtRole',
        },
        {
            field: 'phoneNbr',
            header: 'phoneNbr',
        },
        {
            field: 'photo',
            header: 'photo',
        },
    ];

    const actionMenu = [
        { label: 'View', icon: 'pi pi-eye', action: 'view' },
        { label: 'Edit', icon: 'pi pi-pencil', action: 'edit' },
        { label: 'Delete', icon: 'pi pi-trash', action: 'delete' },
    ];

    const handleUserAction = (action, rowData) => {
        switch (action) {
            case 'view':
                // Implement view action logic
                console.log('Viewing:', rowData.userID);
                break;
            case 'edit':
                // Implement edit action logic
                console.log('Editing:', rowData.userID);
                break;
            case 'delete':
                // Implement delete action logic
                console.log('Deleting:', rowData.userID);
                break;
            default:
                break;
        }
    };

    //Handle action for add button
    const addUserActionHandler = () => {
        setSidebarVisible(true);
        dispatch(addUserRequest());
    };

    const actionButtons = [
        {
            label: 'Create',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addUserActionHandler,
        },
    ];

    return (
        <Card title="Users">
            <ActionBar actionButtons={actionButtons} />
            <Viewer
                visible={sidebarVisible}
                onHide={toggleSidebar}
                contentComponent={<UserForm />}
                title="User Details"
            />
            <CustomDataTable
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                dataKey="userID"
                data={users}
                selectedColumns={selectedColumns}
                handleAction={handleUserAction}
                columnsConfig={columnsConfig}
                actionMenu={actionMenu}
                handleOnPageEvent={handleOnPageChange}
                navigationData={navigationData}
            />
        </Card>
    );
};

export default UserList;
