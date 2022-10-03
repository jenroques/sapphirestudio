import React, { useState } from 'react'
import Logo from '../images/logo.jpg'

import {
    Box,
    Grow,
    Paper,
} from '@mui/material'



export default function Home() {
    const [open, setOpen] = useState(true)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box sx={{ alignItems: "center" }}>
                <Paper sx={{ width: 884, height: 696, backgroundColor: "#001125" }}>
                    <Grow
                        in={open}
                        style={{ transformOrigin: '10 10 10' }}
                        {...(open ? { timeout: 5000 } : {})}
                    >
                        <img src={Logo} alt="logo" />
                    </Grow>
                </Paper>
            </Box>
        </div>
    )
}
