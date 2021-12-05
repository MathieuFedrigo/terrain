import React from 'react';
import { SquareData } from '../interfaces/SquareData';

export const CenterContext = React.createContext<
  (squareData: SquareData) => void
>(() => {});
