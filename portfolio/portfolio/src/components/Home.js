// Home.js

import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Home2 from './homep/Home2';
import Type from './homep/Type';

const Home = () => {
 return (
 // < section style={{backgroundColor :'black', color :'white', display:'block'
 //}}>
 <section style={{color:'white'}}>
  <Container fluid className="home-section" id="home">
    
    <Container className="home-content">
      <Row>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> Krushna Chavan</strong>
          </h1>

          <div style={{ padding: 50, textAlign: "left" }}>
          
          </div>
        </Col>
         

        
      </Row>
    </Container>
  </Container>
  <Home2 />
  <Type />
</section>
  );
};

export default Home;
