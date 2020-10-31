import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import './navbar.css'
import { withRouter } from 'react-router';

const NavigationBar = (props) => {

    const [activeStatus, setActiveStatus] = useState({
        home: true,
        aboutme: false,
        whatiknow: false,
        projects: false,
        experience: false,
        contact: false
    })

    const activate = e => {
        // e.preventDefault()
        const { name } = e.target
        setActiveStatus({
            home: false,
            aboutme: false,
            whatiknow: false,
            projects: false,
            experience: false,
            contact: false,
            [name]: true
        })
        // goto(e, '/' + name)
    }

    // const goto = (event, name) => {
    //     event.preventDefault()
    //     // props.history.push(name)
    // }

  return (
    <div className='Navbar'>
        <Navbar color="dark" dark expand='md'>
            <Nav pills>
                <NavItem>
                    <NavLink onClick={activate} active={activeStatus.home} name='home' href="#home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={activate} active={activeStatus.aboutme} name='aboutme' href="#aboutme">About me</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={activate} active={activeStatus.whatiknow} name='whatiknow' href="#whatiknow">Knowledge</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={activate} active={activeStatus.projects} name='projects' href="#projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={activate} active={activeStatus.experience} name='experience' href='#experience'>Experience</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={activate} active={activeStatus.contact} name='contact' href='#contact'>Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}

export default withRouter(NavigationBar);