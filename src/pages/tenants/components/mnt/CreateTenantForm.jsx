import React from 'react';
import CustomInputText from '../../../../components/controls/CustomInputText';
import AdminContactForm from './AdminContactSection';

const CreateTenantForm = ({ control, errors }) => {
    const required = true;
    return (
        <div>
            <div className="grid formgrid p-fluid">
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="companyName"
                    labelId="companyName.label"
                    requiredMsg="companyName.required"
                    required={required}
                    className="field sm:col-12"
                />
                <AdminContactForm control={control} errors={errors} />
            </div>
        </div>
    );
};

export default CreateTenantForm;
