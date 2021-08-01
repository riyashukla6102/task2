import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container ,Row, Col} from 'react-bootstrap';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import Cards from './Components/Cards';


function App() {
  return (
    <>
  
    <Container>
      <Row>
      <Col sm={2}>
          <Sidebar/>
      </Col>
      <Col> 
      <Container>
        <Row>
          <Navbar/>
        </Row>
        <Row>
          <Content/>
        </Row>
        <Row>
          <Cards/>
        </Row>
      </Container>
          
        </Col> 
        
      </Row>
    
      
      
    </Container>
    </>
  )}
      
    
    
    

export default App;
