import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Pedidos from '../administrador/screens/Pedidos';
import Mapa from '../administrador/screens/Mapa'
import Perfil from '../administrador/screens/Perfil'

const Drawer = createDrawerNavigator();

export default function Index() {
    return (
        <NavigationContainer>
			<Drawer.Navigator>
                    <Drawer.Screen name="Haz tu pedido" component={Pedidos}/>
                    <Drawer.Screen name="Llega a la granja" component={Mapa}/>
                    <Drawer.Screen name="Tu perfil" component={Perfil}/>
                    
            </Drawer.Navigator>
		</NavigationContainer>

    )
}
