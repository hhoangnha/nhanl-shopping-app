import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorParamsList} from './types';
import HomeTab from './HomeTab';
import ProductDetailContainer from '../screens/ProductDetail/ProductDetailContainer';

const Stack = createStackNavigator<StackNavigatorParamsList>();
const RootNavigation: React.FC<{}> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="ProductDetail" component={ProductDetailContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
