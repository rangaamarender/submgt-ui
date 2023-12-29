import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { intl } from '../../i18n/i18n';
import { loginRequest } from '../../redux/actions/authActions';
import CustomInputText from '../controls/CustomInputText';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked2, setChecked2] = useState(false);
    console.log(email, setPassword, password, setEmail);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const { error, isAuthenticated } = useSelector((state) => state.auth);

    const onSubmit = (data) => {
        console.log(data);
        dispatch(loginRequest(data.userId, data.passwd));
    };

    if (isAuthenticated) {
        navigate('/submgt/dashboard');
    }

    const required = true;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column">
            <div className="grid formgrid p-fluid">
                <div className="field sm:col-12">
                    <img src="../../assets/img/Lucid.svg" alt="RAVES" height={50} className="mb-3" />
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span className="text-600 font-medium mr-2">Do not have an account?</span>
                    <a href="/#" className="font-medium no-underline text-blue-500 cursor-pointer">
                        Create today!
                    </a>
                    <p className="text-center text-500">Lets get started with your 30 days free trial</p>
                    {error && <p className="error-message">{error}</p>}
                </div>
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="userId"
                    labelId="userId.label"
                    requiredMsg="login.required"
                    required={required}
                    className="field sm:col-12"
                />
                <CustomInputText
                    control={control}
                    errors={errors}
                    name="passwd"
                    labelId="passwd.label"
                    required={required}
                    requiredMsg="passwd.required"
                    className="field sm:col-12"
                />
                <div>
                    <div className="flex align-items-center justify-content-between mb-6">
                        <div className="flex align-items-center">
                            <Checkbox
                                id="rememberme2"
                                className="mr-2"
                                checked={checked2}
                                onChange={(e) => setChecked2(e.checked)}
                            />
                            <label htmlFor="rememberme2">Remember me</label>
                        </div>
                        <a href="/#" className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                            Forgot your password?
                        </a>
                    </div>
                    <Button
                        type="submit"
                        label={intl.formatMessage({ id: 'loginBtn.label' })}
                        icon="pi pi-user"
                        className="w-full"
                    />
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
