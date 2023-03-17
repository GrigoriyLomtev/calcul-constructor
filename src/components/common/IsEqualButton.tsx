import React from 'react';
import {
  blueColor,
  borderRadiusElement,
  boxShadowElement,
  buttonBackground,
  buttonBorderRadius,
  marginBottomElement,
} from '../../styles/constants';

function IsEqualButton() {
  return (
    <div
      css={{
        width: '240px',
        height: '72px',
        boxShadow: boxShadowElement,
        borderRadius: borderRadiusElement,
        marginBottom: marginBottomElement,
      }}
    >
      <button
        css={{
          border: '1px solid green',
          width: '232px',
          height: '64px',
          margin: '4px',
          background: blueColor,
          color: 'white',
          borderRadius: buttonBorderRadius,
        }}
      >
        =
      </button>
    </div>
  );
}

export default IsEqualButton;
