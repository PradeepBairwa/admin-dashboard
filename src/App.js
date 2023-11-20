import logo from './logo.svg';
import './App.css';
import {Router,Route, Routes, Link} from 'react-router-dom';
import DCR from './components/DCR';
import DRV from './components/DRV';
import DrvCensus from './components/DrvCensus';
import UserMaintenance from './components/UserMaintenance';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrvRequest from './components/DrvRequest';
import InforceStatus from './components/InforceStatus';
import GageStatus from './components/GageStatus';
import WIFGage from './components/WIFGage';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';
import accessDenied from './assests/AccessDenied.png'
import Game from './components/Game';


const USER_TYPE={
  PUBLIC_USER:'Public User',
  NORMAL_USER:'Normal User',
  WIFG_USER:'Gage User',
  ADMIN_USER:'Admin User'
}

const FeatureType={
  L1:'Delete',
  L2:'Edit',
  L3:'View',
  N:'All'
}
// const USER_TYPE={
//       PUBLIC_USER:{
//           role:'Public User',
//           access:FeatureType.L3
//       },
//       NORMAL_USER:{
//         role:'Noraml User',
//         access:FeatureType.L2
//       },
//       ADMIN_USER:{
//         role:'Admin User',
//         access:FeatureType.N
//       }
//     }
const CURRENT_USER_TYPE=USER_TYPE.NORMAL_USER

function App() {
  return (
    <div>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
      <Navbar getCurrentUser={CURRENT_USER_TYPE}/>
      <AppRoutes/>
    </div>
  );

  function AppRoutes(){
    return(
      <Routes>
         <Route path="/" element={
              <PublicElement>
                <Home/>
                {/* <Game/> */}
              </PublicElement>}>
          </Route>

         <Route path="/Admin" element={
         <AdminElement>
            <UserMaintenance getCurrentUser={CURRENT_USER_TYPE}/>
          </AdminElement>}>
          </Route>

         <Route path="/Dcr" element={
              <UserElement>
                <DCR/>
              </UserElement>}>
          </Route>

         <Route path="/Drv" element={
              <UserElement>
                <DRV/>  
              </UserElement>}>

              <Route path="requests" element={
                  <UserElement>
                    <DrvRequest getCurrentUser={CURRENT_USER_TYPE}/>  
                  </UserElement>}>
              </Route>

              <Route path="Census" element={
                  <UserElement>
                    <DrvCensus/>  
                  </UserElement>}>
              </Route>
          </Route>
          <Route path="/inforcestatus" element={
                  <WIFG>
                    <InforceStatus/>
                  </WIFG>}>
          </Route>
          <Route path="/gagestatus" element={
                  <WIFG>
                    <GageStatus/>
                  </WIFG>}>
          </Route>
          <Route path="/wifg" element={
                  <WIFG>
                    <WIFGage/>
                  </WIFG>}>
          </Route>

         {/* <Route path="/Drv" element={<DRV/>}></Route>
         <Route path="/DrvCensus" element={<DrvCensus/>}></Route> */}
         <Route path="/*" element={<div><h1>Page not Found</h1></div>}></Route>
        </Routes>
    )
  }
  function PublicElement({children}){
    if(CURRENT_USER_TYPE=== USER_TYPE.PUBLIC_USER
      ||CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER
      ||CURRENT_USER_TYPE===USER_TYPE.NORMAL_USER
      ||CURRENT_USER_TYPE===USER_TYPE.WIFG_USER)
    return<>{children}</>
    else
    return<div><img src={accessDenied} style={{marginLeft:"30px"}}></img></div>
  }
  function UserElement({children}){
    if(CURRENT_USER_TYPE=== USER_TYPE.NORMAL_USER
      ||CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER)
    return<>{children}</>
    else
    return<div><img src={accessDenied} style={{marginLeft:"30px"}}/></div>
  }
  function AdminElement({children}){
    if(CURRENT_USER_TYPE=== USER_TYPE.ADMIN_USER)
    return<>{children}</>
    else
    return <div><img src={accessDenied} style={{marginLeft:"30px"}}></img></div>
  }
  function WIFG({children}){
    if(CURRENT_USER_TYPE=== USER_TYPE.WIFG_USER
      ||CURRENT_USER_TYPE=== USER_TYPE.ADMIN_USER)
    return<>{children}</>
    else
    return<div><img src={accessDenied} style={{marginLeft:"30px"}}></img></div>
  }
}

export default App;
