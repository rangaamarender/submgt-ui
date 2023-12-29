import { Button } from 'primereact/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInputText from '../../../components/controls/CustomInputText';
import { intl, setLocale, setValidationMessages } from '../../../i18n/i18n';

import { CForm } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addTenantRequest, updateTenantRequest } from '../../../redux/actions/tenantActions';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../../utils/ActionTypes';

const TenantDetailsForm = () => {
    const dispatch = useDispatch();

    const selectedTenant = useSelector((state) => state.tenant.selectedTenant);
    const mode = useSelector((state) => state.tenant.mode);
    setLocale('en');
    setValidationMessages('en');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(selectedTenant);

    const readOnly = mode === VIEW_ACTION;
    //Submit the page
    const onSubmit = (data) => {
        const updatedTenant = { ...selectedTenant, ...data };
        console.log('updated1' + updatedTenant.id);
        if (mode === ADD_ACTION) {
            dispatch(addTenantRequest(updatedTenant));
        } else if (mode === UPDATE_ACTION) {
            dispatch(updateTenantRequest(updatedTenant));
        }
    };

    const handleCancel = () => {
        console.log('cancel log');
    };
    const required = true;

    return (
        <CForm onSubmit={handleSubmit(onSubmit)}>
            <div className="grid formgrid p-fluid m-2">
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="tenantID"
                    labelId="tenant.tenantID"
                    defaultValue={selectedTenant.tenantID}
                    required={required}
                    requiredMsg="tenant.tenantID.requiredMsg"
                    disabled={readOnly}
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="createdBy"
                    labelId="tenant.createdBy"
                    defaultValue={selectedTenant.createdBy}
                    required={required}
                    requiredMsg="tenant.createdBy.requiredMsg"
                    disabled={readOnly}
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="companyName"
                    labelId="tenant.companyName"
                    defaultValue={selectedTenant.companyName}
                    required={required}
                    requiredMsg="tenant.companyName.requiredMsg"
                    disabled={readOnly}
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="externalCode"
                    labelId="tenant.externalCode"
                    defaultValue={selectedTenant.externalCode}
                    required={required}
                    requiredMsg="tenant.externalCode.requiredMsg"
                    disabled={readOnly}
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="status"
                    labelId="tenant.status"
                    defaultValue={selectedTenant.status}
                    required={required}
                    requiredMsg="tenant.status.requiredMsg"
                    disabled={readOnly}
                />
            </div>
            <div className="p-sidebar-header col-12 d-flex justify-content-end fixed bottom-0 right-0 w-75 footer-bg p-3">
                <Button
                    onClick={handleCancel}
                    label={intl.formatMessage({ id: 'cancelButton.label' })}
                    className="p-button p-component p-button-secondary w-auto mt-3"
                />
                <Button
                    type="submit"
                    label={intl.formatMessage({ id: 'createButton.label' })}
                    className="p-button p-component w-auto mt-3"
                />
            </div>
        </CForm>
    );
};

export default TenantDetailsForm;
