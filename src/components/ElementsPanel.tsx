import React from 'react';
import InputField from './common/InputField';
import IsEqualButton from './common/IsEqualButton';
import NumbersArea from './common/NumbersArea';
import OperatorsArea from './common/OperatorsArea';

function ElementsPanel() {
  return (
    <div>
      <div>ElementsPanel:</div>
      <InputField />
      <OperatorsArea />
      <NumbersArea />
      <IsEqualButton />
    </div>
  );
}

export default ElementsPanel;
