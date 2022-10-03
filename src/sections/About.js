import * as React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography
}
    from '@mui/material';




export default function About() {

    const styles = {
        media: {
            height: 600,
            marginTop: '30'
        }
    };


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
            sx={{ backgroundColor: "#ffebbe" }}>

            <Paper style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
                sx={{ width: 884, height: 696, backgroundColor: "#ffebbe" }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >


                    <Card >
                        <CardMedia
                            display="flex"
                            component="img"
                            image={require('../images/sheana.jpeg')}
                            alt="sheana helton"
                            style={styles.media}
                        />
                    </Card>
                    <Card sx={{ maxWidth: 696, maxHeight: 784, backgroundColor: "#ffeabb" }} display="inline" >
                        <CardContent style={styles.media}>
                            <Typography align="center" gutterBottom variant="h5" component="div" sx={{ mt: 10 }}>
                                The Sapphire Studio - Sheana Helton
                            </Typography>
                            <Typography align="center"
                                variant="body2" color="text.secondary" sx={{ mt: 10 }}>
                                The Sapphire Studio is a private, appointment only salon,<br></br>
                                owned and operated by Sheana Helton, a licensed and insured<br></br>
                                hair stylist and makeup artist.  Sheana's expertise has<br></br>
                                allowed her to work on the sets of Dateline, ESPN,<br></br>
                                Turner Classic Movies, and other commercial endeavors.<br></br>
                                She was recently seen on local television's FOX News,<br></br>
                                Studio STL, giving makeup tips and tricks.<br></br>
                                <br></br>
                                Sheana's stylish eye inspires fresh and exciting<br></br>
                                cuts and colors for her beloved clients. Clients can be assured<br></br>
                                a relaxing, individualized, and enjoyable experience at<br></br>
                                The Sapphire Studio.<br></br>
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Paper>

        </div>
    );
}