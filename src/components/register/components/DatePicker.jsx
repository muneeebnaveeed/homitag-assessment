import React from 'react';
import { InputField } from '~/design-system';
import DatePicker from 'react-datepicker';

export const DateOfBirth = () => {
    return (
        <InputField wrapperClassName="w-full grow" name="date_of_birth" label="Date of birth">
            {({ field, form, setIsFocused }) => (
                <DatePicker
                    id={field.name}
                    selected={field.value}
                    dateFormat="d MMM yyyy"
                    onChange={(selectedDate) => form.setFieldValue(field.name, selectedDate)}
                    onCalendarOpen={() => setIsFocused(true)}
                    onCalendarClose={() => setIsFocused(false)}
                    className="p-2 w-full cursor-pointer border border-solid border-dark border-opacity-20 rounded focus:outline-2 focus:outline-dashed focus:outline-offset-2"
                />
            )}
        </InputField>
    );
};

DateOfBirth.propTypes = {};
