import React from 'react';
import { StyleSheet, View } from 'react-native';
import { generateGrid } from './helpers/generateGrid';
import { Grid } from './components/Grid';
import { perlin } from './helpers/perlin';

const data = generateGrid(100);

export default function App() {
  perlin.seed();
  return (
    <View style={styles.container}>
      <Grid squares={data} />
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
