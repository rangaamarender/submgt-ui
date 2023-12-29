import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
// import userColumnConfig from '../config/usersColumnConfig';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../../../redux/actions/userActions';
import handleUsersAction from '../config/handleUsersAction';
import usersActionMenu from '../config/usersActionMenu';
import usersSelectedColumns from '../config/usersSelectedColumns';

const ActiveUsersListTab = ({ handleFilterClick, columnConfig }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [page, setPage] = useState(0); // Current page offset
    const [pageSize, setPageSize] = useState(5); // Current page size
console.log(setPage,setPageSize);
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
    //default search criteria
    // const searchCriteria = { page: 0, pageSize: 10 };
    const searchCriteria = useMemo(() => ({
        page: page,
        pageSize: pageSize,
    }), [page, pageSize]);
    useEffect(() => {
        dispatch(fetchUserRequest(searchCriteria));
    }, [dispatch,searchCriteria]);
console.log(loading, error,toggleSidebar)
    return (
        <Card>
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
            />
        </Card>
    );
};

export default ActiveUsersListTab;
