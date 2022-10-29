import React from 'react';
import { Formik } from 'formik';
import { RegisterValidationSchema } from '~/components/register/validations';
import { RegisterationForm } from '~/components/register/components';
import { createGUID } from '~/utils';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { RegisterationFormAtom } from '~/components/register/atoms';

const Register = () => {
    const navigate = useNavigate();
    const setRegistrationForm = useSetAtom(RegisterationFormAtom);

    const handleSubmit = (values) => {
        const id = createGUID();
        localStorage.setItem('token', JSON.stringify(id));
        localStorage.setItem('user', JSON.stringify(values));
        setRegistrationForm((prev) => ({ ...prev, currentStep: 1 }));
        navigate('/');
    };

    return (
        <div className="w-full flex flex-col items-center mt-[200px]">
            <img src="/assets/images/branding/icon-logo.jpg" className="mb-12" />
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                    phone_number: '',
                    date_of_birth: '',
                    country: '',
                    profile_picture: ''
                }}
                validationSchema={RegisterValidationSchema}
                onSubmit={handleSubmit}>
                <RegisterationForm />
            </Formik>
        </div>
    );
};

export default Register;
