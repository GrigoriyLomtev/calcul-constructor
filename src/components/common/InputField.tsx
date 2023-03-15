import React from 'react';
import { boxShadowElement } from '../../styles/constants';

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
        boxShadow: boxShadowElement,
        margin: '20px 0',
        borderRadius: '4px',
      }}
    >
      {0}
    </div>
  );
}

export default InputField;
