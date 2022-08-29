import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';

import Logo from "./images/logo.jpg"


export default function () {
    return (
        <MDBCard>
            <MDBCardBody>
                <img src={Logo} alt="logo" />
                <MDBCardText>
                    Coming Soon
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}
