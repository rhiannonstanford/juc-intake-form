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
      .date().default(function () {
        return new Date();
      }).optional(),


    emailConsent: yup
      .boolean()
      .required('Email consent must be accepted.')
      .oneOf([true], "Please check to receive JUC emails and newsletters."),

});

export default schema;
