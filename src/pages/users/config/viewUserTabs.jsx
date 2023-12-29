import UserView from '../mnt/UserView';

const viewUserTabs = [
    {
        id: 'userDetails',
        label: 'User Details',
        content: <UserView />,
    },
    {
        id: 'changePassword',
        label: 'Change Password',
    },
];

export default viewUserTabs;
