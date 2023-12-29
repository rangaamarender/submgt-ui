import DisplayDate from '../../../components/date/DisplayDate';
import userRoleBodyTemplate from './userRoleBodyTemplate';

const userColumnConfig = [
    {
        field: 'username',
        header: 'User Name',
        isSelected: true,
        isChecked: false,
        isPermanent: true,
    },

    {
        field: 'roleID',
        header: 'Role',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => userRoleBodyTemplate(rowData),
    },
    {
        field: 'userType',
        header: 'User Type',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'emailID',
        header: 'Email',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'phoneNbr',
        header: 'Phone',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'createdDt',
        header: 'Created On',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.createdDt),
    },
    {
        field: 'statusStr',
        header: 'Status',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
];

export default userColumnConfig;
