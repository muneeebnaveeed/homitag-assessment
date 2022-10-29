import React from 'react';
import { InputField } from '~/design-system';
import { Password } from '~/components/register/components';

const StepOne = () => {
    return (
        <>
            <div className="w-full flex flex-wrap gap-0 md:gap-4">
                <InputField wrapperClassName="w-full md:w-[162px]" name="first_name" label="First name" required />
                <InputField wrapperClassName="w-full md:w-[162px]" name="last_name" label="Last name" required />
            </div>
            <InputField wrapperClassName="w-full" name="email" label="Email" required />
            <Password name="password" label="Password" />
            <Password name="confirm_password" label="Repeat Password" />
        </>
    );
};

StepOne.propTypes = {};

export default StepOne;
