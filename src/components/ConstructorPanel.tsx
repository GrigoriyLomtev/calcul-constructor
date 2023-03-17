import React from 'react';
import icon from '../assets/add-element-icon.png';
import { blueColor } from '../styles/constants';

function ConstructorPanel() {
  return (
    <div
      css={{
        width: '244px',
        height: '448px',
        border: '2px dashed #C4C4C4',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div css={{ width: '127px', height: '84px' }}>
        <div css={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <img width="20px" height="20px" src={icon} alt="" />
        </div>
        <div css={{ display: 'flex', textAlign: 'center', color: blueColor }}>Перетащите сюда</div>
        <div
          css={{
            padding: '6px 10px',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            fontWeight: '400',
            fontSize: '12px',
          }}
        >
          любой элемент из левой панели
        </div>
      </div>
    </div>
  );
}

export default ConstructorPanel;
