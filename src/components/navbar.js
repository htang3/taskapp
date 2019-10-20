import React, { Component } from 'react';
import {Link} from 'react-router-dom';


 class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/#">Task Board</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Task </Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/add">Add Task </Link>
                    </li>
                    <li className="nav-item">
                          <Link className="nav-link" to="/user">Add User </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;