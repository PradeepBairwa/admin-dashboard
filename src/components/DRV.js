import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'reactstrap';
import DrvRequest from './DrvRequest';

function DRV(props) {
    let content='';
    function show(){
        content=<DrvRequest/>
    }
  return (
    <React.Fragment>
    <div style={{textAlign:'center',paddingTop:'5%'}}>
      <h1>Wellcome to The DRV  </h1><br/>
      <div style={{height:'1px',background:'black',marginTop:'-15px',marginBottom:'15px',marginLeft:'10%',marginRight:'10%'}}></div>
      <div >
      <Button  color="primary" style={{marginRight:'5%'}}>
      <Link style={{textDecoration: 'none',color:'White',fontSize:'15px',fontWeight:'bold'}} to={"/drv/requests"}>
          DRV Requests</Link>
      </Button>{'  '}

      <Button color="secondary">
      <Link style={{textDecoration: 'none',color:'White',fontSize:'15px',fontWeight:'bold'}} to={"/drv/census"}>
          DRV Census</Link>
      </Button>
      <div style={{height:'2px',background:'black',marginTop:'15px',marginBottom:'15px',marginLeft:'20%',marginRight:'20%'}}></div>
      <Outlet />
      {content}
      </div>
    </div>
    </React.Fragment>
  )
}

export default DRV
