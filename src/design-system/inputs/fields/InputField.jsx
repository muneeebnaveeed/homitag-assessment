import React, { useState } from 'react';
import { Field } from 'formik';
import cls from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const InputField = ({
    name,
    type = 'text',
    wrapperClassName = '',
    label,
    required = false,
    className = '',
    addonRight,
    children
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Field name={name}>
            {(formikProps) => {
                const { field, meta } = formikProps;
                const isError = meta.touched && meta.error;
                return (
                    <div className={cls('flex flex-col gap-2 w-min-[240px] mb-6', wrapperClassName)}>
                        {!!label && (
                            <label htmlFor={name} className={cls('cursor-pointer', { 'text-red-500': isError })}>
                                <span className={cls('transition opacity-50', { 'opacity-100': isFocused })}>
                                    {label}
                                </span>{' '}
                                {required && <strong>*</strong>}
                            </label>
                        )}

                        <div className="relative">
                            {children ? (
                                children({ ...formikProps, isFocused, setIsFocused })
                            ) : (
                                <input
                                    type={type}
                                    id={name}
                                    className={cls('p-2 w-full', { 'border-red-500 text-red-500': isError }, className)}
                                    onFocus={() => setIsFocused(true)}
                                    {...field}
                                    onBlur={(event) => {
                                        field.onBlur(event);
                                        setIsFocused(false);
                                    }}
                                />
                            )}

                            {addonRight && (
                                <div className="h-full absolute right-[1px] text-lg top-0 flex items-center">
                                    {addonRight}
                                </div>
                            )}
                        </div>
                        {isError ? (
                            <strong className="text-red-500 text-sm flex gap-2">
                                <AiOutlineClose className="mt-1" /> <span>{meta.error}</span>
                            </strong>
                        ) : (
                            <div className="h-[17.5px]" />
                        )}
                    </div>
                );
            }}
        </Field>
    );
};

InputField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    wrapperClassName: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    addonRight: PropTypes.node,
    children: PropTypes.node
};
