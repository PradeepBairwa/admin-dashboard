import { Link } from 'react-router-dom'
import navStyle from './Style.css';
import { useEffect, useState } from 'react';
import logo from '../assests/GuardinLogo.png'
function Navbar(props) {
    const [items, setItems] = useState([]);
    const USER_TYPE={
        PUBLIC_USER:'Public User',
        NORMAL_USER:'Normal User',
        WIFG_USER:'Gage User',
        ADMIN_USER:'Admin User'
      }
     const CURRENT_USER_TYPE=props.getCurrentUser; 
     

// useEffect(() => {
//   localStorage.setItem('items', CURRENT_USER_TYPE);
// }, [items]);

  return (
    <div style={{
        display:'flex',gap:12,padding:8,
        backgroundColor:"whitesmoke",
        color:"Teal",
        marginBottom:8,
        fontWeight:'bold',
        
        }}>
          
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'15px',fontWeight:'bold',marginRight:"40px"}} to={"/"}>
          {/* Guardian */}
          <img src={logo} style={{textAlign:'center',width:'10rem'}}></img>
        </Link>
      
        {(CURRENT_USER_TYPE=== USER_TYPE.PUBLIC_USER||CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER
          ||CURRENT_USER_TYPE===USER_TYPE.NORMAL_USER||CURRENT_USER_TYPE===USER_TYPE.WIFG_USER)?<>
          <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px'}} to={"/"}>Home</Link>
        </>:null}
        
        {(CURRENT_USER_TYPE=== USER_TYPE.WIFG_USER||CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER)?<>
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px'}} to={"/wifg"}>What If Gage</Link>
        </>:null}

        {(CURRENT_USER_TYPE=== USER_TYPE.NORMAL_USER||CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER)?<>
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px'}} to={"/dcr"}>DCR</Link>
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px'}} to={"/drv"}>DRV</Link>
        </>:null}

        {(CURRENT_USER_TYPE=== USER_TYPE.WIFG_USER||CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER)?<>
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px'}} to={"/inforcestatus"}>Inforce Status</Link>
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px'}} to={"/gagestatus"}>Gage Status</Link>
        </>:null}

        {(CURRENT_USER_TYPE===USER_TYPE.ADMIN_USER)?<>
        <Link style={{textDecoration: 'none',color:'Teal',fontSize:'18px',backgroundColor:''}} to={"/admin"}>Admin</Link>
        </>:null}
        
        
        <div style={{marginLeft:'90%',color:'red',position:'fixed',fontSize:'18px'}}> {CURRENT_USER_TYPE}</div>
      </div>
  )
}

export default Navbar
