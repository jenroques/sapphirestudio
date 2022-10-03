import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"

import {
    Box,
    Button,
    Card,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material'

export default function Appointment() {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uhwypyg', 'YOUR_TEMPLATE_ID', form.current, 'lI8LgOZdg4dWtOQnX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSubmitted(true)
    };

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <Box>
            <Grid
                container
                spacing={2}
                direction="column"
                justify="space-between"
                alignItems="center"
            >

                <Paper sx={{ width: 1084, height: 996, backgroundColor: "#ffebbe" }}>
                    {submitted === false &&
                        <form
                            ref={form}
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={sendEmail}
                        >

                            <div>
                                <br></br>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    type="text"
                                    name="name"
                                />
                            </div>

                            <div>
                                <br></br>
                                <TextField
                                    required
                                    id="outlined-disabled"
                                    label="Email"
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div>
                                <br></br>
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <div>
                                <br></br>
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_SITE_KEY}
                                    onChange={onChange}
                                />
                                <br></br>
                                <Button type="submit" value="Send" variant="text">Send Request</Button>
                            </div>
                        </form>}
                    {submitted === true &&

                        <Card>
                            <Typography>
                                Thank you! We will be in touch!
                            </Typography>
                        </Card>
                    }
                </Paper>

            </Grid>
        </Box >
    );
};

