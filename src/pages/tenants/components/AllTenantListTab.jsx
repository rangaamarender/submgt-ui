import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import ViewerWithTabs from '../../../components/viewers/ViewerWithTabs';
import { fetchTenantRequest, selectTenantRequest } from '../../../redux/actions/tenantActions';


import HeaderViewerWithTabs from '../../../components/viewers/HeaderViewerWithTabs';
import handleTenantAction from '../config/handleTenantAction';
import tenantActionMenu from '../config/tenantActionMenu';
import tenantColumnConfig from '../config/tenantColumnConfig';
import tenantHeaderViewerBtn from '../config/tenantHeaderViewerBtn';
import tenantHeaderViewerOptions from '../config/tenantHeaderViewerOptions';
import tenantSelectedColumns from '../config/tenantSelectedColumns';
import viewTenantTabs from '../config/viewTenantTabs';

const AllTenantListTab = () => {
    const dispatch = useDispatch();

    const [sidebarVisible, setSidebarVisible] = useState(false);

    const { tenants, navigationData, pageable, loading, error, selectedTenant } = useSelector((state) => state.tenant);
    const [page, setPage] = useState(0); // Current page offset
    const [pageSize, setPageSize] = useState(5); // Current page size
    // const searchCriteria = {
    //     page: page,
    //     pageSize: pageSize,
    // };
  // Wrap the initialization of 'searchCriteria' in useMemo
  const searchCriteria = useMemo(() => ({
    page: page,
    pageSize: pageSize,
}), [page, pageSize]);
    useEffect(() => {
        console.log('******** dispatching 111the event *************');
        dispatch(fetchTenantRequest(searchCriteria));
    }, [dispatch,searchCriteria]);

    const handleOnPageChange = (event) => {
        setPage(event.first);
        setPageSize(event.rows);
        searchCriteria.page = event.page;
        searchCriteria.pageSize = event.rows;
        console.log('handle onpagechange ' + event.page + '  ' + event.rows);
        dispatch(fetchTenantRequest(searchCriteria));
    };

    const handleRowSelect = (event) => {
        setSidebarVisible(!sidebarVisible);
        console.log('selectedRow : ', event.data.tenantID);
        dispatch(selectTenantRequest(event.data.tenantID));
    };

    const handleRowUnselect = (e) => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (tenants && tenants.length <= 0) {
        return <div>Error</div>;
    }

    return (
        <Card>
            <ViewerWithTabs
                visible={sidebarVisible}
                onHide={toggleSidebar}
                tabs={viewTenantTabs}
                header={
                    <HeaderViewerWithTabs
                        name={selectedTenant?.companyName}
                        buttons={tenantHeaderViewerBtn}
                        options={tenantHeaderViewerOptions}
                        buttonFlag={false} // if we want to ellipsis make it false
                        location={selectedTenant?.externalCode}
                    />
                }
            />
            <CustomDataTable
                data={tenants}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={tenantActionMenu}
                columnConfig={tenantColumnConfig}
                selectedColumns={tenantSelectedColumns}
                handleAction={handleTenantAction}
                handleOnPageEvent={handleOnPageChange}
                navigationData={navigationData}
                pageable={pageable}
            />
        </Card>
    );
};

export default AllTenantListTab;
