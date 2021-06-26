import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './src/componets/Onboarding';
import home from './src/screens/home';
import details from './src/screens/details';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName={'Spalsh'}>
        <Stack.Screen name="Spalsh" component={Onboarding} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Details" component={details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;