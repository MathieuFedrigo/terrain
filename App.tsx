import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { generateGrid } from './helpers/generateGrid';
import { perlin } from './helpers/perlin';
import { CropGrid } from './components/CropGrid';
import { BOARD_SIZE, INITIAL_CENTER } from './constants/board';
import { SquareData } from './interfaces/SquareData';
import { CenterContext } from './context/CenterContext';

perlin.seed();
const data = generateGrid(BOARD_SIZE);

export default function App() {
  const [center, setCenter] = useState<SquareData>(INITIAL_CENTER);

  return (
    <CenterContext.Provider value={setCenter}>
      <View style={styles.container}>
        <CropGrid
          squares={data}
          maxHorizontalSquares={10}
          maxVerticalSquares={15}
          center={center}
        />
      </View>
    </CenterContext.Provider>
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
