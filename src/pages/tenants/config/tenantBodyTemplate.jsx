import React from 'react';

const tenantBodyTemplate = (rowData) => {
    return (
        <>
            <span>{rowData.companyName}</span>
        </>
    );
};

export default tenantBodyTemplate;
