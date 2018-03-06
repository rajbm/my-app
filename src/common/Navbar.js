import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/"> Book Store</NavLink>                     
                    </div>
                    
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink exact activeClassName="active_link" to="/"><span className="glyphicon glyphicon-tasks"></span> Books</NavLink></li>
                        <li><NavLink exact activeClassName="active_link" to="/authors"><span className="glyphicon glyphicon-user"></span> Authors</NavLink></li>                        
                    </ul>
                </div>
            </nav>
        )
      }
      
}
export default NavBar;
