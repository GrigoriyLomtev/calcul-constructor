import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { isEqualOperation, Operation, setIsNewValue, setIsDivideByZero } from '../../slices/calculation-slice';
import {
  blueColor,
  borderRadiusElement,
  boxShadowElement,
  buttonBorderRadius,
  marginBottomElement,
} from '../../styles/constants';

function IsEqualButton() {
  const { currentOperation, mainValue, localValue } = useTypedSelector((state) => state.calculation);
  const dispatch = useDispatch();

  const equal = () => {
    const result = () => {
      if (currentOperation === Operation.Division)
        if (localValue === '0') {
          dispatch(setIsDivideByZero(true));
        } else return Number(mainValue) / Number(localValue);
      if (currentOperation === Operation.Addition) return Number(mainValue) + Number(localValue);
      if (currentOperation === Operation.Multiplication) return Number(mainValue) * Number(localValue);
      if (currentOperation === Operation.Subtraction) return Number(mainValue) - Number(localValue);
      return 0;
    };
    dispatch(setIsNewValue(false));
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
