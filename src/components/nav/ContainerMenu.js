import React, { useEffect, useState } from 'react';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { FiHelpCircle } from 'react-icons/fi';
import { MdOutlineEdit } from 'react-icons/md';
import { TbTransferIn } from 'react-icons/tb';
import { styled } from 'styled-components';
import profil from '../../assets/images/avatar.png';
import IconProfil from '../IconProfil';

export default function ContainerMenu({handleMouseEnter,handleMouseLeave,subMenuVisible}) {
    const [displaySubMenu, setDisplaySubMenu] = useState(false);

      useEffect(()=>{
        if(subMenuVisible){
          const timer  = setTimeout(()=>{
            setDisplaySubMenu(false)
          },3000)
          return ()=>{
            clearTimeout(timer)
          }
        }
       },[subMenuVisible,displaySubMenu])
       
  return (
    <Container className='container-menu'  showMenu={subMenuVisible}
        onMouseEnter={() => {
            handleMouseEnter();
            setDisplaySubMenu(true); // Affiche le sous-menu au survol
          }} 
        onMouseLeave={() => {
            handleMouseLeave();
            // Ne masquez le sous-menu que s'il n'est pas déjà affiché (pour permettre aux utilisateurs de revenir rapidement)
            
          }}
        >
            <div className='avatar' style={{cursor:"pointer"}}>
                <IconProfil image = {profil} 
                width = "35px"
                height= "35px"
                />
                <BiCaretDown color={"#FFF"} className='rotate'/>
            </div>
            <div className='container-arrowUp-submenu'>
                    <BiCaretUp color={"#FFF"} size={26} className='arrow-up'/>
                    <div className="container-submenu" >
                        <div className='a jeunesse'>
                        <IconProfil image = {profil} 
                        width = "35px"
                        height= "35px"
                        radius = "5px"
                        />             
                        <p className='hover'>Jeunesse</p>
                        </div>
                        
                        <div className='title '>
                        <MdOutlineEdit size={25} color={"white"} />
                        <p className='hover'>Gérer les profils</p>
                        </div>

                        <div className='title '>
                            <TbTransferIn  size={25} color={"white"} />
                            <p className='hover'>Transferer un profil</p>
                        </div>

                        <div className='title '>
                        <CiUser size={25} color={"white"}/>
                        <p className='hover'>Compte</p>
                        </div>

                        <div className='title '>
                        <FiHelpCircle size={25} color={"white"}/>
                        <p className='hover'>Centre d’aide</p>
                        </div>

                        <hr/>
                        <div className='  deconnect hover'>
                        Se déconnecter
                        </div>
                    </div>
        </div>
            
    </Container>
  );
}

const Container  = styled.div`
    .avatar{
        display:flex;
        flex-direction:row;
        align-items: center;
        gap:5px;
        margin-bottom: 0.5px;
        margin-top : 0.5px;  
        
    }
    .container-menu{
        position: relative;
        display: inline-block;
        flex-direction: column; 
        //justify-content: flex-start;
        
    }
    
    .container-submenu{
        display: ${props => props.showMenu ? 'block' : 'none'};
        //justify-content: flex-start;
        width: 230px;
        height: 280px;
        flex-shrink: 0;
        border: 0.5px solid rgba(255, 255, 255, 0.20);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.90) 99.99%, rgba(217, 217, 217, 0.00) 100%);
        position: absolute;
        //justify-content: flex-start;
       right:-25px;
       margin-top: -5px;
    } 
    .container-arrowUp-submenu{
        position:absolute;
        //right:0
    }  
    .title{
        color: #FFF;
        font-family:  'Inter', sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        flex-direction: row;
        align-items: center;
        //padding: 2px;
        margin-left: 15px;
    
    }
    .title p{
        margin-left: 12px;
    }
    .a{
        color: #FFF;
        font-family:  'Inter', sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        flex-direction: row;
        align-items: center;
        //padding: 2px;
        margin-left: 10px;
        margin-top : 10px;
    }
    .a>p{
        margin-left: 10px;
    }
    .deconnect{
        display : flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        color: #FFF;
        font-family:  'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        
    }
    .hover:hover{
        text-decoration: underline;
        cursor : pointer;
    }
    .rotate{
        transform: rotate(${props=>props.showMenu ? '180deg' : '0deg'});
        transition : transform 0.5s ease;
    }
    .arrow-up{
       display: ${props => props.showMenu ? 'block' : 'none'};
       
       
    }
`;