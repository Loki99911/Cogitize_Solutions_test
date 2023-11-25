'use client';
import { useState } from 'react';
import '../styles/positions.scss';
import { PositionsList } from '../ui/positionsList/PositionsList';
import { Position } from '../types/positions';
import { PositionDescription } from '../ui/positionDescription/PositionDescription';

export default function Page() {
  const [positions, setPositions] = useState<Position[] | []>([]);
  const currentPosition = positions.find(({ isActive }) => isActive) ?? null;
  return (
    <div className="positionsPage-wrapper">
      <PositionsList positions={positions} setPositions={setPositions} />
      <PositionDescription
        position={currentPosition}
        setPositions={setPositions}
      />
    </div>
  );
}
