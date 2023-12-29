import ActiveInvoicesListTab from '../components/ActiveInvoicesListTab';
import AllInvoicesListTab from '../components/AllInvoicesListTab';
import InActiveInvoicesListTab from '../components/InActiveInvoicesListTab';
import YetToBeInvoicesReceived from '../components/YetToBeInvoicesReceived';

const invoicesTabs = ({columnConfig,handleFilterClick})=>[
    {
        id: 'allTenantList',
        label: 'All',

        content: <AllInvoicesListTab  handleFilterClick={handleFilterClick} columnConfig={columnConfig} />,
    },
    {
        id: 'activeTenantList',
        label: 'Pending',

        content: <ActiveInvoicesListTab />,
    },
    {
        id: 'inactiveCompanyList',
        label: 'Received',

        content: <InActiveInvoicesListTab />,
    },
    {
        id: 'yetToBeInvoicesReceived',
        label: 'Yet to invoices',

        content: <YetToBeInvoicesReceived />,
    }

    // Add more tabs as needed
];

export default invoicesTabs;
