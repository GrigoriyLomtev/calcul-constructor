import React from 'react';
import {
  blueColor,
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
  ' &:hover': {
    border: `2px solid ${blueColor}`,
  },
};

function NumbersArea() {
  return (
    <div
      css={{
        height: '224px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr ',
        boxShadow: boxShadowElement,
        borderRadius: borderRadiusElement,
        marginBottom: marginBottomElement,
      }}
    >
      <button css={buttonStyle}>7</button>
      <button css={buttonStyle}>8</button>
      <button css={buttonStyle}>9</button>
      <button css={buttonStyle}>4</button>
      <button css={buttonStyle}>5</button>
      <button css={buttonStyle}>6</button>
      <button css={buttonStyle}>1</button>
      <button css={buttonStyle}>2</button>
      <button css={buttonStyle}>3</button>
      <button css={{ ...buttonStyle, gridColumnStart: '1', gridColumnEnd: '3' }}>0</button>
      <button css={buttonStyle}>,</button>
    </div>
  );
}

export default NumbersArea;
