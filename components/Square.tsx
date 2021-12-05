import React, { FunctionComponent, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { SquareData } from '../interfaces/SquareData';
import { perlin } from '../helpers/perlin';
import { CenterContext } from '../context/CenterContext';

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
  const setCenter = useContext(CenterContext);
  return (
    <Pressable
      style={[styles.square, { backgroundColor: getColor(square) }]}
      onPress={() => setCenter(square)}
    />
  );
};
