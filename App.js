import * as React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from "./src/tabs/HomeTab";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color;

            if (route.name === 'Aanbod') {
              iconName = focused
                ? 'home'
                : 'home';
              color = focused
                ? '#bf7a13'
                : '#294870';
            } else if (route.name === 'Info') {
              iconName = focused ? 'info-circle' : 'info-circle';
              color = focused
                ? '#bf7a13'
                : '#294870';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'envelope' : 'envelope'; color = focused
                ? '#bf7a13'
                : '#294870';
            } else if (route.name === 'Instellingen') {
              iconName = focused ? 'cog' : 'cog'; color = focused
                ? '#bf7a13'
                : '#294870';
            }
            return <FontAwesome5 size={25} name={iconName ?? ''} color={color} style={{ alignSelf: 'center' }} light />;
          },
          tabBarActiveTintColor: '#bf7a13',
          tabBarInactiveTintColor: '#294870',

          tabBarStyle: { alignContent: 'center', height: 80, padding: 10 },
          tabBarLabelStyle: { fontSize: 12 },
        })}
        initialRouteName='Aanbod'
      >
        <Tab.Screen name="Aanbod" component={HomeTab} />
        <Tab.Screen name="Info" component={HomeTab} />
        <Tab.Screen name="Contact" component={HomeTab} />
        <Tab.Screen name="Instellingen" component={HomeTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}