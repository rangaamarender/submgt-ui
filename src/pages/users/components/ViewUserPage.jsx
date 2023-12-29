import React from 'react';
import { useSelector } from 'react-redux';
import { setLocale, setValidationMessages } from '../../../i18n/i18n';

const ViewUserPage = () => {
    setLocale('en');
    setValidationMessages('en');
    const selectedUser = useSelector((state) => state.user.selectedUser);
    console.log(selectedUser);
    return (
        <>
            <h3>Testing</h3>
        </>
    );
};

export default ViewUserPage;
