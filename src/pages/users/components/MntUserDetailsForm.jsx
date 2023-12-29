import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CustomInputText from '../../../components/controls/CustomInputText';
import { intl } from '../../../i18n/i18n';
import { updateUserRequest } from '../../../redux/actions/userActions';

const MntUserDetailsForm = ({ selectedUser, readOnlyMode }) => {
    const [readMode, setReadMode] = useState(readOnlyMode);
    //Form Control
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ selectedUser });

    const dispatch = useDispatch();
    //handle on submit
    const onSubmit = (data) => {
        const updatedUser = { ...selectedUser, ...data };
        console.log('updated values :' + updatedUser.userID + ' ' + updatedUser.phoneNbr);
        dispatch(updateUserRequest(updatedUser));
        setReadMode(true);
    };
    //

    useEffect(() => {
        // dispatch(fetchUserRequest(selectedUser.userID));
        console.log('------> got the user ' + selectedUser.userID);
    });
    const required = true;
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="formgrid grid">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="userID"
                        labelId="userID"
                        defaultValue={selectedUser.userID}
                        readOnly={readMode}
                        className="field col"
                    />

                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="phoneNbr"
                        labelId="phoneNbr"
                        defaultValue={selectedUser.phoneNbr}
                        readOnly={readMode}
                        required={required}
                        className="field col"
                    />
                </div>
                <div class="formgrid grid">
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="username"
                        labelId="username"
                        defaultValue={selectedUser.username}
                        readOnly={readMode}
                    />
                    <CustomInputText
                        control={control}
                        errors={errors}
                        name="emailID"
                        labelId="emailID"
                        defaultValue={selectedUser.emailID}
                        readOnly={readMode}
                    />
                </div>

                <Button type="submit" label={intl.formatMessage({ id: 'updateButton' })} className="p-mt-3" />
            </form>
        </Card>
    );
};

export default MntUserDetailsForm;
