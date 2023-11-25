import React from 'react';
import '../../styles/positions.scss';
import { Position } from '../../types/positions';

export const PositionsCard: React.FC<{ position: Position }> = ({position}) => {
  return (
    <div className="positions-card">
      <p>{position.title}</p>
    </div>
  );
};
