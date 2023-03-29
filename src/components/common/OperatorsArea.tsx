import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Operation, setCurrentOperation, setIsNewValue } from '../../slices/calculation-slice';
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
  const { mainValue, localValue } = useTypedSelector((state) => state.calculation);

  const dispatch = useDispatch();

  const buttonAction = (operation: Operation) => {
    dispatch(setIsNewValue(true));
    dispatch(setCurrentOperation(operation));
    if (operation === Operation.Addition) {
      console.log(operation);
      return Number(mainValue) + Number(localValue);
    }
    if (operation === Operation.Division) {
      console.log(operation);
      return Number(mainValue) / Number(localValue);
    }
    if (operation === Operation.Multiplication) {
      console.log(operation);
      return Number(mainValue) * Number(localValue);
    }
    if (operation === Operation.Subtraction) {
      console.log(operation);
      return Number(mainValue) - Number(localValue);
    } else return 0;
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
