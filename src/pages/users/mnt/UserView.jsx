import React from 'react';
import { useForm } from 'react-hook-form';
import { setLocale, setValidationMessages } from '../../../i18n/i18n';

import { RiPencilFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import ViewDate from '../../../components/view/ViewDate';
import ViewText from '../../../components/view/ViewText';




const UserView = () => {
    const dispatch = useDispatch();
    const {
        control,
        handleSubmit,
        // formState: { errors },
    } = useForm();
console.log(dispatch,control,handleSubmit);
    const selectedUser = useSelector((state) => state.user.selectedUser);

    setLocale('en');
    setValidationMessages('en');

    //Submit the page
    const handleEdit = () => {
        //disptatch the edit mode
    };

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
                <ViewText labelId="user.userID" value={selectedUser.userID} />
                <ViewText labelId="user.createdBy" value={selectedUser.createdBy} />
                <ViewDate labelId="user.createdDt" value={selectedUser.createdDt} />
                <ViewText labelId="user.updatedBy" value={selectedUser.updatedBy} />
                <ViewDate labelId="user.updatedDt" value={selectedUser.updatedDt} />
                <ViewText labelId="user.emailID" value={selectedUser.emailID} />
                <ViewText labelId="user.externalCode" value={selectedUser.externalCode} />
                <ViewDate labelId="user.lastLoginDt" value={selectedUser.lastLoginDt} />
                <ViewText labelId="user.password" value={selectedUser.password} />
                <ViewText labelId="user.salt" value={selectedUser.salt} />
                <ViewText labelId="user.status" value={selectedUser.status} />
                <ViewText labelId="user.roleID" value={selectedUser.roleID} />
                <ViewText labelId="user.username" value={selectedUser.username} />
                <ViewText labelId="user.userType" value={selectedUser.userType} />

                <ViewText labelId="user.phoneNbr" value={selectedUser.phoneNbr} />
                <ViewText labelId="user.photo" value={selectedUser.photo} />
            </div>
        </>
    );
};

export default UserView;
