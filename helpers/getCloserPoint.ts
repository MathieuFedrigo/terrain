import { SquareData } from '../interfaces/SquareData';

export const getCloserPoint = (
  start: SquareData,
  end: SquareData,
): SquareData => {
  const goal = { ...start };
  if (start.x < end.x) goal.x++;
  if (start.x > end.x) goal.x--;
  if (start.y < end.y) goal.y++;
  if (start.y > end.y) goal.y--;
  return goal;
};
