import React from 'react';
import emailjs from 'emailjs-com';
import './contact-styles.css'
//--------------------------------- Material UI
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '99%',
    },
    fields: {
        margin: theme.spacing(1),
        width: '25%',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)

        // --------------------------------------------- Form fields validation

        emailjs.sendForm('gmail', 'template_SYirKzuc', e.target, 'user_gVw04H120W89ChXDjHHPO')
            .then((result) => {
                alert('Your message has been sent correctly, I will answer you as soon as posible...')
                console.log(result.text);
                console.log('Email successfully sent')
            }, (error) => {
                console.log(error.text);
                console.log('Something was wrong at sending your email')
            });
    }

    const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    return (
        <div>
            <Toolbar></Toolbar>

            <div className='presentation'>
                <div className='titles'>
                    <h1>Contact Me</h1>
                    <h3>Yagel Salazar Reyes</h3>
                    <h3>Email: yagels.xd@gmail.com</h3>
                    <h3>Phone Number: (+52) 772-122-47-67</h3>
                    <h2>Social Media:</h2>
                    <div className='social'>
                        <a href='/linkedin.com/in/yagel-salazar-reyes-bb58a7197'><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                        <a href='/linkedin.com/in/yagel-salazar-reyes-bb58a7197'><GitHubIcon fontSize='large'></GitHubIcon></a>
                        <a href='/linkedin.com/in/yagel-salazar-reyes-bb58a7197'><TwitterIcon fontSize='large'></TwitterIcon></a>
                    </div>
                </div>
            </div>

            <h1>Send me an Email</h1>

            <div>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={e => sendEmail(e)}>
                    <Input required type='text' id="standard-required" placeholder='Your Name' className={classes.fields} name="user_name" />
                    <Input required type='email' id="standard-required" placeholder='your Email' className={classes.fields} name="user_email" />
                    <Input type='text' id="standard-required" placeholder="Phone Number" className={classes.fields} name="contact_number" />
                    <Input
                        type='text'
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        defaultValue=""
                        variant="outlined"
                        placeholder="Here type your message..."
                        required
                        className={classes.root}
                        name="message"
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<SendIcon />}
                        type='submit'
                        value="Send"
                    >
                        Send
                    </Button>
                </form>
            </div>

        </div>

    );
}