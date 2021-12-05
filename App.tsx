import React from 'react';
import { StyleSheet, View } from 'react-native';
import { generateGrid } from './helpers/generateGrid';
import { perlin } from './helpers/perlin';
import { CropGrid } from './components/CropGrid';
import { BOARD_SIZE, INITIAL_CENTER } from './constants/board';

const data = generateGrid(BOARD_SIZE);

export default function App() {
  perlin.seed();
  return (
    <View style={styles.container}>
      <CropGrid
        squares={data}
        maxHorizontalSquares={10}
        maxVerticalSquares={15}
        center={INITIAL_CENTER}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
