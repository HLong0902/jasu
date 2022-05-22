import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Toptabs from '../../navigation/Toptabs';

const LophocScreen = () => {
  return (
      <Toptabs />

  );
}

export default LophocScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});