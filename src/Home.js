import React, { useState } from 'react'
import Logo from "./images/logo.jpg"

import {
    Grow
} from '@mui/material'

import Header from "./sections/Header";


export default function Home() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <Header />

            <Grow
                in={open}
                style={{ transformOrigin: '10 10 10' }}
                {...(open ? { timeout: 5000 } : {})}
            >
                <img src={Logo} alt="logo" />
            </Grow>
        </>
    )
}
