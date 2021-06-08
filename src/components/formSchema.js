import * as yup from 'yup';

const schema = yup.object().shape({

    name: yup
      .string()
      .trim()
      .required('Name is required')
      .min(2, 'Username must be 2 characters long'), 

    email: yup
    .string()
    .trim()
    .email()
    .required('Email is required')
    .min(2, 'Email must be 2 characters long'), 

    birthDate: yup 
      .string()
      .required('Please enter your birthdate.'), 

    emailConsent: yup
      .boolean()
      .required('Email consent must be accepted.')
      .oneOf([true], "The terms and conditions must be accepted."),

});

export default schema;
