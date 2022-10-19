import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"

import {
    Box,
    Button,
    Grid,
    Paper,
    TextField,
} from '@mui/material'

export default function Appointment() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uhwypyg', 'YOUR_TEMPLATE_ID', form.current, 'lI8LgOZdg4dWtOQnX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    function Mailto({ email, subject, body, ...props }) {
        return (
            <a style={{ color: 'black' }} href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
                {props.children}
            </a>
        );
    }

    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >

            <Paper sx={{ width: 884, height: 696, backgroundColor: '#ffebbe' }}>
                <Grid item xs={3}
                    sx={{ ml: 40, mt: 35 }}>
                    <Mailto email="sheanahelton@gmail.com" subject="Appointment Request" body="Sapphire Studio Appointment Request" style={{ color: 'black' }}>
                        Request an Appointment
                    </Mailto>
                </Grid>
            </Paper>
        </Grid>

    );
};

