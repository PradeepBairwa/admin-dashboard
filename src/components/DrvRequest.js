import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button } from 'reactstrap'

function DrvRequest(props) {
    const [hideDelete , setHideDelete]=useState(false);
    const [user , setUser]=useState();
    

    useEffect(()=>{
        // setUser(localStorage.getItem('items'));
        setUser(props.getCurrentUser)
        if(CURRENT_USER_TYPE===USER_TYPE.NORMAL_USER){
          setHideDelete(true);
        }
    },[user])
    const USER_TYPE={
        PUBLIC_USER:'Public User',
        NORMAL_USER:'Normal User',
        ADMIN_USER:'Admin User'
      }
     const CURRENT_USER_TYPE=user;
    function showToast(){
      toast.error('hi');
    }
  
  return (
    <div>
      
      <h1>DRV Request</h1>
        <Button  color="primary"onClick={showToast} >Drv Request</Button>{' '}
        <Button color="secondary">View Requests</Button>{' '}
        <Button color="success"hidden={hideDelete}>Download PDF</Button>{' '}
        <Button color="info"hidden={hideDelete}>Delete</Button>{' '}
        <Button color="warning">Refresh</Button>{' '}
    </div>
  )
}

export default DrvRequest
