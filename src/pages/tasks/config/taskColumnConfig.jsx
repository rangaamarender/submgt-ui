const taskColumnConfig = [
    {
        field: 'taskName',
        header: 'Task Name',
        isSelected: true,
        isChecked: false,
        isPermanent: true,
    },
    {
        field: 'taskNbr',
        header: 'Created by',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'status',
        header: 'Priority',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'fee',
        header: 'Due date',
        isSelected: false,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'fee',
        header: 'Status',
        isSelected: false,
        isChecked: false,
        isPermanent: false,
    },
];

export default taskColumnConfig;
