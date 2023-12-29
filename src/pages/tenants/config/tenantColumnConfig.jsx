import DisplayDate from '../../../components/date/DisplayDate';
import tenantBodyTemplate from './tenantBodyTemplate';
import tenantExternalCode from './tenantExternalCode';

const tenantColumnConfig = [
    {
        field: 'companyName',
        header: 'Tenant Name',
        isSelected: true,
        isChecked: true,
        isPermanent: true,
        body: (rowData) => tenantBodyTemplate(rowData),
    },
    {
        field: 'externalCode',
        header: 'Tenant #',
        isSelected: true,
        isChecked: true,
        isPermanent: true,
        body: (rowData) => tenantExternalCode(rowData),
    },
    {
        field: 'planCode',
        header: 'Plan',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'statusStr',
        header: 'Status',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'fee',
        header: 'Fee',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'admin',
        header: 'Admin',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'startDt',
        header: 'Start Date',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.startDt),
    },
    {
        field: 'endDt',
        header: 'End Date',
        isSelected: true,
        isChecked: false,
        isPermanent: false,
        body: (rowData) => DisplayDate(rowData.endDt),
    },
];

export default tenantColumnConfig;
