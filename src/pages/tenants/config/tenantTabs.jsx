import ActiveTenantListTab from '../components/ActiveTenantListTab';
import AllTenantListTab from '../components/AllTenantListTab';
import InActiveTenantListTab from '../components/InActiveTenantListTab';

const tenantTabs = [
    {
        id: 'allTenantList',
        title: 'All',
        label: 'All',
        content: <AllTenantListTab />,
    },
    {
        id: 'activeTenantList',
        title: 'Active',
        label: 'Active',
        content: <ActiveTenantListTab />,
    },
    {
        id: 'inactiveCompanyList',
        title: 'InActive',
        label: 'InActive',
        content: <InActiveTenantListTab />,
    },

    // Add more tabs as needed
];

export default tenantTabs;
