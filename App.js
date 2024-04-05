import * as DevClient from 'expo-dev-client'; // expo dev client
import 'react-native-gesture-handler'; //required import for bottomsheet to function
// react hooks
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
// import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// safe area provider
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
import ChangePin from './stacks/ChangePin';
import Notifications from './stacks/Notifications';
import Menu from './stacks/Menu';
import TopUp from './stacks/TopUp';
import Transfer from './stacks/Transfer';
// components
import BottomNavigation from './components/BottomNavigation';
import Taskbar from './components/Taskbar';
// conetxt
import AppProvider from './context/AppContext';
// import { enableFreeze } from 'react-native-screens';

// enableFreeze(true);
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

	// app is ready state
	// const [appIsReady, setAppIsReady] = useState(false);


	// useEffect(() => {
	// 	async function prepare() {
	// 		try {
	// 			// Pre-load fonts, make any API calls you need to do here
	// 			await Font.loadAsync({
	// 				'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
	// 				'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
	// 				'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
	// 				'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
	// 			});
	// 		} catch (e) {
	// 			console.warn(e);
	// 		} finally {
	// 			// Tell the application to render
	// 			setAppIsReady(true);
	// 		}
	// 	}
	// 	prepare();
	// }, []);

	// const onLayoutRootView = async () => {
	// 	if (appIsReady) {
	// 		// we hide the splash screen once we know the root view has already
	// 		// performed layout.
	// 		await SplashScreen.hideAsync();
	// 	}
	// }

	// if (!appIsReady) {
	// 	return null;
	// }

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

	const Stack = createNativeStackNavigator();

	return fontsLoaded ? (
		<SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
			<SafeAreaProvider>
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
									<Stack.Screen name="ChangePin" component={ChangePin} />
									<Stack.Screen name="Notifications" component={Notifications} />
									<Stack.Screen name="Menu" component={Menu} />
									<Stack.Screen name="TopUp" component={TopUp} />
									<Stack.Screen name="Transfer" component={Transfer} />
								</Stack.Navigator>
								<BottomNavigation />
							</BottomSheetModalProvider>
						</GestureHandlerRootView>
					</AppProvider>
				</NavigationContainer>
			</SafeAreaProvider>
		</SafeAreaView>
	): <></>;

	// return (
	// 	<SafeAreaView style={{flex: 1}}>
	// 		<NavigationContainer>
	// 			<AppProvider>
	// 				{/* GestureHandlerRootView required to render bottomsheet */}
	// 				<GestureHandlerRootView style={{ flex: 1 }}>
	// 					{/* BottomSheetModalProvider required to render bottomsheet */}
	// 					<BottomSheetModalProvider>
	// 						<Taskbar />
	// 						<Stack.Navigator
	// 							initialRouteName='Home'
	// 							screenOptions={{
	// 								headerShown: false
	// 							}}
	// 						>
	// 							<Stack.Screen name="Home" component={Home} />
	// 							<Stack.Screen name="Graph" component={Graph} />
	// 							<Stack.Screen name="Scan" component={Scan} />
	// 							<Stack.Screen name="Card" component={Card} />
	// 							<Stack.Screen name="ChangePin" component={ChangePin} />
	// 							<Stack.Screen name="Notifications" component={Notifications} />
	// 							<Stack.Screen name="Menu" component={Menu} />
	// 							<Stack.Screen name="TopUp" component={TopUp} />
	// 							<Stack.Screen name="Transfer" component={Transfer} />
	// 						</Stack.Navigator>
	// 						<BottomNavigation />
	// 					</BottomSheetModalProvider>
	// 				</GestureHandlerRootView>
	// 			</AppProvider>
	// 		</NavigationContainer>
	// 	</SafeAreaView>
	// );

	// "dependencies": {
	// 	"@gorhom/bottom-sheet": "^4.6.1",
	// 	"@react-native-community/blur": "^4.4.0",
	// 	"@react-navigation/native": "^6.1.17",
	// 	"@react-navigation/native-stack": "^6.9.26",
	// 	"expo": "^50.0.14",
	// 	"expo-blur": "^12.9.2",
	// 	"expo-camera": "^14.1.1",
	// 	"expo-dev-client": "^3.3.11",
	// 	"expo-font": "^11.10.3",
	// 	"expo-image": "^1.10.6",
	// 	"expo-linear-gradient": "^12.7.2",
	// 	"expo-splash-screen": "^0.26.4",
	// 	"expo-status-bar": "^1.11.1",
	// 	"metro": "^0.80.8",
	// 	"metro-config": "^0.80.8",
	// 	"metro-resolver": "^0.80.8",
	// 	"react": "18.2.0",
	// 	"react-native": "^0.73.6",
	// 	"react-native-chart-kit": "^6.12.0",
	// 	"react-native-gesture-handler": "^2.14.0",
	// 	"react-native-reanimated": "^3.6.2",
	// 	"react-native-shadow-2": "^7.0.8",
	// 	"react-native-svg": "^14.1.0"
	//   },
}

AppRegistry.registerComponent('MyApp', () => App);