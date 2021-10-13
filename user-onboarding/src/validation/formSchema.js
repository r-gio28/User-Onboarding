import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required for registration!')
        .min(3, 'Name must be at least 3 characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!'),
    terms: yup.boolean()
});

export default formSchema;


