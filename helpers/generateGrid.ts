import { SquareData } from '../interfaces/SquareData';

export const generateGrid = (size: number): SquareData[][] => {
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      result[i][j] = { x: i, y: j, value: 0 };
    }
  }
  return result;
};
