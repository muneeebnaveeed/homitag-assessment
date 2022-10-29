import { object, ref, string } from 'yup';

const nameSchema = (requiredMessage) =>
    string()
        .required(requiredMessage)
        .min(3, 'Atleast three characters are required')
        .matches(/^[a-zA-Z ]*$/, { message: 'Invalid first name' });

export const RegisterValidationSchema = object({
    first_name: nameSchema('Please enter your first name'),
    last_name: nameSchema('Please enter your last name'),
    email: string().required('Please enter your email').email('Please enter a valid email'),
    password: string()
        .required('Please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain atleast 8 digits, one uppercase letter, one number and one special character'
        ),
    confirm_password: string()
        .oneOf([ref('password')], 'Passwords must match')
        .required('Please confirm your password')
    // phoneNumber: string().required('Please enter your phone number')
});
