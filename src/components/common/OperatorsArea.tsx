import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  isEqualOperation,
  Operation,
  setCurrentOperation,
  setFirstValue,
  setIsGetFirstValue,
} from '../../slices/calculation-slice';
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
  const { currentOperation, firstValue, fraction, isGetFirstValue, secondValue } = useTypedSelector(
    (state) => state.calculation,
  );

  const dispatch = useDispatch();

  const buttonAction = (operation: Operation) => {
    console.log('1');

    const firstFn = () => {
      dispatch(setCurrentOperation(operation));
      console.log('2');
    };

    const secondFn = () => {
      console.log('3');
      if (isGetFirstValue) {
        dispatch(setFirstValue('0'));
        dispatch(setIsGetFirstValue(false));
        dispatch(isEqualOperation(result().toString()));
      }
      console.log('4');
      console.log('5');
    };
    firstFn();

    const result = () => {
      if (operation === Operation.Addition) {
        console.log(operation);
        return Number(firstValue) + Number(secondValue);
      }
      if (operation === Operation.Division) {
        console.log(operation);
        return Number(firstValue) / Number(secondValue);
      }
      if (operation === Operation.Multiplication) {
        console.log(operation);
        return Number(firstValue) * Number(secondValue);
      }
      if (operation === Operation.Subtraction) {
        console.log(operation);
        return Number(firstValue) - Number(secondValue);
      }
      return 0;
    };

    secondFn();
  };

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
      <button onClick={() => buttonAction(Operation.Division)} css={buttonStyle}>
        /
      </button>
      <button onClick={() => buttonAction(Operation.Multiplication)} css={buttonStyle}>
        X
      </button>
      <button onClick={() => buttonAction(Operation.Subtraction)} css={buttonStyle}>
        -
      </button>
      <button onClick={() => buttonAction(Operation.Addition)} css={buttonStyle}>
        +
      </button>
    </div>
  );
}

export default OperatorsArea;
