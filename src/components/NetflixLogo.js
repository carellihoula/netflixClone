import React from 'react';
import { styled } from 'styled-components';
import logo from '../assets/images/netflix.png';

function NetflixLogo(props) {
    return (
        <ImageStyled>
            <img src= {logo} alt="Logo Netflix"
                width={props.width}
                height={props.height}
                />
        </ImageStyled>
    );
};

export default NetflixLogo

const ImageStyled = styled.div`
  
`;