import React from 'react';
import logo from '../Image/avatar.png';

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="nav-item">
            <i class="fa fa-bars"></i>
            <div className="nav-text">Batch</div>
            <div style={{marginTop:20 ,fontSize:10}}>Total Results: 1221</div>
            
            </div>
            <div className="nav-icon">
            <i class="fa fa-search"></i>
            <i class="fa fa-bell"></i>
            <img src={logo}  width="35" height="35" style={{borderRadius:'50%'}} />
            </div>
            

        </div>
    
    )
}
 export default Navbar;