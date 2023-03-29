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
  const { mainValue, isNewValue, localValue, isDivideByZero } = useTypedSelector((state) => state.calculation);

  const fontSize = (value: string) => {
    if (value.length >= 9 && value.length <= 14) return '24px';
    if (value.length >= 15) return '19px';
    return '36px';
  };

  useEffect(() => {
    const roundedMainValue = () => {
      if (!isNewValue && mainValue.length >= 17) {
        const firstN = Number(mainValue).toPrecision(13);
        return firstN.toString();
      }
      return mainValue;
    };
    isDivideByZero ? setValue('Не определено') : setValue(isNewValue ? localValue : roundedMainValue());
  }, [mainValue, isNewValue, localValue]);

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
