import React from 'react';
import eye from '../assets/eye.png';
import selectorActive from '../assets/selector-active.png';
import { buttonBorder, buttonBorderRadius } from '../styles/constants';

function SwitchBar() {
  return (
    <div
      css={{
        width: '244px',
        height: '36px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        css={{
          width: '108px',
          height: '36px',
          display: 'flex',
          padding: '0px 12px ',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img width="20px" height="20px" src={eye} alt="" />
        <div>Runtime</div>
      </div>

      <div
        css={{
          width: '133px',
          height: '36px',
          display: 'flex',
          padding: '0px 12px ',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: buttonBorder,
          borderRadius: buttonBorderRadius,
        }}
      >
        <img width="20px" height="20px" src={selectorActive} alt="" />
        <div>Constructor</div>
      </div>
    </div>
  );
}

export default SwitchBar;
