import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Name is required for registration!')
        .min(3, 'Name must be at least 3 characters long!'),
    last_name: yup
        .string()
        .trim()
        .required('Last name is required'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!'),
    terms: yup.boolean().required().oneOf([true])
});

export default formSchema;

