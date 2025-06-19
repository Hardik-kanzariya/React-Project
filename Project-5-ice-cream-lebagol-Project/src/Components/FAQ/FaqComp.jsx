import { useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import './FaqComp.css';

const FaqComp = () => {
  const [activeKey, setActiveKey] = useState(""); 

  const faq = [
    { question: "What about payment security ?",
         answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." 
    },
    { question: "When should I receive my shipment?",  
        answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What happens to my shipment if I cancel?", 
         answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What are some types of projects you enjoy?",  
        answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What is included in your service?", 
        answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "What warranties do I have for my shipments?", 
        answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "Can I get payment terms?", 
        answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet."},
    { question: "Accurate responses to client’s requirements", 
         answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." },
    { question: "How can I track my shipments?", 
        answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet."},
    { question: "What payment methods are supported?", 
         answer: "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet." }
  ];

  const left = faq.slice(0, 5);
  const right = faq.slice(5, 10);

  // Custom toggle handler
  const handleToggle = (key) => {
    setActiveKey(prevKey => (prevKey === key ? "" : key));
  };

  return (
    
    
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1 className="text-center mb-5 heading-text">Frequently asked questions from our support</h1>
        <Row className="g-1">
          {[left, right].map((section, colIndex) => (
            <Col xs={12} md={6} key={colIndex}>
              <Accordion activeKey={activeKey}>
                {section.map((item, index) => {
                  const actualIndex = colIndex === 0 ? index : index + 5;
                  return (
                    <Accordion.Item className='m-3 text' eventKey={actualIndex.toString()} key={actualIndex}>
                      <Accordion.Header className='fs-5'
                        onClick={() => handleToggle(actualIndex.toString())} >
                        {item.question}
                      </Accordion.Header>
                      <Accordion.Body >
                        {item.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FaqComp;
