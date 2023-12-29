import React from 'react';
import { RiPencilFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import ViewDate from '../../../components/view/ViewDate';
import ViewText from '../../../components/view/ViewText';
import { setLocale, setValidationMessages } from '../../../i18n/i18n';
import { initUpdateTenantRequest } from '../../../redux/actions/tenantActions';
import { VIEW_ACTION } from '../../../utils/ActionTypes';

const TenantViewDetails = () => {
    const { selectedTenant, mode } = useSelector((state) => state.tenant);
    setLocale('en');
    setValidationMessages('en');
    //
    const dispatch = useDispatch();
    const handleEdit = () => {
        //disptatch the edit mode
        console.log('got the edit');
        dispatch(initUpdateTenantRequest());
    };
    const readOnly = mode === VIEW_ACTION;
    console.log(readOnly);
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
                <ViewText labelId="tenant.companyName" value={selectedTenant.companyName} />
                <ViewText labelId="tenant.externalCode" value={selectedTenant.externalCode} />
                <ViewText labelId="subscription.fee" value="-" />
                <ViewDate labelId="subscription.createdDt" value={selectedTenant.createdDt} />
                <ViewDate labelId="subscription.startDt" value={selectedTenant.subscription.startDt} />
                <ViewDate labelId="subscription.endDt" value={selectedTenant.subscription.endDt} />
            </div>
        </>
    );
};

export default TenantViewDetails;
