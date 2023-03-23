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
      <button onClick={() => null} css={buttonStyle}>
        /
      </button>
      <button onClick={() => null} css={buttonStyle}>
        X
      </button>
      <button onClick={() => null} css={buttonStyle}>
        -
      </button>
      <button onClick={() => null} css={buttonStyle}>
        +
      </button>
    </div>
  );
}

export default OperatorsArea;
