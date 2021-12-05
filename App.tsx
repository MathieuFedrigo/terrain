import React from 'react';
import { StyleSheet, View } from 'react-native';
import { generateGrid } from './helpers/generateGrid';
import { perlin } from './helpers/perlin';
import { CropGrid } from './components/CropGrid';

const data = generateGrid(100);

export default function App() {
  perlin.seed();
  return (
    <View style={styles.container}>
      <CropGrid
        squares={data}
        maxHorizontalSquares={10}
        maxVerticalSquares={15}
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
