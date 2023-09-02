
import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { styled } from 'styled-components';

export default function SearchBar(props) {
    
  return (
    <SearchStyled >
            <div className='container'>
                <div className='search'>
                    <HiOutlineSearch color={"#FFF"} size={26}/>
                </div>
                <input type = "text" value={props.value} onChange={props.handleChange} 
                className='input'
                placeholder='Titres, personnes, genres'
                onBlur={props.handleblur}
                autoFocus = {props.autoFocus}
                />
                
                {props.value !== "" && (<div className='delete' onClick={props.handleClick}>
                    <img src={process.env.PUBLIC_URL+'/images/x.png'} alt="reset research" width="15px" height="15px"   />
                </div>)}
                
            </div>
    </SearchStyled>
  );
}

const SearchStyled = styled.div`
    display: flex;
    align-items: center;
    .container{
        display: flex;
        align-items: center;
        width: 270px;
        height: 35px;
        flex-shrink: 0;
        border: 1px solid #FFF;
        background: #0A0A0A;
        //box-sizing: border-box;
    }
    .input{
        outline : none;
        width: 200px;
        height: 30px;
        flex-shrink: 0;
        //border: 1px solid #FFF;
        border: none;
        background: #0A0A0A;
        color: #FFF;
        font-family: 'Inter', sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
    }
    .input::placeholder{
        color: #A8A8A8;
        font-family: 'Inter', sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .delete{
        color : #fff;
        margin-left: auto;
        margin-right: 10px;
        
    }
    .search{
        margin-right: 5px;
        margin-left: 10px;   
    }
`;