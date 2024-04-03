import 'react-native-gesture-handler'; //required import for bottomsheet to function
// react hooks
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { StatusBar } from 'expo-status-bar';
// bottom sheet components
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// app required components
import { SafeAreaView, AppRegistry } from 'react-native';
// stacks
import Home from './stacks/Home';
import Graph from './stacks/Graph';
import Scan from './stacks/Scan';
import Card from './stacks/Card';
import Notifications from './stacks/Notifications';
import Menu from './stacks/Menu';
import TopUp from './stacks/TopUp';
// colors
import { colors } from './style/colors';
// components
import BottomNavigation from './components/BottomNavigation';
import Taskbar from './components/Taskbar';
// conetxt
import AppProvider from './context/AppContext';

export default function App() {

	// declare fonts 
	const [fontsLoaded] = useFonts({
		'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
		'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
		'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
	});

	//   function to load font
	const onLayoutRootView = useCallback(async () => {
		// wait fpr font and authData to finish loading
		if (fontsLoaded) {
			// remove splash screen
			await SplashScreen.hideAsync();
		}

	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	const Stack = createNativeStackNavigator();

	return (
		<SafeAreaView style={{flex: 1}}>
			<NavigationContainer>
				<AppProvider>
					{/* GestureHandlerRootView required to render bottomsheet */}
					<GestureHandlerRootView style={{ flex: 1 }}>
						{/* BottomSheetModalProvider required to render bottomsheet */}
						<BottomSheetModalProvider>
							<Taskbar />
							<Stack.Navigator
								initialRouteName='Home'
								screenOptions={{
									headerShown: false
								}}
							>
								<Stack.Screen name="Home" component={Home} />
								<Stack.Screen name="Graph" component={Graph} />
								<Stack.Screen name="Scan" component={Scan} />
								<Stack.Screen name="Card" component={Card} />
								<Stack.Screen name="Notifications" component={Notifications} />
								<Stack.Screen name="Menu" component={Menu} />
								<Stack.Screen name="TopUp" component={TopUp} />
							</Stack.Navigator>
							<BottomNavigation />
						</BottomSheetModalProvider>
					</GestureHandlerRootView>
				</AppProvider>
			</NavigationContainer>
		</SafeAreaView>
	);
}

AppRegistry.registerComponent('MyApp', () => App);