import DisplayDate from '../../../components/date/DisplayDate';
import invoiceAccountBodyTemplate from './invoiceAccountBodyTemplate';

const invoicesColumnConfig = [
    {
        field: 'subInvoiceID',
        header: 'Invoice ID',
        isSelected: true,
        isChecked: true,
        isPermanent: true,
    },
    {
        field: 'invoiceDueDt',
        header: 'Due Date',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.invoiceDueDt),
    },

    {
        field: 'paymentDt',
        header: 'Paid on',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.paymentDt),
    },
    {
        field: 'account',
        header: 'Account',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
        body: (rowData) => invoiceAccountBodyTemplate(rowData),
    },
    {
        field: 'invoiceStatusStr',
        header: 'Status',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'balanceAmt',
        header: 'Balance Due',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'invoiceAmt',
        header: 'Total',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
];

export default invoicesColumnConfig;
