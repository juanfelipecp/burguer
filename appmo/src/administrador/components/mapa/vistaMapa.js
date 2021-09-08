import React from 'react'
import { View, Text,StyleSheet, Image, } from 'react-native'
import imagenlogo from '../../../../assets/sisa.jpg'

export default function vistaMapa() {
    return (
        <View style={style.container}>
            <Text>valencia es troll</Text>
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
