import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDataTable from '../../../components/datatable/CustomDataTable';
import Viewer from '../../../components/viewers/Viewer';
import {
    fetchSubscriptionRequest,
    selectSubscriptionRequest,
    addSubscriptionRequest,
} from '../../../redux/actions/subscriptionActions';

import SubscriptionForm from './SubscriptionForm';
import ActionBar from '../../../components/controls/ActionBar';
import handleSubscriptionAction from './config/handleSubscriptionAction';

const SubscriptionListPage = () => {
    const dispatch = useDispatch();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(15);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    //Handle Row select in datatable
    const handleRowSelect = (event) => {
        const id = event.data.id;
        dispatch(selectSubscriptionRequest(id));
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
        dispatch(fetchSubscriptionRequest(searchCriteria));
    };

    //UseEffect load the data per searchCriteria
    useEffect(() => {
        dispatch(fetchSubscriptionRequest(searchCriteria));
    }, [dispatch]);

    //select the required data from the redux
    const { subscriptions, navigationData, pageable, loading, error } = useSelector((state) => state.subscription);

    //selected columns
    const selectedColumns = [
        'subscriptionID',
        'acctNbr',
        'tenantID',
        'createdDt',
        'status',
        'approvedBy',
        'approvedDt',
        'phase',
        'trailDays',
        'hasBillingSetup',
        'effectiveDt',
        'billPeriodUnit',
        'billcycleDay',
        'nextBillDt',
        'invoiceType',
        'balanceAmt',
        'planCode',
        'planDesc',
        'startDt',
        'endDt',
        'contacts',
        'paymentMethods',
        'tenant',
    ];

    //columns to be configured in the datatable
    const columnsConfig = [
        {
            field: 'subscriptionID',
            header: 'subscriptionID',
        },
        {
            field: 'acctNbr',
            header: 'acctNbr',
        },
        {
            field: 'tenantID',
            header: 'tenantID',
        },
        {
            field: 'createdDt',
            header: 'createdDt',
        },
        {
            field: 'status',
            header: 'status',
        },
        {
            field: 'approvedBy',
            header: 'approvedBy',
        },
        {
            field: 'approvedDt',
            header: 'approvedDt',
        },
        {
            field: 'phase',
            header: 'phase',
        },
        {
            field: 'trailDays',
            header: 'trailDays',
        },
        {
            field: 'hasBillingSetup',
            header: 'hasBillingSetup',
        },
        {
            field: 'effectiveDt',
            header: 'effectiveDt',
        },
        {
            field: 'billPeriodUnit',
            header: 'billPeriodUnit',
        },
        {
            field: 'billcycleDay',
            header: 'billcycleDay',
        },
        {
            field: 'nextBillDt',
            header: 'nextBillDt',
        },
        {
            field: 'invoiceType',
            header: 'invoiceType',
        },
        {
            field: 'balanceAmt',
            header: 'balanceAmt',
        },
        {
            field: 'planCode',
            header: 'planCode',
        },
        {
            field: 'planDesc',
            header: 'planDesc',
        },
        {
            field: 'startDt',
            header: 'startDt',
        },
        {
            field: 'endDt',
            header: 'endDt',
        },
        {
            field: 'contacts',
            header: 'contacts',
        },
        {
            field: 'paymentMethods',
            header: 'paymentMethods',
        },
        {
            field: 'tenant',
            header: 'tenant',
        },
    ];

    //Handle action for add button
    const addSubscriptionActionHandler = () => {
        setSidebarVisible(true);
        dispatch(addSubscriptionRequest());
    };

    const actionButtons = [
        {
            label: 'Create',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addSubscriptionActionHandler,
        },
    ];

    return (
        <Card title="Subscriptions">
            <ActionBar actionButtons={actionButtons} />
            <Viewer
                visible={sidebarVisible}
                onHide={toggleSidebar}
                contentComponent={<SubscriptionForm />}
                title="Subscription Details"
            />
            <CustomDataTable
                onRowSelect={handleRowSelect}
                onRowUnselect={handleRowUnselect}
                dataKey="id"
                data={subscriptions}
                selectedColumns={selectedColumns}
                handleAction={handleSubscriptionAction}
                columnsConfig={columnsConfig}
                actionMenu={subscriptionActionMenu}
                handleOnPageEvent={handleOnPageChange}
                navigationData={navigationData}
            />
        </Card>
    );
};

export default SubscriptionListPage;
