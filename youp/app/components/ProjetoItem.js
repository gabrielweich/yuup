import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StackedAvatars from './StackedAvatars';

const ProjetoItem = ({ uri, name, description, date, detalhe }) => {

	return (
		<View
			style={{
				borderRadius: 40,
				height: 170,
				flex: 1,
				alignItems: 'stretch',
				justifyContent: 'center',
				marginTop: 20,
				marginHorizontal: 20
			}}>

			<ImageBackground

				imageStyle={{ borderRadius: 20 }}
				style={{
					borderRadius: 40,
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'stretch',//TODO: Importate para que la imagen abarque toda la pantalla
					backgroundColor: 'transparent'
				}} source={{ uri }}>
				<LinearGradient
					colors={['rgba(0, 0, 0,0.3)', 'rgba(0, 0, 0,0.3)']}
					style={{
						borderRadius: 40,
						flex: 1,
						paddingTop: 50,
						paddingHorizontal: 20,
						paddingVertical: 20,
						overflow: 'visible',
						alignItems: 'center',
						alignSelf: 'stretch',
					}}
				>
				<Text style={{color: '#fff'}}>Teste</Text>
				</LinearGradient>
			</ImageBackground>


		</View>
	)
}

export default ProjetoItem;
