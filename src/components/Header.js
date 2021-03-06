import React from 'react';
import { Image } from 'react-native';

export function Header() {
  return (
    <Image
      source={require('../img/txtlogo.png')}
      style={{
        position: 'absolute',
        width: 123,
        height: 51,
        top: 35,
      }}
    />
  );
}
