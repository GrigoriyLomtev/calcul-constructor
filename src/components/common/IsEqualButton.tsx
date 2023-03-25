import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { isEqualOperation, Operation, setFirstValue, setIsGetFirstValue } from '../../slices/calculation-slice';
import {
  blueColor,
  borderRadiusElement,
  boxShadowElement,
  buttonBackground,
  buttonBorderRadius,
  marginBottomElement,
} from '../../styles/constants';

function IsEqualButton() {
  const { currentOperation, firstValue, fraction, isGetFirstValue, secondValue } = useTypedSelector(
    (state) => state.calculation,
  );
  const dispatch = useDispatch();

  const equal = () => {
    const result = () => {
      if (currentOperation === Operation.Addition) return Number(firstValue) + Number(secondValue);
      if (currentOperation === Operation.Division) return Number(firstValue) / Number(secondValue);
      if (currentOperation === Operation.Multiplication) return Number(firstValue) * Number(secondValue);
      if (currentOperation === Operation.Subtraction) return Number(firstValue) - Number(secondValue);
      return 0;
    };
    dispatch(setIsGetFirstValue(false));
    dispatch(setFirstValue('0'));
    dispatch(isEqualOperation(result().toString()));
  };

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
        onClick={() => {
          equal();
        }}
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
