import ActivePromotionsListTab from '../components/ActivePromotionsListTab';
import AllPromotionsListTab from '../components/AllPromotionsListTab';
import InActivePromotionsListTab from '../components/InActivePromotionsListTab';

const promotionsTabs = ({columnConfig,handleFilterClick}) =>  [
    {
        id: 'allTenantList',
        label: 'All',

        content: <AllPromotionsListTab handleFilterClick={handleFilterClick} columnConfig={columnConfig}/>,
    },
    {
        id: 'activeTenantList',
        label: 'Active',

        content: <ActivePromotionsListTab />,
    },
    {
        id: 'inactiveCompanyList',
        label: 'InActive',

        content: <InActivePromotionsListTab />,
    },

    // Add more tabs as needed
];

export default promotionsTabs;
