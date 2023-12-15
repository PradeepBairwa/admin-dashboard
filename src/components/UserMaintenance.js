import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import Home from './Home';
import DRV from './DRV';
import { toast } from 'react-toastify';

function UserMaintenance(props) {
  const [showContent , setShowContent]=useState(false);
  const [hideDelete , setHideDelete]=useState(false);
  const [addModal,setAddModal]=useState(false);
  const [isLoading,setIsLoading]=useState(false);

  const USER_TYPE={
    PUBLIC_USER:'Public User',
    NORMAL_USER:'Normal User',
    ADMIN_USER:'Admin User'
  }
 const CURRENT_USER_TYPE=props.getCurrentUser; 
 useEffect(()=>{
        if(CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER){
          setHideDelete(true);
        }
 },[props.getCurrentUser])
 
  let content;
  let loading;
  const Loading=(event)=>{
    setIsLoading(!isLoading);
  }
  if(isLoading){
    loading=<p>Loading...</p>
  }
  
  const AddUserToggele=(event)=>{
    setAddModal(!addModal);
  }
  if(showContent){
    content=<p>Please Fill The Form</p>
  }
  
  return (
    <React.Fragment>
    <div style={{textAlign:'right',marginRight:"50px",paddingTop:'5%'}}>
      {/* <h1>Welcome to UserMaintenance Tab</h1> */}
        <Button color="primary" onClick={event=>AddUserToggele(event)}>Add User</Button>{' '}
        <Button color="secondary">View</Button>{' '}
        <Button color="success">Edit</Button>{' '}
        <Button color="info">Delete</Button>{' '}
        <Button color="warning">Refresh</Button>{' '}
        <div>{content}</div>
    </div>
    <section >
    <Modal isOpen={addModal} toggle={AddUserToggele} size='lg' >
        <ModalHeader toggle={AddUserToggele}>Add User</ModalHeader>
        <ModalBody>
       <Form>
        <Row>
          <Col>
          
  <FormGroup row>
    <Label
      for="racfId"
      sm={4}
    >
      Racf ID
    </Label>
    <Col sm={8}>
      <Input
        id="racfId"
        name="racfId"
        placeholder="Racf ID"
        type="text"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="firstName"
      sm={4}
    >
      First Name
    </Label>
    <Col sm={8}>
      <Input
        id="firstName"
        name="firstName"
        placeholder="First Name"
        type="text"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="email"
      sm={4}
    >
      Email
    </Label>
    <Col sm={8}>
      <Input
        id="email"
        name="email"
        placeholder="email"
        type="Email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="isActive"
      sm={4}
    >
      Is Active
    </Label>
    <Col sm={8}>
      <Input
        id="isActive"
        name="isActive"
        type="select"
      >
        <option>
          yes
        </option>
        <option>
          no
        </option>
       
      </Input>
    </Col>
  </FormGroup>


          </Col>
      {/* Second column     */}
          <Col>
          
  <FormGroup row>
  <Col sm={5}>
    <Button  id="search" style={{width:"auto"}} onClick={event=>Loading(event)}>Search User</Button>
    </Col>
    <Label for="search" sm={7}>{loading}</Label>
  </FormGroup>
  <FormGroup row>
    <Label
      for="lastName"
      sm={4}
    >
      Last Name
    </Label>
    <Col sm={8}>
      <Input
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="role"
      sm={4}
    >
      Role
    </Label>
    <Col sm={8}>
      <Input
        id="role"
        name="role"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>

          </Col>
        </Row>
        </Form>          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={AddUserToggele}>
            Save 
          </Button>{' '}
          <Button color="secondary" onClick={AddUserToggele}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </section>

  
    </React.Fragment>
  )
}

export default UserMaintenance
