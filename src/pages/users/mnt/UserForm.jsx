import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomEditor from '../../../components/controls/CustomEditor';
import CustomInputText from '../../../components/controls/CustomInputText';
import CustomInputTextArea from '../../../components/controls/CustomInputTextArea';
import CustomCalander from '../../../components/controls/CustomCalender';
import { intl, setLocale, setValidationMessages } from '../../../i18n/i18n';
import { updateUserRequest, addUserRequest } from '../../../redux/actions/userActions';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_ACTION, UPDATE_ACTION, VIEW_ACTION } from '../../../utils/ActionTypes';
import { CForm } from '@coreui/react';

const UserForm = () => {
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const selectedUser = useSelector((state) => state.user.selectedUser);
    const mode = useSelector((state) => state.user.mode);
    setLocale('en');
    setValidationMessages('en');

    const readOnly = mode === VIEW_ACTION;

    //Submit the page
    const onSubmit = (data) => {
        const updatedUser = { ...selectedUser, ...data };
        console.log('updated1' + updatedUser.id);
        if (mode === ADD_ACTION) {
            dispatch(addUserRequest(updatedUser));
        } else if (mode === UPDATE_ACTION) {
            dispatch(updateUserRequest(updatedUser));
        }
    };

    const required = true;

    return (
        <CForm onSubmit={handleSubmit(onSubmit)} className="row">
            <CustomInputText
                control={control}
                errors={errors}
                name="userID"
                labelId="user.userID"
                defaultValue={selectedUser.userID}
                required={required}
                requiredMsg="user.userID.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="createdBy"
                labelId="user.createdBy"
                defaultValue={selectedUser.createdBy}
                required={required}
                requiredMsg="user.createdBy.requiredMsg"
                disabled={readOnly}
            />
            <CustomCalander
                control={control}
                errors={errors}
                name="createdDt"
                labelId="user.createdDt"
                defaultValue={selectedUser.createdDt}
                required={required}
                requiredMsg="user.createdDt.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="updatedBy"
                labelId="user.updatedBy"
                defaultValue={selectedUser.updatedBy}
                required={required}
                requiredMsg="user.updatedBy.requiredMsg"
                disabled={readOnly}
            />
            <CustomCalander
                control={control}
                errors={errors}
                name="updatedDt"
                labelId="user.updatedDt"
                defaultValue={selectedUser.updatedDt}
                required={required}
                requiredMsg="user.updatedDt.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="emailID"
                labelId="user.emailID"
                defaultValue={selectedUser.emailID}
                required={required}
                requiredMsg="user.emailID.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="externalCode"
                labelId="user.externalCode"
                defaultValue={selectedUser.externalCode}
                required={required}
                requiredMsg="user.externalCode.requiredMsg"
                disabled={readOnly}
            />
            <CustomCalander
                control={control}
                errors={errors}
                name="lastLoginDt"
                labelId="user.lastLoginDt"
                defaultValue={selectedUser.lastLoginDt}
                required={required}
                requiredMsg="user.lastLoginDt.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="password"
                labelId="user.password"
                defaultValue={selectedUser.password}
                required={required}
                requiredMsg="user.password.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="salt"
                labelId="user.salt"
                defaultValue={selectedUser.salt}
                required={required}
                requiredMsg="user.salt.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="status"
                labelId="user.status"
                defaultValue={selectedUser.status}
                required={required}
                requiredMsg="user.status.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="roleID"
                labelId="user.roleID"
                defaultValue={selectedUser.roleID}
                required={required}
                requiredMsg="user.roleID.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="username"
                labelId="user.username"
                defaultValue={selectedUser.username}
                required={required}
                requiredMsg="user.username.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="userType"
                labelId="user.userType"
                defaultValue={selectedUser.userType}
                required={required}
                requiredMsg="user.userType.requiredMsg"
                disabled={readOnly}
            />

            <CustomInputText
                control={control}
                errors={errors}
                name="phoneNbr"
                labelId="user.phoneNbr"
                defaultValue={selectedUser.phoneNbr}
                required={required}
                requiredMsg="user.phoneNbr.requiredMsg"
                disabled={readOnly}
            />
            <CustomInputText
                control={control}
                errors={errors}
                name="photo"
                labelId="user.photo"
                defaultValue={selectedUser.photo}
                required={required}
                requiredMsg="user.photo.requiredMsg"
                disabled={readOnly}
            />
            <Button type="submit" label={intl.formatMessage({ id: 'createButton.label' })} className="p-mt-3" />
        </CForm>
    );
};

export default UserForm;
