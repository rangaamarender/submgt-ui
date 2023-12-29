import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VIEW_ACTION } from '../../../../utils/ActionTypes';
import CreditCardForm from './CreditCardForm';
import PaymentMethodView from './PaymentMethodView';

const PaymentMethodDetails = () => {
    const mode = useSelector((state) => state.paymentMethod.mode);
    const dispatch = useDispatch();
    const handleEdit = () => {
        //disptatch the edit mode
        console.log('got the edit');
        //dispatch(initUpdatePaymentMethodRequest());
    };
    const readOnly = mode === VIEW_ACTION;
    console.log(dispatch,handleEdit);
    return <>{readOnly ? <PaymentMethodView /> : <CreditCardForm />}</>;
};

export default PaymentMethodDetails;
