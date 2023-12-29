import React from 'react';
import CustomDropdown from '../../../../components/controls/CustomDropdown';

import CustomInputText from '../../../../components/controls/CustomInputText';

const AdminContactSection = ({ control, errors }) => {
    const required = true;
    const cities = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' },
    ];
    return (
        <>
            <CustomInputText
                control={control}
                errors={errors}
                name="firstName"
                labelId="firstName.label"
                requiredMsg="firstName.required"
                required={required}
                className="field sm:col-6"
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="lastName"
                labelId="lastName.label"
                requiredMsg="lastName.required"
                required={required}
                className="field sm:col-6"
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="title"
                labelId="title.label"
                requiredMsg="title.required"
                required={required}
                className="field sm:col-6"
            />

            <CustomDropdown
                control={control}
                errors={errors}
                name="status"
                labelId="status.label"
                requiredMsg="status.required"
                required={required}
                options={cities}
                className="field sm:col-6"
            />
        </>
    );
};

export default AdminContactSection;
