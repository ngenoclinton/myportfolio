import React, { Children, useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faUser, faEnvelope,faServer, faBriefcase, faKitchenSet} from '@fortawesome/free-solid-svg-icons'
import {FaBlog, FaPhone} from 'react-icons/fa'
import './Navbar.css';

import {Link} from "react-scroll"

const Navbar = ({isOpen, toggle}) => {

    // const [isOpen, setOpen] = useState(false)
    // const toggle = () =>  setOpen(!isOpen);
   
    const menuItem = [
        {
            path: 'Home',
            name:'Home',
            icon:<FontAwesomeIcon icon={faHouse}/>
        },
        {
            path: 'Works',
            name:'Works',
            icon:<FontAwesomeIcon icon={faBriefcase}/>
        },
        {
            path: 'About',
            name:'About',
            icon:<FontAwesomeIcon icon={faUser}/>
        },
        {
            path: 'Skills',
            name:'Skills',
            icon:<FontAwesomeIcon icon={faKitchenSet}/>
        },
        {
            path: 'Services',
            name:'Services',
            icon:<FontAwesomeIcon icon={faServer}/>
        },
        
        {
            path: 'Contact',
            name:'Contact',
            icon:<FontAwesomeIcon icon={faEnvelope}/>
        },
        {
            path: 'Blog',
            name:'Blog',
            icon:<FaBlog />
        }

    ]
    return (
        <div className="sidebar">    

            <div className="bars" 
            style={{display:"none"}}>
                <FontAwesomeIcon icon={faBars}  onClick={toggle}/>
            </div>
            <div className="n-list">                           
            {menuItem.map((item, index)=>(
                <Link 
                 key={index}
                 spy={true}
                 to={item.path}                  
                 smooth={true} 
                 className="link" 
                 activeClassName="active">
                    <div className="icon" 
                    style={{ marginLeft:isOpen ? "": "-10px"}}>
                    {item.icon}
                    </div>

                    <div className="link_text" style={{display:isOpen ? "" : "none" ,  transition:"0.1s"}}>{item.name}</div>

                </Link>
            ))}
            </div>
        </div>
    )
}

export default Navbar;