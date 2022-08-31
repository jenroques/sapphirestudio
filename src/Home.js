import React from 'react'
import Logo from "./images/logo.jpg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function () {
    return (
        <Card>
            <Box>
                <CardContent>
                    <img src={Logo} alt="logo" />
                    <Typography>
                        Coming Soon
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}
