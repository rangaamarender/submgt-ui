import React from 'react';

const PaymentBodyTemplate = (rowData) => {
    return (
        <>
            <span>{rowData.name}</span>
            <br />
            <span>**** **** {rowData.last4Digits}</span>
            <br />
            <span>{rowData.cardType}</span>
        </>
    );
};

export default PaymentBodyTemplate;
