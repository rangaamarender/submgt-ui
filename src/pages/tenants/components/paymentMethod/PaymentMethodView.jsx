import React from 'react';
import { useForm } from 'react-hook-form';
import { RiPencilFill } from 'react-icons/ri';
import { setLocale, setValidationMessages } from '../../../../i18n/i18n';

import { useDispatch, useSelector } from 'react-redux';
import ViewText from '../../../../components/view/ViewText';

const PaymentMethodView = () => {
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const selectedPaymentMethod = useSelector((state) => state.paymentMethod.selectedPaymentMethod);

    setLocale('en');
    setValidationMessages('en');

    //Submit the page
    const handleEdit = () => {
        //disptatch the edit mode
    };
    console.log(dispatch,control,handleSubmit);
    return (
        <>
            <div className="company-main-text fs-6 p-3 fw-bold border-bottom d-flex justify-content-between align-items-center">
                <div className="name-view-heading">Overview</div>

                <div className="d-flex justify-content-between align-items-center gap-3">
                    <RiPencilFill
                        onClick={handleEdit}
                        className="cursor-pointer company-primary-text company-main-text fs-4"
                    />
                </div>
            </div>

            <div className="formgrid grid m-2">
                <ViewText
                    labelId="paymentMethod.gtwyCustomerPymntProfileID"
                    value={selectedPaymentMethod.gtwyCustomerPymntProfileID}
                />
                <ViewText
                    labelId="paymentMethod.gtwyCustomerProfileID"
                    value={selectedPaymentMethod.gtwyCustomerProfileID}
                />
                <ViewText labelId="paymentMethod.gtwyPymntProfileID" value={selectedPaymentMethod.gtwyPymntProfileID} />
                <ViewText labelId="paymentMethod.name" value={selectedPaymentMethod.name} />
                <ViewText labelId="paymentMethod.defaultPymntInd" value={selectedPaymentMethod.defaultPymntInd} />
                <ViewText labelId="paymentMethod.status" value={selectedPaymentMethod.status} />
                <ViewText labelId="paymentMethod.last4Digits" value={selectedPaymentMethod.last4Digits} />
                <ViewText labelId="paymentMethod.expirationEncDt" value={selectedPaymentMethod.expirationEncDt} />
                <ViewText labelId="paymentMethod.cardType" value={selectedPaymentMethod.cardType} />
                <ViewText labelId="paymentMethod.pymntMethodID" value={selectedPaymentMethod.pymntMethodID} />
            </div>
        </>
    );
};

export default PaymentMethodView;
