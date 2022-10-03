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
            height: 540,
            marginTop: '30'
        }
    };


    return (
        <Box>
            <Paper sx={{ width: 1084, height: 996, backgroundColor: "#ffebbe" }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >

                    <Card sx={{ maxWidth: 996, maxHeight: 1084, backgroundColor: "#ffeabb" }}>
                        <CardMedia
                            display="flex"
                            component="img"
                            image={require('../images/sheana.jpeg')}
                            alt="sheana helton"
                            style={styles.media}
                        />
                    </Card>
                    <Card sx={{ maxWidth: 996, maxHeight: 1084, backgroundColor: "#ffeabb" }} display="inline" >
                        <CardContent style={styles.media}>
                            <Typography align="center" gutterBottom variant="h5" component="div">
                                The Sapphire Studio - Sheana Helton
                            </Typography>
                            <Typography align="center" display="inline"
                                variant="body2" color="text.secondary" sx={{ maxHeight: 540 }}>
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
        </Box>
    );
}