import * as yup from 'yup';

const schema = yup.object().shape({

    name: yup
      .string()
      .trim()
      .required('Name is required')
      .min(2, 'username must be at least 2 characters long'), 

    email: yup
      .string()
      .trim()
      .email()
      .required('Email is required')
      .min(2, 'Email must be 2 characters long'), 

    birthDate: yup 
      .date()
      .optional()
      .default(function () {
        return new Date();
      })
     
      .typeError('this must be a valid date'),
      // I tried to get .optional() to work, but couldn't get it to work.  Will debug later.

    emailConsent: yup
      .boolean()
      .required('Email consent must be accepted.')
      .oneOf([true], "Please check to receive JUC emails and newsletters."),

});

export default schema;
