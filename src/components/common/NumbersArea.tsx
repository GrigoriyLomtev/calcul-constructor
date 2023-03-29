import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { setMainValue, setLocalValue, setIsDivideByZero } from '../../slices/calculation-slice';
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
  const { mainValue, isNewValue, localValue, isDivideByZero } = useTypedSelector((state) => state.calculation);

  const dispatch = useDispatch();

  const isDecimalSet = () => {
    if (isNewValue) {
      if (localValue.indexOf('.') !== -1) return true;
    }
    if (!isNewValue) {
      if (mainValue.indexOf('.') !== -1) return true;
    }
    return false;
  };

  const buttonAction = (number: string) => {
    if (isDivideByZero) {
      dispatch(setIsDivideByZero(false));
    }
    if (number === '.' && isDecimalSet()) {
      return;
    }
    if (isNewValue) {
      if (localValue.length <= 16) dispatch(setLocalValue(number));
    } else if (mainValue.length <= 16) dispatch(setMainValue(number));
  };

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
      <button
        onClick={() => {
          buttonAction('7');
        }}
        css={buttonStyle}
      >
        7
      </button>
      <button
        onClick={() => {
          buttonAction('8');
        }}
        css={buttonStyle}
      >
        8
      </button>
      <button
        onClick={() => {
          buttonAction('9');
        }}
        css={buttonStyle}
      >
        9
      </button>
      <button
        onClick={() => {
          buttonAction('4');
        }}
        css={buttonStyle}
      >
        4
      </button>
      <button
        onClick={() => {
          buttonAction('5');
        }}
        css={buttonStyle}
      >
        5
      </button>
      <button
        onClick={() => {
          buttonAction('6');
        }}
        css={buttonStyle}
      >
        6
      </button>
      <button
        onClick={() => {
          buttonAction('1');
        }}
        css={buttonStyle}
      >
        1
      </button>
      <button
        onClick={() => {
          buttonAction('2');
        }}
        css={buttonStyle}
      >
        2
      </button>
      <button
        onClick={() => {
          buttonAction('3');
        }}
        css={buttonStyle}
      >
        3
      </button>
      <button
        onClick={() => {
          buttonAction('0');
        }}
        css={{ ...buttonStyle, gridColumnStart: '1', gridColumnEnd: '3' }}
      >
        0
      </button>
      <button
        onClick={() => {
          buttonAction('.');
        }}
        css={buttonStyle}
      >
        ,
      </button>
    </div>
  );
}

export default NumbersArea;
