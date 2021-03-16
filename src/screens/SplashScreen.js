import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C4670',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

const SplashScreen = ({ navigation }) => {
  // State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // Check if user_id is set or not
      // If not then send for Authentication
      // else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes')
      );
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logowtxt.png')}
        style={{
          position: 'absolute',
          width: 580,
          height: 571,
          // top: 35,
        }}
      />

      {/* <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      /> */}
    </View>
  );
};

export default SplashScreen;
