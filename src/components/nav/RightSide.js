import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { styled } from 'styled-components';
import SearchBar from '../SearchBar';
import ContainerMenu from './ContainerMenu';
import NotificationContainer from './NotificationContainer';

export default function RightSide() {
  const [showSearchBar, setShowSearchBar]  = useState(false)
  const [value, setValue] = useState("");
  const [subMenuVisible, setSubMenuVisible] = useState(false)
  const [subMenuVisibleNotif, setSubMenuVisibleNotif] = useState(false)
  

  //const [autoFocus, setAutoFocus] = useState(true)
  

  const handleBlur = () => { 
    if(value === "" || value === undefined){
      setShowSearchBar(false)
      
     
    }
  
  }

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  const handleClick  = ()  => {
    setValue("")
  }

  const  handleMouseEnter = () =>{
    setSubMenuVisible(true)
    
  }

  const  handleMouseLeave = () =>{
    setSubMenuVisible(false)
  }

  const handleMouseEnterNotif = () =>{
    setSubMenuVisibleNotif(true)
  }

  const handleMouseLeaveNotif = () =>{
    setSubMenuVisibleNotif(false)
  }
  //---------------------------useEffect----------------------------------------
 
 //---------------------------useEffect-----------------------------------------

  return (
    <RightSideStyled>
        {
          showSearchBar ? (<SearchBar handleblur ={handleBlur} 
            value={value} 
            handleChange={handleChange}
            handleClick={handleClick} 
            autoFocus = {true}
            
            
          />) :
          
          (<HiOutlineSearch color={"#FFF"} size={26} 
          style={{cursor:"pointer"}} 
          onClick={()=>setShowSearchBar(true)}
         />)
        }

        <div className='item-menu'>Jeunesse</div>
        
        <NotificationContainer handleMouseEnter = {handleMouseEnterNotif} 
        handleMouseLeave = {handleMouseLeaveNotif}
        subMenuVisible = {subMenuVisibleNotif}
        />
        
        <ContainerMenu handleMouseEnter = {handleMouseEnter} 
        handleMouseLeave = {handleMouseLeave}
        subMenuVisible = {subMenuVisible}
        />
        
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display : flex;
  flex-direction: row;
  align-items: center;
  gap : 15px;
  
  .item-menu {
    color: #e5e5e5;
    font-family: 'Inter', sans-serif;
    font-size: 0.9em;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor : pointer;
  }
 .item-menu:hover{
    color : #9F9E9E;
  } 
  `