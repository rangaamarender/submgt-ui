import DisplayDate from '../../../components/date/DisplayDate';

const promotionsColumnConfig = [
    {
        field: 'name',
        header: 'Name',
        isSelected: true,
        isChecked: false,
        isPermanent: true,
    },

    {
        field: 'promotionStatus',
        header: 'Status',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'promotionAmount',
        header: 'Value',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },

    {
        field: 'createdBy',
        header: 'Created by',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'createdDt',
        header: 'Created Date',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.createdDt),
    },
    {
        field: 'salesEndDate',
        header: 'Expiring On',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.salesEndDt),
    },
];

export default promotionsColumnConfig;
