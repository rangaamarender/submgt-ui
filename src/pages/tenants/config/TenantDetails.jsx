import React from 'react';
import { useSelector } from 'react-redux';
import { VIEW_ACTION } from '../../../utils/ActionTypes';
import TenantDetailsForm from './TenantDetailsForm';
import TenantViewDetails from './TenantViewDetails';

const TenantDetails = () => {
    const mode = useSelector((state) => state.tenant.mode);
    const readOnly = mode === VIEW_ACTION;
    return <>{readOnly ? <TenantViewDetails /> : <TenantDetailsForm />}</>;
};

export default TenantDetails;
