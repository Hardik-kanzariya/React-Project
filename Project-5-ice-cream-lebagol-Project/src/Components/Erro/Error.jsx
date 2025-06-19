import React from 'react';
import { Container } from 'react-bootstrap';
import '../Erro/Error.css'; 
import ErrorImg from '../../assets/404-img.png';

function ErrorSection() {
    return (
        <div>
            <Container className="hero-container">
                <div className="hero-image-wrapper">
                    <div className="hero-title">
                        <h1 className="text-white fw-bold mb-2" style={{
    fontFamily:
      'Kalnia, "HelveticaNeue-Light"',
}}>Error 404</h1>
                        <p className="text-white fs-6">
                            <span className="hero-link">Home Page</span> /Error 404
                        </p>
                    </div>
                </div>

                <div className="error-image">
                     <img src={ErrorImg} alt="Error 404" className="img-fluid ice-cream-img mb-2" />
                </div>  
                <h2 className="sub-title text-center">Oops! That page can’t be found.</h2>
                <div className="error-message">
                    <p className="text-center">The Page you are looking for doesn't exitst or an other error occured. Go to Home Page</p>
                </div>
            </Container>
        </div>
    );
}

export default ErrorSection;
