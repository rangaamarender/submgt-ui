import React, { useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import handleInvoicesAction from '../config/handleInvoicesAction';
import invoicesActionMenu from '../config/invoicesActionMenu';
import invoicesSelectedColumns from '../config/invoicesSelectedColumns';

import { useDispatch, useSelector } from 'react-redux';
import Viewer from '../../../components/viewers/Viewer';
import { fetchInvoiceRequest, selectInvoiceRequest } from '../../../redux/actions/invoiceActions';
import ViewInvoiceDetails from './ViewInvoiceDetails';

const AllInvoicesListTab = ({ handleFilterClick, columnConfig }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const dispatch = useDispatch();

    const { invoices, navigationData, pageable, loading, error, selectedTenant } = useSelector(
        (state) => state.invoice
    );
    const [page, setPage] = useState(0); // Current page offset
    const [pageSize, setPageSize] = useState(5); // Current page size
    // const searchCriteria = {
    //     page: page,
    //     pageSize: pageSize,
    // };
//   Wrap the initialization of 'searchCriteria' in useMemo
  const searchCriteria = useMemo(() => ({
    page: page,
    pageSize: pageSize,
}), [page, pageSize]);
    useEffect(() => {
        dispatch(fetchInvoiceRequest(searchCriteria));
    }, [dispatch,searchCriteria]);

    //Handle Row select in datatable
    const handleRowSelect = (event) => {
        const id = event.data.id;
        dispatch(selectInvoiceRequest(id));
        console.log('  id:' + id);
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        //Nothing to do
        setSidebarVisible(sidebarVisible);
    };

    //Handle on page change rows/next/previous/first/last navigation
    const handleOnPageChange = (event) => {
        setPage(event.first);
        setPageSize(event.rows);
        searchCriteria.page = event.first;
        searchCriteria.pageSize = event.rows;
        console.log('handle onpagechange' + event.first + '  ' + event.rows);
        dispatch(fetchInvoiceRequest(searchCriteria));
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
console.log(loading, error, selectedTenant);
    return (
        <Card>
            <Viewer visible={sidebarVisible} onHide={toggleSidebar} contentComponent={<ViewInvoiceDetails />} />
            <CustomDataTable
                data={invoices}
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                actionMenu={invoicesActionMenu}
                handleFilterClick={handleFilterClick}
                columnConfig={columnConfig}
                selectedColumns={invoicesSelectedColumns}
                handleAction={handleInvoicesAction}
                handleOnPageEvent={handleOnPageChange}
                navigationData={navigationData}
                pageable={pageable}
            />
        </Card>
    );
};

export default AllInvoicesListTab;
