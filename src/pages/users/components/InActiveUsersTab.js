import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomDataTable from '../../../components/datatable/CustomDataTable';

import { fetchUserRequest } from '../../../redux/actions/userActions';
import handleUsersAction from '../config/handleUsersAction';
import usersActionMenu from '../config/usersActionMenu';
import usersSelectedColumns from '../config/usersSelectedColumns';

const InActiveUsersTab = ({ handleFilterClick, columnConfig }) => {
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

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);
    const [page, setPage] = useState(0); // Current page offset
    const [pageSize, setPageSize] = useState(5); // Current page size
    console.log(setPage,setPageSize);
    //default search criteria
    // const searchCriteria = { page: 0, pageSize: 10 };
    const searchCriteria = useMemo(() => ({
        page: page,
        pageSize: pageSize,
    }), [page, pageSize]);
    useEffect(() => {
        dispatch(fetchUserRequest(searchCriteria));
    }, [dispatch,searchCriteria]);
console.log(toggleSidebar,loading, error);
    return (
        <Card>
            <CustomDataTable
                data={users}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={usersActionMenu}
                columnConfig={columnConfig}
                selectedColumns={usersSelectedColumns}
                handleAction={handleUsersAction}
                handleFilterClick={handleFilterClick}
            />
        </Card>
    );
};

export default InActiveUsersTab;
