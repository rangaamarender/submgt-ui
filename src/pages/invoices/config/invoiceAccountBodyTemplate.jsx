import React from 'react';

const invoiceAccountBodyTemplate = (rowData) => {
    return (
        <>
            <span>{rowData.subscription.acctNbr}</span>
            <br />
            <small>
                <i>
                    {rowData.subscription.planCode} - {rowData.subscription.planDesc}
                </i>
            </small>
        </>
    );
};

export default invoiceAccountBodyTemplate;
