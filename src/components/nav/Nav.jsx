import React,{useState} from 'react'
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#"  onClick={()=>setActiveNav('#')}  className={activeNav ==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about"onClick={()=>setActiveNav('#about')}  className={activeNav ==='#about' ? 'active':''} ><AiOutlineUser/></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')}  className={activeNav ==='#experience' ? 'active':''}><BiBook/></a>
      <a href="#qualification"onClick={()=>setActiveNav('#qualification')}  className={activeNav ==='#qualification' ? 'active':''}><BiMessageSquareDetail/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}  className={activeNav ==='#portfolio' ? 'active':''}><RiServiceLine/></a>
    </nav>
  )
}

export default Nav