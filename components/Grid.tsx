import React, { FunctionComponent } from 'react';
import { SquareData } from '../interfaces/SquareData';
import { StyleSheet, View } from 'react-native';
import { Square } from './Square';

interface Props {
  squares: SquareData[][];
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
  },
});

export const Grid: FunctionComponent<Props> = ({ squares }) => {
  return (
    <View>
      {squares.map(squareLine => (
        <View style={styles.line} key={squareLine[0].x}>
          {squareLine.map(square => (
            <Square square={square} key={`${square.x},${square.y}`} />
          ))}
        </View>
      ))}
    </View>
  );
};
