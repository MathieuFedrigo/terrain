import React, { FunctionComponent } from 'react';
import { SquareData } from '../interfaces/SquareData';
import { cropSquares } from '../helpers/cropSquares';
import { Grid } from './Grid';

interface Props {
  squares: SquareData[][];
  maxHorizontalSquares: number;
  maxVerticalSquares: number;
}

export const CropGrid: FunctionComponent<Props> = ({
  squares,
  maxHorizontalSquares,
  maxVerticalSquares,
}) => {
  const croppedSquares = cropSquares({
    squares,
    maxHorizontalSquares,
    maxVerticalSquares,
  });
  return <Grid squares={croppedSquares} />;
};
