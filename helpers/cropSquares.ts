import { SquareData } from '../interfaces/SquareData';
import { bound } from './bound';
import { BOARD_SIZE } from '../constants/board';

export const cropSquares = ({
  squares,
  maxHorizontalSquares,
  maxVerticalSquares,
  center,
}: {
  squares: SquareData[][];
  maxHorizontalSquares: number;
  maxVerticalSquares: number;
  center: SquareData;
}): SquareData[][] => {
  const xMin = center.x - maxVerticalSquares / 2;
  const xMax = center.x + maxVerticalSquares / 2;
  const yMin = center.y - maxHorizontalSquares / 2;
  const yMax = center.y + maxHorizontalSquares / 2;

  const xMinBounded = bound({
    min: 0,
    number: xMin,
    max: BOARD_SIZE - maxVerticalSquares,
  });
  const xMaxBounded = bound({
    min: maxVerticalSquares,
    number: xMax,
    max: BOARD_SIZE,
  });
  const yMinBounded = bound({
    min: 0,
    number: yMin,
    max: BOARD_SIZE - maxHorizontalSquares,
  });
  const yMaxBounded = bound({
    min: maxHorizontalSquares,
    number: yMax,
    max: BOARD_SIZE,
  });

  return squares
    .slice(xMinBounded, xMaxBounded)
    .map(line => line.slice(yMinBounded, yMaxBounded));
};
