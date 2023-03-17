import React from 'react';
import {
  borderRadiusElement,
  boxShadowElement,
  buttonBackground,
  buttonBorder,
  buttonBorderRadius,
  marginBottomElement,
} from '../../styles/constants';

const buttonStyle = {
  margin: '4px',
  background: buttonBackground,
  border: buttonBorder,
  borderRadius: buttonBorderRadius,
};

function OperatorsArea() {
  return (
    <div
      css={{
        height: '56px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        boxShadow: boxShadowElement,
        borderRadius: borderRadiusElement,
        marginBottom: marginBottomElement,
      }}
    >
      <button css={buttonStyle}>/</button>
      <button css={buttonStyle}>X</button>
      <button css={buttonStyle}>-</button>
      <button css={buttonStyle}>+</button>
    </div>
  );
}

export default OperatorsArea;
