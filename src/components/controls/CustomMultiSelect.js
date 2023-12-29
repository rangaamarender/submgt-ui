// import { MultiSelect } from 'primereact/multiselect';
// import { classNames } from 'primereact/utils';
// import React from 'react';
// import { Controller } from 'react-hook-form';
// import { FormattedMessage } from 'react-intl';
// import { intl } from '../../i18n/i18n';

// import getFormErrorMessage from './getFormErrorMessage';

// const CustomMultiSelect = ({
//     control,
//     errors,
//     name,
//     labelId,
//     defaultValue,
//     required,
//     helpMsg,
//     className,
//     placeholder,
//     disabled,
//     requiredMsg,
//     options,
//     ...rest
// }) => {
//     return (
//         <Controller
//             name={name}
//             defaultValue={defaultValue}
//             control={control}
//             rules={
//                 required && {
//                     required: intl.formatMessage({
//                         id: requiredMsg,
//                         defaultMessage: 'field is required',
//                     }),
//                 }
//             } // Use formatMessage to retrieve translated message
//             render={({ field, fieldState }) => (
//                 <div className={className}>
//                     <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}>
//                         <FormattedMessage id={labelId} defaultMessage={labelId} />
//                         {required && <span className="text-danger"> *</span>}
//                     </label>
//                     <MultiSelect
//                         {...field}
//                         options={options}
//                         optionValue="value"
//                         optionLabel="label"
//                         display="chip"
//                         placeholder={placeholder}
//                         focusInputRef={field.ref}
//                         maxSelectedLabels={3}
//                         className={classNames({ 'p-invalid': fieldState.error })}
//                         {...rest}
//                     />
//                     {getFormErrorMessage(errors, field.name)}
//                 </div>
//             )}
//         />
//     );
// };

// export default CustomMultiSelect;
import { MultiSelect } from 'primereact/multiselect';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { intl } from '../../i18n/i18n';

import getFormErrorMessage from './getFormErrorMessage';

const CustomMultiSelect = ({
    control,
    errors,
    name,
    labelId,
    defaultValue,
    required,
    helpMsg,
    className,
    placeholder,
    disabled,
    requiredMsg,
    options,
    ...rest
}) => {
    const [selectedOptions, setSelectedOptions] = useState(defaultValue || []);

    const handleOptionChange = (e) => {
        setSelectedOptions(e.value);
    };

    const panelFooterTemplate = () => {
        const length = selectedOptions.length;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length !== 1 ? 's' : ''} selected.
            </div>
        );
    };

    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={
                required && {
                    required: intl.formatMessage({
                        id: requiredMsg,
                        defaultMessage: 'field is required',
                    }),
                }
            }
            render={({ field, fieldState }) => (
                <div className={className}>
                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}>
                        <FormattedMessage id={labelId} defaultMessage={labelId} />
                        {required && <span className="text-danger"> *</span>}
                    </label>
                    <MultiSelect
                        {...field}
                        options={options}
                        optionValue="value"
                        optionLabel="label"
                        display="chip"
                        placeholder={placeholder}
                        focusInputRef={field.ref}
                        className={classNames({ 'p-invalid': fieldState.error })}
                        panelFooterTemplate={panelFooterTemplate}
                        onChange={handleOptionChange} // Update selected options when an option is changed
                        value={selectedOptions} // Pass the selected options to the MultiSelect component
                        {...rest}
                    />
                    {getFormErrorMessage(errors, field.name)}
                </div>
            )}
        />
    );
};

export default CustomMultiSelect;

