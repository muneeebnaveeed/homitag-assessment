import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputField } from '~/design-system';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const Password = ({ name = '', label = '' }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const PasswordVisibilityIcon = isPasswordVisible ? AiFillEyeInvisible : AiFillEye;
    return (
        <InputField
            wrapperClassName="w-full"
            name={name}
            label={label}
            type={isPasswordVisible ? 'text' : 'password'}
            addonRight={
                <button
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    type="button"
                    className="px-[8.35px] h-[93%] flex justify-center items-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-dashed rounded outline-1 opacity-50 hover:opacity-100 transition">
                    <PasswordVisibilityIcon />
                </button>
            }
            required
        />
    );
};

Password.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string
};
