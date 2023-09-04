import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import NetflixLogo from '../NetflixLogo';
import RightSide from './RightSide';

export default function NavBar() {
  const [isActive, setisActive] = useState("accueil")
  
  const handleClick = (item) => {
      setisActive(item)
  }
//console.log(isActive);
  return (
    <NavStyled>
   
            <NetflixLogo width="90px" height="90px"/>
            <div className='menu1'>
                <div className={`item-menu ${isActive === "accueil" ? 'active':'non-active'}`} onClick={()=>handleClick('accueil')} >
                    <Link to="/" className='lien-style-reset'></Link>Accueil
                </div>
                <div className={`item-menu ${isActive === "series" ? 'active':'non-active'}`} onClick={()=>handleClick('series')}>
                    <Link to="/list"></Link>Séries
                </div>
                <div className={`item-menu ${isActive === "films" ? 'active':'non-active'}`} onClick={()=>handleClick('films')}>
                    <Link to="/list"></Link>Films
                </div>
                <div className={`item-menu ${isActive === "news" ? 'active':'non-active'}`} onClick={()=>handleClick('news')}>
                    <Link to="/list"></Link>Nouveautés les plus regardées
                </div>
                <div className={`item-menu ${isActive === "liste" ? 'active':'non-active'}`} onClick={()=>handleClick('liste')}>
                    <Link to="/list"></Link>Ma liste
                </div>
                <div className={`item-menu ${isActive === "langues" ? 'active':'non-active'}`} onClick={()=>handleClick('langues')}>
                    <Link to="/list"></Link>Explorer par langue
                </div>
            </div>
            <div className="right-side">
                <RightSide />
            </div>
            
            

    </NavStyled>
  );
}
const NavStyled = styled.div`
  display : flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: #0b0b0b;
  width: 100%;
  height: 73px;
  //flex-shrink: 0;
  padding: 0 40px 0px 40px;
  box-sizing: border-box;
  
  
  
  .menu1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 17px;
    margin-left: 54px;
  }
  .item-menu {
    color: #e5e5e5;
    font-family: 'Inter', sans-serif;
    font-size: 0.85em;
    
    font-weight: 400;
    
    cursor : pointer;
  }
  .active{
    font-weight: 900;
    font-size: 0.8em;
    text-decoration: underline;
  }
 .non-active:hover{
    color : #9F9E9E;
  }
  .ff{
    padding: 0;
    margin: 0;
  } 
  .right-side{
    margin-left: auto;
  }
  .lien-style-reset{
    text-decoration: none;
    color : #e5e5e5;
    
  }
`;