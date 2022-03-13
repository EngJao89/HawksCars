import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Vehicles from '../pages/Vehicles';

const Drawer = createDrawerNavigator();

function Routes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Hawks Cars" component={Home} />
      <Drawer.Screen name="Vehicles" component={Vehicles} />
    </Drawer.Navigator>
  )
}
export default Routes;