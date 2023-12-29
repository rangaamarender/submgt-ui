import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomEditor from '../../../components/controls/CustomEditor';
import CustomInputText from '../../../components/controls/CustomInputText';
import CustomInputTextArea from '../../../components/controls/CustomInputTextArea';
import { intl, setLocale, setValidationMessages } from '../../../i18n/i18n';
import { updateSubscriptionRequest, addSubscriptionRequest } from '../../../redux/actions/subscriptionActions';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../../utils/ActionTypes';
import { CForm } from '@coreui/react';

const SubscriptionForm = () => {
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const selectedSubscription = useSelector((state) => state.subscription.selectedSubscription);
    const mode = useSelector((state) => state.subscription.mode);
    setLocale('en');
    setValidationMessages('en');

    const readOnly = mode === VIEW_ACTION;

    //Submit the page
    const onSubmit = (data) => {
        const updatedSubscription = { ...selectedSubscription, ...data };
        console.log('updated1' + updatedSubscription.id);
        if (mode === ADD_ACTION) {
            dispatch(addSubscriptionRequest(updatedSubscription));
        } else if (mode === UPDATE_ACTION) {
            dispatch(updateSubscriptionRequest(updatedSubscription));
        }
    };

    const required = true;

    return (
        <CForm onSubmit={handleSubmit(onSubmit)} className="row">
            <CustomInputText
                control={control}
                errors={errors}
                name="subscriptionID"
                labelId="subscription.subscriptionID"
                defaultValue={selectedSubscription.subscriptionID}
                required={required}
                requiredMsg="subscription.subscriptionID.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="acctNbr"
                labelId="subscription.acctNbr"
                defaultValue={selectedSubscription.acctNbr}
                required={required}
                requiredMsg="subscription.acctNbr.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="tenantID"
                labelId="subscription.tenantID"
                defaultValue={selectedSubscription.tenantID}
                required={required}
                requiredMsg="subscription.tenantID.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="createdDt"
                labelId="subscription.createdDt"
                defaultValue={selectedSubscription.createdDt}
                required={required}
                requiredMsg="subscription.createdDt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="status"
                labelId="subscription.status"
                defaultValue={selectedSubscription.status}
                required={required}
                requiredMsg="subscription.status.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="approvedBy"
                labelId="subscription.approvedBy"
                defaultValue={selectedSubscription.approvedBy}
                required={required}
                requiredMsg="subscription.approvedBy.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="approvedDt"
                labelId="subscription.approvedDt"
                defaultValue={selectedSubscription.approvedDt}
                required={required}
                requiredMsg="subscription.approvedDt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="phase"
                labelId="subscription.phase"
                defaultValue={selectedSubscription.phase}
                required={required}
                requiredMsg="subscription.phase.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="trailDays"
                labelId="subscription.trailDays"
                defaultValue={selectedSubscription.trailDays}
                required={required}
                requiredMsg="subscription.trailDays.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="hasBillingSetup"
                labelId="subscription.hasBillingSetup"
                defaultValue={selectedSubscription.hasBillingSetup}
                required={required}
                requiredMsg="subscription.hasBillingSetup.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="effectiveDt"
                labelId="subscription.effectiveDt"
                defaultValue={selectedSubscription.effectiveDt}
                required={required}
                requiredMsg="subscription.effectiveDt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="billPeriodUnit"
                labelId="subscription.billPeriodUnit"
                defaultValue={selectedSubscription.billPeriodUnit}
                required={required}
                requiredMsg="subscription.billPeriodUnit.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="billcycleDay"
                labelId="subscription.billcycleDay"
                defaultValue={selectedSubscription.billcycleDay}
                required={required}
                requiredMsg="subscription.billcycleDay.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="nextBillDt"
                labelId="subscription.nextBillDt"
                defaultValue={selectedSubscription.nextBillDt}
                required={required}
                requiredMsg="subscription.nextBillDt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="invoiceType"
                labelId="subscription.invoiceType"
                defaultValue={selectedSubscription.invoiceType}
                required={required}
                requiredMsg="subscription.invoiceType.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="balanceAmt"
                labelId="subscription.balanceAmt"
                defaultValue={selectedSubscription.balanceAmt}
                required={required}
                requiredMsg="subscription.balanceAmt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="planCode"
                labelId="subscription.planCode"
                defaultValue={selectedSubscription.planCode}
                required={required}
                requiredMsg="subscription.planCode.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="planDesc"
                labelId="subscription.planDesc"
                defaultValue={selectedSubscription.planDesc}
                required={required}
                requiredMsg="subscription.planDesc.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="startDt"
                labelId="subscription.startDt"
                defaultValue={selectedSubscription.startDt}
                required={required}
                requiredMsg="subscription.startDt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="endDt"
                labelId="subscription.endDt"
                defaultValue={selectedSubscription.endDt}
                required={required}
                requiredMsg="subscription.endDt.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="contacts"
                labelId="subscription.contacts"
                defaultValue={selectedSubscription.contacts}
                required={required}
                requiredMsg="subscription.contacts.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="paymentMethods"
                labelId="subscription.paymentMethods"
                defaultValue={selectedSubscription.paymentMethods}
                required={required}
                requiredMsg="subscription.paymentMethods.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="tenant"
                labelId="subscription.tenant"
                defaultValue={selectedSubscription.tenant}
                required={required}
                requiredMsg="subscription.tenant.requiredMsg"
                disabled={readOnly}
            />

            <Button type="submit" label={intl.formatMessage({ id: 'createButton.label' })} className="p-mt-3" />
        </CForm>
    );
};

export default SubscriptionForm;
