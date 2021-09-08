import React from 'react'
import { View, Text } from 'react-native'
import VistaPedido from '../components/Pedidos/VistaPedido'

export default function Pedidos() {
    return (
        <View>
            <Text> hola soy el padre de pedido</Text>
            <VistaPedido/>
        </View>
    )
}
