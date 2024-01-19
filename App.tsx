import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/Home'; // Update the import statement

const App: React.FC = () => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Home onPress={handleButtonPress} title="Press Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
