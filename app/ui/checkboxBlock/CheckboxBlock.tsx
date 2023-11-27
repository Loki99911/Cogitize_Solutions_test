import { CheckboxStates } from '../../types/positions';
import React, { useState } from 'react';
import '../../styles/checkbox.scss';
import { CheckboxItem } from '../checkboxItem/CheckboxItem';


export const CheckboxBlock: React.FC = () => {
  // Состояние для хранения состояния чекбоксов
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({
    trade: {
      'Sell product': false,
      'Set prices': false,
      'View analytics': false,
    },
    production: {
      'Purchase raw materials': false,
      'Assign workers': false,
    },
    showdown: {
      Duel: false,
      'Submit claims': false,
    },
    Control: {
      'Assign positions': false,
      'Kick out of the gang': false,
    },
  });

  return (
    <div className="checkboxes-block">
      <h2>Обязаности</h2>
      {Object.keys(checkboxStates).map(
        (block) => (
          <CheckboxItem
            key={block}
            checkboxStates={checkboxStates}
            setCheckboxStates={setCheckboxStates}
            block={block}
          />
        ),
      )}
    </div>
  );
};

// ({
//   Торговля: {
//     'Продавать продукт': false,
//     'Выставлять цены': false,
//     'Смотреть аналитику': false,
//   },
//   Производство: {
//     'Закупать сырье': false,
//     'Назначать рабочих': false,
//   },
//   Разборки: {
//     Дуель: false,
//     'Выставлять претензии': false,
//   },
//   Управление: {
//     'Назначать должности': false,
//     'Выгонять из банды': false,
//   },
// });