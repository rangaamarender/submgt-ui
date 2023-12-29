import PaymentMethodList from '../components/paymentMethod/PaymentMethodList';
import TenantDetails from './TenantDetails';

const viewTenantTabs = [
    {
        id: 'tenantDetails',
        label: 'Tenant Details',
        content: <TenantDetails />,
    },

    {
        id: 'documents',
        label: 'Document',
    },
    {
        id: 'financeDetails',
        label: 'Finance Details',
        content: <PaymentMethodList />,
    },
    {
        id: 'activities',
        label: 'Activities',
    },
];

export default viewTenantTabs;
