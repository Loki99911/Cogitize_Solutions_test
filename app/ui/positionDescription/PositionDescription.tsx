'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import '../../styles/positions.scss';
import { PositionDescriptionProps } from '../../types/positions';
import { CheckboxBlock } from '../checkboxBlock/CheckboxBlock';

export const PositionDescription: React.FC<PositionDescriptionProps> = ({
  position,
  setPositions,
}) => {
  const [title, setTitle] = useState(position ? position.title : '');
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const savePosition = () => {
    setPositions(prev=>[]);
  };
  return (
    <div className="position-wrapper">
      <form action=""></form>
      <label htmlFor="title">Название:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleTitleChange}
      />
      <CheckboxBlock/>
      <p>{position?.title}</p>
      <p>{position?.isActive}</p>
      <button onClick={savePosition}>Сохранить</button>
    </div>
  );
};
