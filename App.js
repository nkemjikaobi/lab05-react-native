import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
	const [background, setBackground] = useState('white');
	return (
		<View style={[styles.container, { backgroundColor: background }]}>
			<View style={styles.wrapper_1}>
				<TouchableOpacity
					onPress={() => setBackground('red')}
					style={[styles.button, { backgroundColor: 'red' }]}
				>
					<Text style={{ color: 'white' }}>Red Button</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setBackground('green')}
					style={[styles.button, { backgroundColor: 'green' }]}
				>
					<Text style={{ color: 'white' }}>Green Button</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.wrapper_2}>
				<TouchableOpacity
					onPress={() => setBackground('blue')}
					style={[styles.button, { backgroundColor: 'blue' }]}
				>
					<Text style={{ color: 'white' }}>Blue Button</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setBackground('purple')}
					style={[styles.button, { backgroundColor: 'purple' }]}
				>
					<Text style={{ color: 'white' }}>Purple Button</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: 150,
		height: 48,
		// borderRadius: 6,
		padding: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 2,
	},
	wrapper_1: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		margin: 30,
	},
	wrapper_2: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
