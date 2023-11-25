export interface PositionsListProps {
  positions: Position[];
  setPositions: React.Dispatch<React.SetStateAction<Position[]>>;
}

export interface PositionDescriptionProps {
  position: Position | null;
  setPositions: React.Dispatch<React.SetStateAction<Position[]>>;
}
export interface CheckboxItemProps {
  checkboxStates: CheckboxStates;
  setCheckboxStates: React.Dispatch<React.SetStateAction<CheckboxStates>>;
  block:string;
}

export interface Position {
  title: string;
  isActive: boolean;
}


export interface CheckboxStates {
  [block: string]: {
    [checkbox: string]: boolean;
  };
}