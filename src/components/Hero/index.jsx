import React from 'react';
import Form from '../Form'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import './index.css'

function Hero() {
    return (
        
            <Box className="hero-section-wrapper" component="section" m={1}>
                <Container  className="hero-section" maxWidth="md">
                    <Typography component="h1">
                        <img className="logo" src="logo_xtrategie.png" alt="logo xtrategie" />
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Form>

                    </Form>
                </Container>
            </Box>
        
    )
};

export default Hero;