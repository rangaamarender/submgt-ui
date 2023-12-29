import React from 'react';

const userRoleBodyTemplate = (rowData) => {
    return (
        <>
            <span>{rowData.subMgtRole.roleDesc}</span>
        </>
    );
};

export default userRoleBodyTemplate;
