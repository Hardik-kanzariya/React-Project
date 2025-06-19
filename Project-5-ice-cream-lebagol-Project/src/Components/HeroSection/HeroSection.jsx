import React from 'react';
import { Container } from 'react-bootstrap';
import '../HeroSection/HeroSection.css'; // External CSS file

function HeroSection() {
    return (
        <div>
            <Container className="hero-container">
                <div className="hero-image-wrapper">
                    <div className="Hero-title">
                        <h1 className="text-white fw-bold mb-2" style={{
    fontFamily:
      'Kalnia, "HelveticaNeue-Light"',
}}>FAQ’s</h1>
                        <p className="text-white fs-6">
                            <span className="hero-link">Home Page</span> / FAQ’s
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HeroSection;
