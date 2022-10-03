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

    return (
        <Box >
            <Grid
                container
                spacing={2}
                direction="column"
                justify="space-between"
                alignItems="center"
            >

                <Paper sx={{ width: 884, height: 696, backgroundColor: '#ffebbe' }}>
                    <Box
                        ref={form}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={sendEmail}
                    >

                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                type="text"
                                name="name"
                                sx={{ backgroundColor: '#ffebbe' }}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Email"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>

                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                            />
                        </div>
                        <div >
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY}
                                onChange={onChange}
                            />
                            <Button type="submit" value="Send" variant="text">Send Request</Button>
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Box >
    );
};

