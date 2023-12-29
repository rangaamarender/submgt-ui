import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
// import userColumnConfig from '../config/usersColumnConfig';
import { useDispatch, useSelector } from 'react-redux';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';

import handleUsersAction from '../config/handleUsersAction';
import usersActionMenu from '../config/usersActionMenu';
import usersSelectedColumns from '../config/usersSelectedColumns';
import viewUserTabs from '../config/viewUserTabs';
import { fetchUserRequest, selectUserRequest } from '../../../redux/actions/userActions';

const AllUsersListTab = ({ handleFilterClick, columnConfig }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const dispatch = useDispatch();
    const { users, navigationData, pageable, loading, error } = useSelector((state) => state.user);

    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
        console.log('1. Selected user id ---> :' + event.data.userID);
        dispatch(selectUserRequest(event.data.userID));
    };

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [page, setPage] = useState(0); // Current page offset
    const [pageSize, setPageSize] = useState(5); // Current page size

    // const searchCriteria = {
    //     page: page,
    //     pageSize: pageSize,
    // };
    const searchCriteria = useMemo(() => ({
        page: page,
        pageSize: pageSize,
    }), [page, pageSize]);
    useEffect(() => {
        console.log('******** dispatching the fetch user event *************');
        dispatch(fetchUserRequest(searchCriteria));
    }, [dispatch,searchCriteria]);

    const handleOnPageChange = (event) => {
        setPage(event.first);
        setPageSize(event.rows);
        searchCriteria.page = event.page;
        searchCriteria.pageSize = event.rows;
        console.log('handle onpagechange ' + event.first + '  ' + event.rows);
        dispatch(fetchUserRequest(searchCriteria));
    };
    console.log(loading, error,searchCriteria)
    return (
        <Card>
            <ViewerWithTabs visible={sidebarVisible} onHide={toggleSidebar} tabs={viewUserTabs} />
            <CustomDataTable
                data={users}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={usersActionMenu}
                // columnsConfig={userColumnConfig}
                selectedColumns={usersSelectedColumns}
                handleAction={handleUsersAction}
                handleFilterClick={handleFilterClick}
                columnConfig={columnConfig}
                handleOnPageEvent={handleOnPageChange}
                navigationData={navigationData}
                pageable={pageable}
            />
        </Card>
    );
};

export default AllUsersListTab;
