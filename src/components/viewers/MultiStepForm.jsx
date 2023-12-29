import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'primereact/button';
import CreateTenantForm from '../../pages/tenants/components/mnt/CreateTenantForm';
import PreviewTenantStep from '../../pages/tenants/components/mnt/PreviewTenantStep';
import TitleHeader from '../header/TitleHeader';

const MultiStepForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [activeStep, setActiveStep] = useState(0);

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
        nextStep();
    };

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    };

    const prevStep = () => {
        setActiveStep(activeStep - 1);
    };

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
        {
            id: 'previewDetails',
            name: 'Preview Details1',
            component: PreviewTenantStep,
        },
        {
            id: 'previewDetails',
            name: 'Preview Details2',
            component: PreviewTenantStep,
        },
    ];

    function getCurrentStepComponent() {
        return tenantWizardSteps[activeStep].component;
    }

    const progress = 99; // Calculate progress as a percentage
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="surface-border border-round">
                <TitleHeader title="Testing" progress={progress} />
            </div>
            <div className="surface-border border-round p-5">
                {React.createElement(getCurrentStepComponent(), { control: control, errors: errors })}
            </div>
            <div className="surface-border border-round mt-3 p-4"></div>
            <div className="p-formgroup">
                <Button type="button" label="Previous" onClick={prevStep} disabled={activeStep === 0} />
                <Button type="submit" label="Next" disabled={activeStep === tenantWizardSteps.length - 1} />
            </div>
        </form>
    );
};

export default MultiStepForm;
