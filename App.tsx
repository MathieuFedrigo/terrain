import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { generateGrid } from './helpers/generateGrid';
import { perlin } from './helpers/perlin';
import { CropGrid } from './components/CropGrid';
import { BOARD_SIZE, INITIAL_CENTER } from './constants/board';
import { SquareData } from './interfaces/SquareData';
import { CenterContext } from './context/CenterContext';
import { getCloserPoint } from './helpers/getCloserPoint';
import { useGridSize } from './hooks/useGridSize';

perlin.seed();
const data = generateGrid(BOARD_SIZE);

export default function App() {
  const [center, setCenter] = useState<SquareData>(INITIAL_CENTER);
  const [goalCenter, setGoalCenter] = useState<SquareData>(INITIAL_CENTER);

  if (center.x !== goalCenter.x || center.y !== goalCenter.y) {
    setTimeout(() => setCenter(getCloserPoint(center, goalCenter)), 150);
  }
  const { maxHorizontalSquares, maxVerticalSquares } = useGridSize();

  return (
    <CenterContext.Provider value={setGoalCenter}>
      <View style={styles.container}>
        <CropGrid
          squares={data}
          maxHorizontalSquares={maxHorizontalSquares}
          maxVerticalSquares={maxVerticalSquares}
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
