import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VIEW_ACTION } from '../../../utils/ActionTypes';
import UserForm from './UserForm';
import UserView from './UserView';

const UserDetails = () => {
    const mode = useSelector((state) => state.user.mode);
    const dispatch = useDispatch();
    const handleEdit = () => {
        //disptatch the edit mode
        console.log('got the edit');
        //dispatch(initUpdateTenantRequest());
    };
    const readOnly = mode === VIEW_ACTION;
    return <>{readOnly ? <UserView /> : <UserForm />}</>;
};

export default UserDetails;
