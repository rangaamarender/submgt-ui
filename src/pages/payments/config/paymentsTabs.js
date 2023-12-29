import React from 'react'
import AllPaymentsListTab from '../components/AllPaymentsListTab';
import DraftPaymentsTab from '../components/DraftPaymentsTab';
import CancledPaymentsTab from '../components/CancledPaymentsListTab';
import PaidPaymentsTab from '../components/PaidPaymentsListTab';

const PaymentsTabs = ({columnConfig,handleFilterClick})=>[
    {
        id: 'allUsersList',
        label: 'All',

        content: <AllPaymentsListTab handleFilterClick={handleFilterClick} columnConfig={columnConfig}  />,
    },
    {
        id: 'activeUsersList',
        label: 'Paid',

        content: <PaidPaymentsTab  handleFilterClick={handleFilterClick} columnConfig={columnConfig} />,
    },
    {
        id: 'activeUsersList',
        label: 'Draft',

        content: <DraftPaymentsTab  handleFilterClick={handleFilterClick} columnConfig={columnConfig} />,
    },
    {
        id: 'inactiveUsersList',
        label: 'Canceled',

        content: <CancledPaymentsTab handleFilterClick={handleFilterClick} columnConfig={columnConfig}  />,
    },

    // Add more tabs as needed
];

export default PaymentsTabs
