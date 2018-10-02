import React from "react";
import classes from './Navigation.css';
import { Row, Column} from 'simple-flexbox';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';



const navBar = () =>{

    return <div className = {classes.NavWrapper}>
                <nav className = {classes.NavBar}>
                    <ul>
                         <Row  flexGrow = {1} justify = "space-between"> 
                             <Column flexGrow = {1} horizontal = "start" > 
                                <li><NavLink to = "/">
                                 <FaHome size = "25px"
                                    /></NavLink></li></Column> 
                             <Column flexGrow = {1} horizontal = "end" > 
                                <li style = {{transform: "translateX(-30px)",
                                              fontFamily: "Notable"}}>
                                              <NavLink to = "/about">DEV</NavLink>
                                              </li></Column> 
                          </Row>
                    </ul>  
                </nav>
        </div>
           
}

export default navBar;