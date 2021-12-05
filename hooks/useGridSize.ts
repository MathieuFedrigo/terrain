import { useWindowDimensions } from 'react-native';
import { SQUARE_SIZE } from '../constants/board';

export const useGridSize = (): {
  maxHorizontalSquares: number;
  maxVerticalSquares: number;
} => {
  const { height, width } = useWindowDimensions();

  return {
    maxHorizontalSquares: Math.ceil(width / SQUARE_SIZE),
    maxVerticalSquares: Math.ceil(height / SQUARE_SIZE),
  };
};
