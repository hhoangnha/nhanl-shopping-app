import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Image from 'react-native-fast-image';
import HomeContainer from '../screens/Home/HomeContainer';
import {Icons} from '../styles/images';
const Tab = createBottomTabNavigator();
const HomeTab: React.FC<{}> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (
          {
            // focused, color, size
          },
        ) => {
          let iconName = Icons.HOME;

          switch (route.name) {
            case 'Home':
              break;
            case 'Product':
              iconName = 'search1';
              break;
            case 'Sale':
              iconName = 'book';
              break;
            case 'Setting':
              iconName = Icons.SETTING;
              break;
          }
          return <Image source={iconName} style={{width: 20, height: 20}} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        // options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Product" component={HomeContainer} />
      <Tab.Screen name="Sale" component={HomeContainer} />
      <Tab.Screen name="Setting" component={HomeContainer} />
    </Tab.Navigator>
  );
};

export default HomeTab;
