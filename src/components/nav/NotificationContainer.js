
import { BiBell, BiCaretUp } from 'react-icons/bi';
import { styled } from 'styled-components';
import CardNotification from '../CardNotification';

export default function NotificationContainer({handleMouseEnter,handleMouseLeave,subMenuVisible}) {
  return (
    <NotifStyled showMenu={subMenuVisible}
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    >
       <div className='menu'>
            <BiBell color={"#FFF"} size={26}  style={{cursor:"pointer"}}/>
       </div>
       <div className='container-arrowUp-submenu'>
            <BiCaretUp color={"#FFF"} size={26} className='arrow-up'/>
            <div className="container-submenu" >
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
                    <CardNotification/>
            </div>
       </div>
       
    </NotifStyled>
  );
}

const NotifStyled = styled.div`
    
    .container-arrowUp-submenu{
        display: block;
        align-items: flex-start; 
        position:absolute;
    }
    .container-menu{
        position: relative;
        display: inline-block;
        flex-direction: column; 
        //justify-content: flex-start;  
    }
    .container-submenu{
        display: ${props => props.showMenu ? 'block' : 'none'};
        width: 420px;
        min-height:50px;
        max-height: 611px;
        border: 0.5px solid rgba(255, 255, 255, 0.20);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.90) 99.99%, rgba(217, 217, 217, 0.00) 100%);
        border-top: 2.5px solid #FFF;
        position: absolute;
        right:0;
        overflow-y: auto;
        margin-top : -13px;
    }   
    .menu{
        margin-bottom: 0.5px;
        margin-top : 0.5px; 
    }
    .arrow-up{
       display: ${props => props.showMenu ? 'block' : 'none'};
       margin-bottom: 5px;
       margin-top : 5px; 
    }
`;