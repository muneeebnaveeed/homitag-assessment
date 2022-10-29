import React, { useRef } from 'react';
import { InputField } from '~/design-system';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ProfilePicturePicker = () => {
    const attachButtonRef = useRef();

    const handleAttach = () => attachButtonRef.current?.click();

    return (
        <>
            <InputField name="profile_picture" label="Avatar">
                {({ field, form, setIsFocused }) => {
                    const handleFocus = () => setIsFocused(true);
                    const handleBlur = () => setIsFocused(false);
                    const focusProps = { onFocus: handleFocus, onBlur: handleBlur };

                    const selectedFile = field.value;
                    const setSelectedFile = (file) => form.setFieldValue(field.name, file);

                    const handleFileChange = (event) => {
                        const { files } = event.target;
                        if (files.length <= 0) return;

                        const nativeFile = files[0];

                        const reader = new FileReader();

                        reader.onload = (event) => {
                            setSelectedFile(event.target.result);
                        };

                        reader.readAsDataURL(nativeFile);
                    };

                    const handleRemove = () => {
                        attachButtonRef.current?.setAttribute('value', '');
                        setSelectedFile(null);
                    };

                    return (
                        <>
                            <input
                                ref={attachButtonRef}
                                className="hidden"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                {...focusProps}
                            />
                            <div className="relative">
                                {!!selectedFile && (
                                    <button
                                        type="button"
                                        onClick={handleRemove}
                                        className="rounded-full focus:outline-dashed text-red-500 absolute -top-1 -right-1 opacity-80 hover:opacity-100 focus:opacity-100 transition">
                                        <AiFillCloseCircle />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={handleAttach}
                                    {...focusProps}
                                    className="rounded-full"
                                    id={field.name}>
                                    <img
                                        src={selectedFile || '/assets/images/empty-avatar.png'}
                                        className="rounded-full w-[33.5px] h-[33.5px] object-cover"
                                    />
                                </button>
                            </div>
                        </>
                    );
                }}
            </InputField>
        </>
    );
};

ProfilePicturePicker.propTypes = {};
