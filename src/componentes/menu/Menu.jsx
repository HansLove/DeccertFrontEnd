import React, { useEffect, useState, useContext } from 'react'
import Logo from '../image/logo_deccert.png'
// import {langContext}from '../../context/langContext'
import './estilo.css'
import {
  NavLink
} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'
import Cadenas from '../Cadenas/Cadenas'
import Search from '../search-bar/Search'



function Menu() {

  // const idioma=useContext(langContext)
  const [visible, setvisible] = useState(false)


  return (
    <nav className='nav_menu'>

      <NavLink
        style={{ marginLeft: '2%' }}
        id="RouterNavLink"
        to='/mint'>
        <img
          width='7%'
          src={Logo} />
      </NavLink>

      <NavLink
        id="RouterNavLink"
        onClick={() => setvisible(true)}
        to='/'>
        HOME
      </NavLink>



      <NavLink
        id="RouterNavLink"
        onClick={() => setvisible(false)}
        to='/profile'>
        PROFILE
      </NavLink>



      <NavLink
        id="RouterNavLink"
        onClick={() => setvisible(false)}
        to='/certifications'>
        CERTIFICATIONS
      </NavLink>

      {visible &&
        <ScrollLink
          activeClass="active"
          to="id_trends"
          spy={true}
          smooth={true}
          offset={5}
          duration={1000}>
          CONTACT
        </ScrollLink>}


      {/* <Banderas idioma={idioma}/> */}

      <Search
        name="name"
        type="text"
        placeholder={"Search"}
        placeholderColor={"#AFAFAF"}
        fontSize={"16px"}
        padding={"15px 100px 15px 24px"}
        textColor={"white"}
        backgroundColor={"transparent"}
        borderRadius={"10px"}
        margin={"0"}
        border={"1px solid white"}
        paddingButtom={"15px 24px"}
        marginButtom={"0 0 0 -100px"}
      />


    </nav>





  )
}

export default Menu