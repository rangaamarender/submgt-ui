import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchPaymentMethodRequest,
    initAddPaymentMethodRequest,
    selectPaymentMethodRequest,
} from '../../../../redux/actions/paymentMethodActions';

import SimpleDataTable from '../../../../components/datatable/SimpleDataTable';
import ActionBar from '../../../../components/tabmenu/ActionBar';
import { VIEW_ACTION } from '../../../../utils/ActionTypes';
import PaymentBodyTemplate from './PaymentBodyTemplate';
import PaymentMethodDetails from './PaymentMethodDetails';

const PaymentMethodList = () => {
    const dispatch = useDispatch();
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    //Handle Row select in datatable
    const handleRowSelect = (event) => {
        const id = event.data.id;
        dispatch(selectPaymentMethodRequest(id));
        console.log('  id:' + id);
        setSidebarVisible(!sidebarVisible);
    };

    const handleRowUnselect = (e) => {
        //Nothing to do
        setSidebarVisible(sidebarVisible);
    };
    //default search criteria
    const subscriptionID = useSelector((state) => state.tenant.selectedTenant.tenantID);

    const searchCriteria = { subscriptionID: { subscriptionID } };
    //UseEffect load the data per searchCriteria
    useEffect(() => {
        console.log('--- fetching the payment methods....' + subscriptionID);
        dispatch(fetchPaymentMethodRequest(subscriptionID));
    }, [dispatch,subscriptionID]);

    //select the required data from the redux
    const { paymentMethods, loading, error } = useSelector((state) => state.paymentMethod);
    const { selectedTenant } = useSelector((state) => state.tenant);
    //selected columns
    const selectedColumns = ['name', 'defaultPymntInd', 'status', 'last4Digits', 'expirationEncDt', 'cardType'];

    //columns to be configured in the datatable
    const columnsConfig = [
        {
            field: 'name',
            header: 'name',
            body: (rowData) => PaymentBodyTemplate(rowData),
        },
        {
            field: 'defaultPymntInd',
            header: 'defaultPymntInd',
        },
        {
            field: 'status',
            header: 'status',
        },
    ];

    const actionMenu = [
        { label: 'View', icon: 'pi pi-eye', action: 'view' },
        { label: 'Edit', icon: 'pi pi-pencil', action: 'edit' },
        { label: 'Delete', icon: 'pi pi-trash', action: 'delete' },
    ];

    const handlePaymentMethodAction = (action, rowData) => {
        switch (action) {
            case 'view':
                // Implement view action logic
                console.log('Viewing:', rowData.id);
                break;
            case 'edit':
                // Implement edit action logic
                console.log('Editing:', rowData.id);
                break;
            case 'delete':
                // Implement delete action logic
                console.log('Deleting:', rowData.id);
                break;
            default:
                break;
        }
    };

    //Handle action for add button
    const addPaymentMethodActionHandler = () => {
        setSidebarVisible(true);
        console.log('Adding payment method....');
        dispatch(initAddPaymentMethodRequest(subscriptionID));
    };

    const actionButtons = [
        {
            label: 'Create',
            icon: 'pi pi-fw pi-plus',
            actionHandler: addPaymentMethodActionHandler,
        },
    ];
    console.log('-----testing---------' + JSON.stringify(paymentMethods));
    const mode = useSelector((state) => state.paymentMethod.mode);
    const readOnly = mode === VIEW_ACTION;
    console.log(selectedTenant,selectedColumns,loading, error,handlePaymentMethodAction,actionMenu,searchCriteria,handleRowUnselect,handleRowSelect,toggleSidebar)
    return (
        <Card title="PaymentMethods">
            {readOnly ? <ActionBar actionButtons={actionButtons} /> : <PaymentMethodDetails />}
            <SimpleDataTable data={paymentMethods} columnConfig={columnsConfig} actionMenu={actionButtons} />
        </Card>
    );
};

export default PaymentMethodList;
