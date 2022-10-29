import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { Form, useFormikContext } from 'formik';
import { useAtom } from 'jotai';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { RegisterationFormAtom } from '../atoms';

const StepOne = lazy(() => import('~/components/register/components/form-steps/StepOne'));
const StepTwo = lazy(() => import('~/components/register/components/form-steps/StepTwo'));

const formWizardFields = {
    1: ['first_name', 'last_name', 'email', 'password', 'confirm_password'],
    2: ['date_of_birth', 'profile_picture', 'country']
};

const FormWizard = ({ step }) => {
    const getFormStep = () => {
        switch (step) {
            case 1:
                return <StepOne />;
            case 2:
                return <StepTwo />;
            default:
                return <StepOne />;
        }
    };

    return getFormStep();
};

const PrimaryButton = ({ isSubmitButton, ...props }) => (
    <button type={isSubmitButton ? 'submit' : 'button'} className="btn btn-primary" {...props}>
        {isSubmitButton ? 'Register' : 'Next'}
        <AiOutlineRight />
    </button>
);

PrimaryButton.propTypes = {
    isSubmitButton: PropTypes.bool
};

export const RegisterationForm = () => {
    const [registrationForm, setRegistrationForm] = useAtom(RegisterationFormAtom);
    const { validateForm, submitForm } = useFormikContext();

    const currentFormStep = registrationForm.currentStep;
    const isLastStep = currentFormStep >= registrationForm.totalSteps;

    const canGoBack = currentFormStep > 1;

    const validateFormStep = async () => {
        const errors = await validateForm();

        const hasErrors = Object.keys(errors).length > 0;

        let isValid = true;

        if (hasErrors) {
            await submitForm();
            const fieldsToValidate = formWizardFields[currentFormStep];
            const $errors = fieldsToValidate.reduce((errorsObject, field) => {
                if (errors[field]) errorsObject[field] = errors[field];
                return errorsObject;
            }, {});

            const errorsLength = Object.keys($errors).length;

            if (errorsLength > 0) {
                isValid = false;
                return isValid;
            }
        }

        return isValid;
    };

    const handleBack = () => {
        if (currentFormStep <= 1) return;
        setRegistrationForm((prev) => ({ ...prev, currentStep: currentFormStep - 1 }));
    };

    const handleNext = async () => {
        const isValid = await validateFormStep();
        if (isValid) setRegistrationForm((prev) => ({ ...prev, currentStep: currentFormStep + 1 }));
    };

    return (
        <Form>
            <div className="w-[338px]">
                <FormWizard step={currentFormStep} />
            </div>
            <div className="w-[338px] flex justify-end items-center gap-2">
                <button type="button" onClick={handleBack} className="btn btn-secondary" disabled={!canGoBack}>
                    <AiOutlineLeft />
                    Go Back
                </button>
                <PrimaryButton isSubmitButton={isLastStep} onClick={isLastStep ? undefined : handleNext} />
            </div>
        </Form>
    );
};

RegisterationForm.propTypes = {};
