import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import Home from './Home';
import DRV from './DRV';
import { toast } from 'react-toastify';

function UserMaintenance(props) {
  const [showContent , setShowContent]=useState(false);
  const [hideDelete , setHideDelete]=useState(false);

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
  function Add(){
    const id = toast.loading("Please wait...",{autoClose:true})
    setTimeout(() => {
      setShowContent(!showContent);
      toast.update(id, { render: "All is good", type: "success", isLoading: false,autoClose:true });
     }, 3000)
      

  }
  if(showContent){
    content=<p>Please Fill The Form</p>
  }
  
  return (
    <React.Fragment>
    <div style={{textAlign:'right',marginRight:"50px",paddingTop:'5%'}}>
      {/* <h1>Welcome to UserMaintenance Tab</h1> */}
        <Button color="primary" onClick={Add}>Add User</Button>{' '}
        <Button color="secondary">View</Button>{' '}
        <Button color="success">Edit</Button>{' '}
        <Button color="info">Delete</Button>{' '}
        <Button color="warning">Refresh</Button>{' '}
        <div>{content}</div>
    </div>
  
    </React.Fragment>
  )
}

export default UserMaintenance
