
import React from 'react';
import '../../styles/positions.scss';
import { PositionsListProps } from '../../types/positions';
import { PositionsCard } from '../positionCard/PositionCard';

export const PositionsList: React.FC<PositionsListProps> = ({
  positions,
  setPositions,
}) => {
  const createPosition = () => {
    const newPosition = { title: '', isActive: true };
    setPositions((prevPositions) => [...prevPositions, newPosition]);
  };
  return (
    <div className="positions-list-wrapper">
      <ul className="positions-list">
        {positions.map((position) => (
          <li key={position.title}>
            <PositionsCard position={position} />
          </li>
        ))}
      </ul>
      <button onClick={createPosition}>Создать новую должность</button>
    </div>
  );
};
