/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackGeneral} from './src/Screens/Stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StackGeneral />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
