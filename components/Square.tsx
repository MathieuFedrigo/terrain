import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SquareData } from '../interfaces/SquareData';
import { perlin } from '../helpers/perlin';

const SQUARE_SIZE = 40;
const divide = 9;

const getColor = ({ x, y }: SquareData): string =>
  `hsl(${perlin.get(x / divide, y / divide) * 200 + 150}, 70%, 50%)`;

interface Props {
  square: SquareData;
}

const styles = StyleSheet.create({
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 0.5,
  },
});

export const Square: FunctionComponent<Props> = ({ square }) => {
  return (
    <View style={[styles.square, { backgroundColor: getColor(square) }]} />
  );
};
