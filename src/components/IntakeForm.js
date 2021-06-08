import React, { useState, useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';
import { useSnackbar } from 'notistack';
import { gsap } from "gsap";

import axios from "axios";

import * as yup from 'yup';
import schema from './formSchema';

import { useHistory } from "react-router-dom";

console.log("SCHEMA: ", schema);


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      background: 'white',
    //   opacity: ".6",
      borderRadius: 3,
    },
  },
  button: {
    background: 'slategray',
    // border: 0,
    borderRadius: 3,
    color: 'white',
    height: 56,
    padding: '0 30px',
  },
}));

// * The login function should save the returned token to localStorage. 
//You can setup `isLoading` state in your Login component, and 
//show a spinner on your form or in your button while the login request is happening.
// skelton screen alternative


// * The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
const initialIntakeValues = {
  name: "",
  email: "",
  birthDate: "",
  emailConsent: false,
};
const initialIntakeErrors = {
    name: "",
    email: "",
    birthDate: "",
    emailConsent: "",
  };


const IntakeForm = () => {
  const classes = useStyles();
//   const { enqueueSnackbar } = useSnackbar();

  const [credentials, setCredentials] = useState(initialIntakeValues);
  const [intakeErrors, setIntakeErrors] = useState(initialIntakeErrors); 

  const history = useHistory();

  const handleChange = e => {
    const userIntakeInfo = {...credentials, [e.target.name]: e.target.value}
    console.log('name & value: ', e.target.name, e.target.value)
    validate(e.target.name, e.target.value)
    setCredentials(userIntakeInfo);
  };


  const validate = (name, value) => {
    console.log("validate: ", name, value)
    console.log("schema", schema)
    yup.reach(schema, name)
      .validate(value)
      .then(() => setIntakeErrors({ ...intakeErrors, [name]: ''}))
      .catch(err => setIntakeErrors({ ...intakeErrors, [name]: err.errors[0] }))
  
      console.log("passes form validation")
    }; // run validation with yup


  const doLogin = () => {
    console.log("doLogin fired")
    console.log("credentials: ", credentials)
//     axios.post("https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users", credentials)
//     .then(res => {
//       console.log("response:", res);
//       console.log("response.status", res.status)

//       // redirect to protected page
//     //   history.push("/protected");
//     })
//     .catch(err => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin(credentials);
    // enqueueSnackbar('Yes!  You have been logged in.', 'success');
  };

  useEffect(() => {
    gsap.to(".intake-container", {duration: 2, y: 30});
    }, []); // creates intake form animation, slide down

    return (
    <div >
        
        <div className="intake-container">
        
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField 
            id="name" 
            label="Name" 
            variant="filled" 
            name="name" 
            value={credentials.name} 
            onChange={handleChange}
            />
            <TextField 
            id="email" 
            label="Email" 
            variant="filled" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange}
            />
            <TextField 
            id="birthDate" 
            label="BirthDate" 
            variant="filled" 
            name="birthDate" 
            value={credentials.birthDate} 
            onChange={handleChange}
            />
            <div className='newUserForm-radio'>
                <input type="radio" name="emailConsent" onChange={handleChange} value={true}/>check to agree to be contacted
                </div>
            <div style={{color: "red", fontSize: "16px"}}>{initialIntakeErrors.emailConsent}</div>
            <Button 
            variant="contained" 
            className={classes.button} 
            size="large"
            type="submit"
            >
            Submit
            </Button>
        </form>

        </div>

    </div>
    )
};

export default IntakeForm;

