import React from 'react'
import '../../styles/checkbox.scss';
import { CheckboxItemProps } from '../../types/positions';

export const CheckboxItem = ({
  checkboxStates,
  setCheckboxStates,
  block,
}: CheckboxItemProps) => {
  // Обработчик изменения состояния чекбокса
  const handleCheckboxChange = (block: string, checkbox: string) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [block]: {
        ...prevStates[block],
        [checkbox]: !prevStates[block][checkbox],
      },
    }));
  };
  return (
    <div key={block} className="checkbox">
      <h3 className="checkbox-title">{block}</h3>
      {Object.keys(checkboxStates[block]).map((checkbox) => (
        <label key={checkbox} className="checkbox-item">
          <input
            type="checkbox"
            checked={checkboxStates[block][checkbox]}
            onChange={() => handleCheckboxChange(block, checkbox)}
          />
          <span className="fakeInput"></span>
          {checkbox}
        </label>
      ))}
    </div>
  );
};
