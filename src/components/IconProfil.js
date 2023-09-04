import React from 'react';

export default function IconProfil(props) {
  return (
    <div>
        <img src={props.image} width={props.width} height={props.height} style={{borderRadius:props.radius}}alt="icon profil"/>
    </div>
  );
}
