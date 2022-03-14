import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Vehicle from '../pages/Vehicles';
import StackRoutes from './StackRoutes';

const Drawer = createDrawerNavigator();

function Routes(){
  return(
    <Drawer.Navigator 
      screenOptions={{
        headerShown: false,

        drawerStyle:{
          backgroundColor: '#090E0E',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#E72F49',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF'
      }}
    >
      <Drawer.Screen 
        name="Hawks Cars" 
        component={StackRoutes} 
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Vehicle" 
        component={Vehicle} 
        options={{
          title: "Meus Veículos",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons 
              name={ focused ? 'car' : 'car-side' }
              size={size} 
              color={color} 
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}
export default Routes;