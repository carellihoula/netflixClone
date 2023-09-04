import React from 'react';
import { styled } from 'styled-components';
import imageNotif from '../assets/images/present.jpg';

export default function CardNotification() {
  return (
    <CardStyled>
        <div className='image'>
            <img src={imageNotif} alt="notiification" width="136px" height="78px" style={{borderRadius:"5px"}}/>
        </div>
        <div className='description'>
            <div className='container-text'>
                <div className='description-type'>Avant-première Netflix </div>
                <div className='description-type'>Arrested Development</div>
            </div>
            
            <small>il y a  6 jours</small>
        </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid #FFF;
  width : 100%;
  position:relative;
  &:hover{
    background-color: black;
    cursor: pointer;
  }
  &:hover .description-type {
    color: #fff;
  }
  .description{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        max-width: 80%;
   }
   
   .description-type{
        color: #A9A9A9;
        font-family: 'Inter';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
   } 

  
   .image{
        padding: 19px;
       
   }
   small{
        color: #A8A8A8;
        font-family: 'Inter';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        margin-top: 6px;
   }
   
`;