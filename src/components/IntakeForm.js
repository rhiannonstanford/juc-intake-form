import React, { useState, useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';
import { gsap } from "gsap";
import { useSnackbar } from 'notistack';
import Snackbar from '@material-ui/core/Snackbar';
import axios from "axios";
import { useHistory } from "react-router-dom";
// form validation
import * as yup from 'yup';
import schema from './formSchema';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
      background: 'white',
      borderRadius: 3,
    },
  },
  button: {
    background: 'slategray',
    borderRadius: 3,
    color: 'white',
    height: 56,
    padding: '0 30px',
  },
}));

// Inital Intake Form Values
const initialIntakeValues = {
  name: "",
  email: "",
  birthDate: null,
  emailConsent: false,
};
const initialIntakeErrors = {
    name: "",
    email: "",
    birthDate: "",
    emailConsent: "",
};


const IntakeForm = (props) => {
    const { setUser } = props;
    const { enqueueSnackbar } = useSnackbar();

    const [intakeInfo, setIntakeInfo] = useState(initialIntakeValues);
    const [intakeErrors, setIntakeErrors] = useState(initialIntakeErrors); 
    const [isValid, setIsValid] = useState(false); // boolean, for submit button 
    const [displayErrors,setDisplayErrors] = useState(false);

    const history = useHistory();
    const classes = useStyles();
    const dateFormat = require("dateformat");

    const handleChange = e => {
        if(e.target.name==='birthDate'&&e.target.value===''){
            // edge case for birthDate, if birthDate is empty string, yup will fail.  If it is null, yup will allow it to pass validation
            setIntakeInfo({...intakeInfo, [e.target.name]: null});
        }
        else{
            setIntakeInfo({...intakeInfo, [e.target.name]: e.target.value})
        }
    };

    const validate = (formErrors, name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => {
            formErrors[name] = '';
            setIntakeErrors({...formErrors});
        })
        .catch(err => {
            if(!(name==='birthDate'&&value==='')){
                formErrors[name] =  err.errors[0];
                setIntakeErrors({...formErrors});
            }
        } )
    }; // run validation with yup

    const dateFormatter = (stringDate) => {
        const formattedDate = dateFormat(stringDate, "yyyy-mm-dd");
        return formattedDate;
    };

    const postIntakeInfo = () => {
        setUser(intakeInfo.name);
        let formBirthDate = intakeInfo.birthDate;
        let formattedDate = dateFormatter(formBirthDate);
        const updatedIntakeInfo = {...intakeInfo, birthDate: formattedDate}
        setIntakeInfo(updatedIntakeInfo)

        axios.post("https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users", updatedIntakeInfo)
        .then(res => {

        history.push("/welcome");
        })
        .catch(err => console.log(err));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = {...intakeErrors};

        Object.keys(intakeInfo).forEach(name=>validate(formErrors, name,intakeInfo[name]));

        schema.isValid(intakeInfo).then(valid=>{
            setIsValid(valid)
        });
    };

    useEffect(()=>{
        if(isValid){
            setDisplayErrors(false);
            postIntakeInfo(intakeInfo);
            enqueueSnackbar('Yes!  You have successfully signed up!');
        }
        else{
            setDisplayErrors(true);
        }
    },[isValid])

    const handleClear = (e) => {
        e.preventDefault();
        setIntakeInfo(initialIntakeValues);
        enqueueSnackbar('Form has been cleared.');
    };
    
    useEffect(() => {
        gsap.to(".intake-container", {duration: 2, y: 30});
    }, []); // creates intake form animation, slide down



    return (
        <div >
        
            <div className="intake-container">

                <div className="intake-heading-message">
                    <p>Welcome to Just Utah Coders</p>
                    <p className="intake-sub-heading">Contact Us!</p>
                </div>
        
                <form className={classes.root} onSubmit={handleSubmit}>
                    <TextField 
                    id="name" 
                    label="Name" 
                    variant="filled" 
                    name="name" 
                    value={intakeInfo.name} 
                    onChange={handleChange}
                    />
                    <TextField 
                    id="email" 
                    label="Email" 
                    variant="filled" 
                    name="email" 
                    value={intakeInfo.email} 
                    onChange={handleChange}
                    />
                    <TextField 
                    id="birthDate" 
                    label="BirthDate" 
                    variant="filled" 
                    name="birthDate" 
                    value={intakeInfo.birthDate} 
                    onChange={handleChange}
                    />
                    <div className='intake-radio'>
                        <input type="radio" name="emailConsent" onChange={handleChange} value={true}/> Yes! I agree to be contacted via email.
                    </div>

                    <Button 
                        variant="contained" 
                        className={classes.button} 
                        size="large"
                        type="submit"
                        disabled={false}
                    >
                        Submit
                    </Button>

                    <Button 
                        variant="contained" 
                        className={classes.button} 
                        size="large"
                        type="clear"
                        onClick={handleClear}
                    >
                        Clear
                    </Button>
                    {console.log(displayErrors,intakeErrors)}
                    {
                        displayErrors?
                            <div className="intake-errors">
                                <p>{intakeErrors.name}</p>
                                <p>{intakeErrors.email}</p>
                                <p>{intakeErrors.birthDate}</p>
                                <p>{intakeErrors.emailConsent}</p>
                            </div>
                            :
                            ''
                    }

                </form>

            </div>

        </div>
    )
};

export default IntakeForm;
