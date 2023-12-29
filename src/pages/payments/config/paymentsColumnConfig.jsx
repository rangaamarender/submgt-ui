const paymentsColumnConfig = [
    {
        field: 'paymentID',
        header: 'Payment ID',
        isSelected: true,
        isChecked: true,
        isPermanent: true,
    },
    {
        field: 'paymentDate',
        header: 'Payment Date',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'payer',
        header: 'Payer',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'payerCompany',
        header: 'Payer Company',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'amount',
        header: 'Amount',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
    }
];

export default paymentsColumnConfig;
