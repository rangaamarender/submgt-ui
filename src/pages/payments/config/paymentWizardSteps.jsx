import CreatePaymentForm from './wizardFormSteps/CreatePaymentForm';
import PreviewPaymentStep from './wizardFormSteps/PreviewPaymentStep';

const paymentWizardSteps = [
    {
        id: 'tenantDetails',
        name: 'Payment Details',
        component: CreatePaymentForm,
    },
    {
        id: 'previewDetails',
        name: 'Preview Details',
        component: PreviewPaymentStep,
    },
];

export default paymentWizardSteps;
