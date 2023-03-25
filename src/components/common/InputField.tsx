import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { borderRadiusElement, boxShadowElement, marginBottomElement } from '../../styles/constants';

const inputFieldStyle = {
  height: '60px',
  width: '240px',
  display: 'flex',
  justifyContent: 'flex-end',
  fontWeight: '800',
  padding: '10px 12px',
  marginBottom: marginBottomElement,
  boxShadow: boxShadowElement,
  borderRadius: borderRadiusElement,
};

function InputField() {
  const [value, setValue] = useState('0');
  const { firstValue, isGetFirstValue, secondValue } = useTypedSelector((state) => state.calculation);

  const fontSize = (value: string) => {
    if (value.length >= 9 && value.length <= 14) return '24px';
    if (value.length >= 15) return '19px';
    return '36px';
  };

  useEffect(() => {
    const roundedFirstValue = () => {
      if (!isGetFirstValue && firstValue.length >= 17) {
        const firstN = Number(firstValue).toPrecision(13);
        return firstN.toString();
      }
      return firstValue;
    };
    setValue(isGetFirstValue ? secondValue : roundedFirstValue());
  }, [firstValue, isGetFirstValue, secondValue]);

  return (
    <div css={{ ...inputFieldStyle, fontSize: fontSize(value) }}>
      <p
        css={{
          marginTop: 'auto',
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default InputField;
