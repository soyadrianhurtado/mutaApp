import React from 'react';
import {Pressable, View, StyleSheet, Text} from 'react-native';

export const PressableHeader = () => {
  return (
    <View>
      <Pressable>
        <Text style={styles.text}>. . .</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
