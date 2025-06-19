import React from 'react';
import { Container } from 'react-bootstrap';
import '../HeroSectionOuerMenu/HeroSectionOuerMenu.css'; 

function HeroSectionOuerMenu() {
    return (
        <div>
            <Container className="hero-container">
                <div className="hero-image-wrapper">
                    <div className="Hero-title">
                        <h1 className="text-white fw-bold mb-2" style={{
    fontFamily:
      'Kalnia, "HelveticaNeue-Light"',
}}>Our Menu 2</h1>
                        <p className="text-white fs-6">
                            <span className="hero-link">Home Page</span> / Our Menu 2
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HeroSectionOuerMenu;
