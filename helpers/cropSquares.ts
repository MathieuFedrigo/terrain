import { SquareData } from '../interfaces/SquareData';

export const cropSquares = ({
  squares,
  maxHorizontalSquares,
  maxVerticalSquares,
}: {
  squares: SquareData[][];
  maxHorizontalSquares: number;
  maxVerticalSquares: number;
}): SquareData[][] => {
  return squares
    .slice(0, maxVerticalSquares)
    .map(line => line.slice(0, maxHorizontalSquares));
};
