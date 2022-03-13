import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Vehicle from '../pages/Vehicles';

const Drawer = createDrawerNavigator();

function Routes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Vehicle" component={Vehicle} />
    </Drawer.Navigator>
  )
}
export default Routes;