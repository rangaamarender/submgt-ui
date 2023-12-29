import React from 'react';
import WizardComponent from '../../../../components/viewers/WizardComponent';
import CreateTenantForm from './CreateTenantForm';
import PreviewTenantStep from './PreviewTenantStep';

const CreateTenantWizard = () => {
    const steps = [
        {
            id: 'tenantDetails',
            name: 'Tenant Details',
            component: <CreateTenantForm />,
        },
        {
            id: 'previewDetails',
            name: 'Preview Details',
            component: <PreviewTenantStep />,
        },
    ];
    return (
        <div>
            <h3>testing</h3>
        </div>
    );
};

export default CreateTenantWizard;
