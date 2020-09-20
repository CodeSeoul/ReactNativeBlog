'use strict';

import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Hello world</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  