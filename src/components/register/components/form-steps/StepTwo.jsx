import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputField } from '~/design-system';
import { DateOfBirth, Password, PhoneNumber, ProfilePicturePicker } from '~/components/register/components';

const StepTwo = (props) => {
    return (
        <>
            <div className="w-full flex gap-0 md:gap-4">
                <DateOfBirth />
                <ProfilePicturePicker />
            </div>
            <PhoneNumber />
        </>
    );
};

StepTwo.propTypes = {};

export default StepTwo;
