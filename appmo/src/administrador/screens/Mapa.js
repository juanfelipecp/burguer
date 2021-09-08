import React from 'react'
import { View, Text } from 'react-native'
import VistaPedido from '../components/mapa/vistaMapa'

export default function Mapa() {
    return (
        <View>
            <Text>Hola soy el padre de mapa</Text>
            <VistaPedido/>
        </View>
    )
}
