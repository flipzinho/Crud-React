import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default props =>  
  <aside className="area">
      <nav className="menu">
            <Link to="/">
            <i className="fa fa-home"></i>Início
           

            </Link>
            <Link to="/user"> <i clLinkssName="fa fa-users">
                    </i>Usuários 
            </Link>
      </nav>
</aside>