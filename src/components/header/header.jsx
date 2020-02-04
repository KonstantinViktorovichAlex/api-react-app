import React, {Component} from 'react';
import { Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'

import './header.css'

class Header extends Component {

    render(){
        return(
            <div className ='header'>
                <Nav>
                    <NavItem className = "links">
                        <Link to = '/'>Users</Link>
                    </NavItem>
                    <NavItem className = "links">
                        <Link to = '/posts/'>Posts</Link>
                    </NavItem>
                    
                </Nav>
            </div>
        )
    }
}
export default Header