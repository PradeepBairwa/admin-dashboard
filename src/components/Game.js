import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import gameStyle from "./Style.css";

function Game() {
  return (
    
    <div style={{
        textAlign:'center',
        marginTop:'2rem'
        }}>
      Wellcome to the Boom !!!
      <div style={{
        borderStyle:'solid',
        width:'300px',
        height:'300px',
        marginTop:'10px',
        marginLeft:'40%'
        }}>
            <Container >
                <Row>
                    <Col><div style={{borderStyle:'solid',width:'20px',height:'20px',marginTop:'10px',marginLeft:'1%',backgroundColor:'red'}}></div></Col>
                    <Col><div style={{borderStyle:'solid',width:'20px',height:'20px',marginTop:'10px',marginLeft:'1%',backgroundColor:'red'}}></div></Col>
                    <Col><div style={{borderStyle:'solid',width:'20px',height:'20px',marginTop:'10px',marginLeft:'1%',backgroundColor:'red'}}></div></Col>
                    <Col><div style={{borderStyle:'solid',width:'20px',height:'20px',marginTop:'10px',marginLeft:'1%',backgroundColor:'red'}}></div></Col>
                    <Col><div className={gameStyle.gameCol}></div></Col>
                </Row>
                
            </Container>
                    {/* <div style={{
                        borderStyle:'solid',
                        width:'20px',
                        height:'20px',
                        marginTop:'10px',
                        marginLeft:'1%',
                        color:'blue'
                    }}>

                    </div> */}

      </div>
    </div>
  )
}

export default Game
