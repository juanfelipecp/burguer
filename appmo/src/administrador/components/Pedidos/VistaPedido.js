import React from 'react'
import { View, Text,StyleSheet, Image, } from 'react-native'
import imagenlogo from '../../../../assets/um.gif'

export default function VistaPedido() {
    return (
        <View style={style.container}>
            <Text> juanes es marico</Text>
            <Image style={style.imagen}
                source={imagenlogo}/>
        </View>
    )
}

const style = StyleSheet.create({
    imagen:{width:200,height:200},
    container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#D4CECD',
	},
  });
