import React from 'react';
import { Stack } from '../../common/stack';
// eslint-disable-next-line import/no-cycle
import Home from './Home';
import correspondenciaEnviada from './correspondenciaEnviada';
import correspondenciaRecebida from './correspondenciaRecebida';
// eslint-disable-next-line import/named
import reservasMarcadas from './reservasMarcadas';
// eslint-disable-next-line import/no-cycle
import ScanQrCode from '../../components/ScanQrCode';

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

    <Stack.Screen name="correspondenciaEnviada" component={correspondenciaEnviada} options={{ headerShown: false }} />

    <Stack.Screen name="correspondenciaRecebida" component={correspondenciaRecebida} options={{ headerShown: false }} />

    <Stack.Screen name="reservasMarcadas" component={reservasMarcadas} options={{ headerShown: false }} />
    <Stack.Screen name="ScanQrCode" component={ScanQrCode} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default HomeStack;
