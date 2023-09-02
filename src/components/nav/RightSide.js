import React, { useState } from 'react';
import { BiBell, BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { styled } from 'styled-components';
import profil from '../../assets/images/avatar.png';
import IconProfil from '../IconProfil';
import SearchBar from '../SearchBar';

export default function RightSide() {
  const [showSearchBar, setShowSearchBar]  = useState(false)
  const [value, setValue] = useState("");
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
        <BiBell color={"#FFF"} size={26} />
        <div className='avatar'>
            <IconProfil image = {profil} 
            width = "35px"
            height= "35px"
            />
            <BiCaretDown color={"#FFF"}/>
        </div>
        
        
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
  .avatar{
    display:flex;
    flex-direction:row;
    align-items: center;
    gap:5px;
  }
`;