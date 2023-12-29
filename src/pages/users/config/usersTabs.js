import React from 'react'
import AllUsersListTab from '../components/AllUsersListTab';
import ActiveUsersListTab from '../components/ActiveUsersListTab';
import InActiveUsersTab from '../components/InActiveUsersTab';

const usersTabs = ({columnConfig,handleFilterClick}) => [
    {
        id: 'allUsersList',
        label: 'All',

        content: <AllUsersListTab handleFilterClick={handleFilterClick} columnConfig={columnConfig} />,
    },
    {
        id: 'activeUsersList',
        label: 'Active',

        content: <ActiveUsersListTab  handleFilterClick={handleFilterClick} columnConfig={columnConfig} />,
    },
    {
        id: 'inactiveUsersList',
        label: 'InActive',

        content: <InActiveUsersTab  handleFilterClick={handleFilterClick} columnConfig={columnConfig} />,
    },

    // Add more tabs as needed
];

export default usersTabs
