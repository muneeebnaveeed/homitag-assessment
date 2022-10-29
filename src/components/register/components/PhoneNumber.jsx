import React from 'react';
import { InputField } from '~/design-system';
import ReactPhoneInput from 'react-phone-number-input';

export const PhoneNumber = () => {
    return (
        <InputField wrapperClassName="w-full" name="phone_number" label="Phone number">
            {({ field, form, setIsFocused }) => (
                <ReactPhoneInput
                    id={field.name}
                    className="p-2"
                    defaultCountry="US"
                    value={field.value}
                    onChange={(value) => form.setFieldValue(field.name, value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            )}
        </InputField>
    );
};

PhoneNumber.propTypes = {};
