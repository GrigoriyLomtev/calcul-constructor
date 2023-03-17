import React from 'react';
import { borderRadiusElement, boxShadowElement, marginBottomElement } from '../../styles/constants';

function InputField() {
  return (
    <div
      css={{
        height: '60px',
        width: '240px',
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '36px',
        fontWeight: '800',
        padding: '10px 12px',
        marginBottom: marginBottomElement,
        boxShadow: boxShadowElement,
        borderRadius: borderRadiusElement,
      }}
    >
      {0}
    </div>
  );
}

export default InputField;
