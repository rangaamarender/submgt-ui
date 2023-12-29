import { Button } from 'primereact/button';
import React from 'react';
import { useForm } from 'react-hook-form';
import CustomInputText from '../../../../components/controls/CustomInputText';
import { intl, setLocale, setValidationMessages } from '../../../../i18n/i18n';

import { Message } from 'primereact/message';

import { CForm } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethodRequest, cancelPaymentMethodAction } from '../../../../redux/actions/paymentMethodActions';
import { ADD_ACTION, VIEW_ACTION } from '../../../../utils/ActionTypes';

const CreditCardForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.paymentMethod);
    const selectedCreditCard = useSelector((state) => state.paymentMethod.creditCard);
    const mode = useSelector((state) => state.paymentMethod.mode);
    setLocale('en');
    setValidationMessages('en');
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(selectedCreditCard);

    const readOnly = mode === VIEW_ACTION;
    const subscriptionID = useSelector((state) => state.paymentMethod.subscriptionID);
    //Submit the page
    const onSubmit = (data) => {
        const updatedCreditCard = { ...selectedCreditCard, ...data };
        console.log('Subscriptin ID--->' + subscriptionID + '-- mode---' + mode + '---' + updatedCreditCard.name);
        if (mode === ADD_ACTION) {
            dispatch(addPaymentMethodRequest(subscriptionID, updatedCreditCard));
        }
    };
    const handleCancel = () => {
        console.log('cancel log');
        dispatch(cancelPaymentMethodAction());
    };
    const required = true;
console.log(loading);
    return (
        <>
            <CForm onSubmit={handleSubmit(onSubmit)}>
                {error && <Message severity="error" text={error.response.data} />}
                <div className="formgrid grid m-2">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="name"
                        labelId="creditCard.name"
                        defaultValue={selectedCreditCard.name}
                        required={required}
                        requiredMsg="creditCard.name.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardHolderName"
                        labelId="creditCard.creditCardHolderName"
                        defaultValue={selectedCreditCard.creditCardHolderName}
                        required={required}
                        requiredMsg="creditCard.creditCardHolderName.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardType"
                        labelId="creditCard.creditCardType"
                        defaultValue={selectedCreditCard.creditCardType}
                        required={required}
                        requiredMsg="creditCard.creditCardType.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardNum"
                        labelId="creditCard.creditCardNum"
                        defaultValue={selectedCreditCard.creditCardNum}
                        required={required}
                        requiredMsg="creditCard.creditCardNum.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardExpDate"
                        labelId="creditCard.creditCardExpDate"
                        defaultValue={selectedCreditCard.creditCardExpDate}
                        required={required}
                        requiredMsg="creditCard.creditCardExpDate.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardExpMonth"
                        labelId="creditCard.creditCardExpMonth"
                        defaultValue={selectedCreditCard.creditCardExpMonth}
                        required={required}
                        requiredMsg="creditCard.creditCardExpMonth.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardExpYear"
                        labelId="creditCard.creditCardExpYear"
                        defaultValue={selectedCreditCard.creditCardExpYear}
                        required={required}
                        requiredMsg="creditCard.creditCardExpYear.requiredMsg"
                        disabled={readOnly}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="creditCardCvv"
                        labelId="creditCard.creditCardCvv"
                        defaultValue={selectedCreditCard.creditCardCvv}
                        required={required}
                        requiredMsg="creditCard.creditCardCvv.requiredMsg"
                        disabled={readOnly}
                    />
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
                </div>
            </CForm>
        </>
    );
};

export default CreditCardForm;
