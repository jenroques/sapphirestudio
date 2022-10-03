import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import {

    Paper,
} from '@mui/material'

import Image1 from '../images/img1.jpeg';
import Image2 from '../images/img2.jpeg';
import Image3 from '../images/img3.jpeg';
import Image4 from '../images/img4.jpeg';
import Image5 from '../images/img5.jpeg';
import Image6 from '../images/img6.jpeg';
import Image7 from '../images/img7.jpeg';
import Image8 from '../images/img8.jpeg';
import Image9 from '../images/img9.jpeg';
import Image10 from '../images/img10.jpeg';
import Image11 from '../images/img11.jpeg';
import Image12 from '../images/img12.jpeg';
import Image13 from '../images/img13.jpeg';
import Image14 from '../images/img14.jpeg';
import Image15 from '../images/img15.jpeg';
import Image16 from '../images/img16.jpeg';



export default function Portfolio() {

    const handleDragStart = (e) => e.preventDefault();
    const items =
        [
            <img style={{ width: 500, height: 600 }} src={Image1} onDragStart={handleDragStart} alt="slide1" />,
            <img style={{ width: 500, height: 600 }} src={Image2} onDragStart={handleDragStart} alt="slide2" />,
            <img style={{ width: 500, height: 600 }} src={Image3} onDragStart={handleDragStart} alt="slide3" />,
            <img style={{ width: 500, height: 600 }} src={Image4} onDragStart={handleDragStart} alt="slide4" />,
            <img style={{ width: 500, height: 600 }} src={Image5} onDragStart={handleDragStart} alt="slide5" />,
            <img style={{ width: 500, height: 600 }} src={Image6} onDragStart={handleDragStart} alt="slide6" />,
            <img style={{ width: 500, height: 600 }} src={Image7} onDragStart={handleDragStart} alt="slide7" />,
            <img style={{ width: 500, height: 600 }} src={Image8} onDragStart={handleDragStart} alt="slide8" />,
            <img style={{ width: 500, height: 600 }} src={Image9} onDragStart={handleDragStart} alt="slide9" />,
            <img style={{ width: 500, height: 600 }} src={Image10} onDragStart={handleDragStart} alt="sldie10" />,
            <img style={{ width: 500, height: 600 }} src={Image11} onDragStart={handleDragStart} alt="slide11" />,
            <img style={{ width: 500, height: 600 }} src={Image12} onDragStart={handleDragStart} alt="slide12" />,
            <img style={{ width: 500, height: 600 }} src={Image13} onDragStart={handleDragStart} alt="slide13" />,
            <img style={{ width: 500, height: 600 }} src={Image14} onDragStart={handleDragStart} alt="slide14" />,
            <img style={{ width: 500, height: 600 }} src={Image15} onDragStart={handleDragStart} alt="slide15" />,
            <img style={{ width: 500, height: 600 }} src={Image16} onDragStart={handleDragStart} alt="slide16" />,
        ]


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Paper style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
                sx={{ width: 884, height: 696, backgroundColor: "#001125" }}>
                <AliceCarousel mouseTracking items={items} />
            </Paper>
        </div>
    )
}
