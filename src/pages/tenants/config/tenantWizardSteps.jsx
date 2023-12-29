import CreateTenantForm from '../components/mnt/CreateTenantForm';
import PreviewTenantStep from '../components/mnt/PreviewTenantStep';

const tenantWizardSteps = [
    {
        id: 'tenantDetails',
        name: 'Tenant Details',
        component: CreateTenantForm,
    },
    {
        id: 'previewDetails',
        name: 'Preview Details',
        component: PreviewTenantStep,
    },
];

export default tenantWizardSteps;
