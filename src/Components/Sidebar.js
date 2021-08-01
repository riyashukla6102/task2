import React from 'react';

const Sidebar=()=>{
    return(
        <div className="sidebar">
          <div className="title">MEDIUS</div>
            <a href=""><i class="fa fa-desktop"></i>Dashboard </a>
            <div className="menu"><i class="fa fa-bitcoin"></i>Collection <i class="fa fa-caret-down"></i>
                <div class="sub-menu">
                    <a href="#"><i class=" fa fa-stack-overflow"></i>Batch</a>
                    <a href="#"><i class="fa fa-user"></i>Accounts</a>
                    <a href="#"><i class="fa fa-chart-bar"></i>Daily Reports</a>
                </div>
            </div>

           
            <a href=""><i class=" fa fa-stack-overflow"></i>Pre-Ligation  <i class="fa fa-caret-down"></i></a>
            <a href=""><i class="fa fa-desktop"></i>Ligation</a>
            <hr style={{color:'gray'}}/>
            <a href=""><i class="fa fa-phone"></i>Communication</a>
            <a href=""><i class="fa fa-user"></i>Super-Admin</a>
            <a href=""><i class="fa fa-users"></i>Users and Roles</a>
            <a href=""><i class="fa fa-user"></i>Account</a>
            </div>

    )
}

export default Sidebar;