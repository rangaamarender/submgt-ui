import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import React from 'react';
import { Controller } from 'react-hook-form';

const CustomInputEmail = ({
    control,
    errors,
    name,
    labelId,
    required,
    placeholder,
    type,
    defaultValue,
    disabled,
    className,
    ...rest
}) => {
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <>
            <Controller
                control={control}
                name={name}
                rules={{
                    minLength: {
                        value: 5,
                        message: 'Email must be at least 5 characters long',
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid Email',
                    },
                    required:'Email is Required'
                }}
                render={({ field, fieldState }) => (
                    <div className={className}>
                        <label htmlFor={name}>
                            {labelId} {required && <span className="text-danger"> *</span>}
                        </label>
                        <InputText
                            {...field}
                            {...rest}
                            placeholder={placeholder}
                            type={type}
                            disabled={disabled}
                            className={classNames({ 'p-invalid': fieldState.error })}
                        />
                    </div>
                )}
                defaultValue={defaultValue}
            />
            {getFormErrorMessage(name)}
        </>
    );
};

export default CustomInputEmail;
