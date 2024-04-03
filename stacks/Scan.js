import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React from 'react';
import { colors } from '../style/colors';
// component
import Header from '../components/Header'
// camera components
// camera components and functions
import {
    Camera,
    CameraType,
    requestCameraPermissionsAsync,
    getCameraPermissionsAsync,
    FlashMode,
    AutoFocus,
    WhiteBalance,
} from 'expo-camera';
// react hooks
import { useState, useEffect, useRef } from 'react';
import { windowHeight, windowWidth } from '../utils/dimension';
// gradient
import { LinearGradient } from 'expo-linear-gradient';

const Scan = () => {

	// translate value
    const translate = useRef(new Animated.Value(0)).current;

	// function to animate from 0 to 0.33 * windowHeight in a loop infinitely
	const startAnimation = () => {
		Animated.sequence([
		  Animated.timing(translate, {
			toValue: 0.33 * windowHeight,
			duration: 1000, // Adjust the duration as needed
			easing: Easing.linear,
			useNativeDriver: true,
		  }),
		  Animated.timing(translate, {
			toValue: 0,
			duration: 1000, // Adjust the duration as needed
			easing: Easing.linear,
			useNativeDriver: true,
		  }),
		]).start(() => {
		  // Reset the animation when it's completed
		  translate.setValue(0);
		  startAnimation(); // Restart the animation
		});
	};

	// Call the animation function
	useEffect(() => {
		startAnimation();
	}, []);
	
	// Ensure to clear the animation on component unmount to prevent memory leaks
	useEffect(() => {
		return () => {
		translate.stopAnimation();
		};
	}, []);

	// camera type
    const [type, setType] = useState(CameraType.back);
    // camera flash light mode
    const [flashMode, setFlashMode] = useState(FlashMode.off);

    // camera ref
    const cameraRef = useRef();

	// request permission to use phone camera
    const requestPermission = async () => {
        try {
            await requestCameraPermissionsAsync();
        } catch (error) {
            // go back to previous screen/stack
        }
    }

	// request permission on load
    useEffect(() => {
        requestPermission();
    }, []);

	return (
		<View style={styles.container}>
			<Camera
				ref={cameraRef}
				style={styles.camera}
				type={type}
				flashMode={flashMode}
				ratio={'16:9'}
				autoFocus={AutoFocus.on}
				whiteBalance={WhiteBalance.cloudy}
			>
				<View style={styles.main}>
					<View style={styles.top}>
						<Header
							title={""}
							mode={'light'}
						/>
					</View>
					<View style={styles.scanWrapper}>
						<View style={styles.sideBar} />
						<View style={styles.scanWindow}>
							<View style={styles.topLeft} />
							<View style={styles.topRight} />
							<View style={styles.bottomLeft} />
							<View style={styles.bottomRight} />
							<Animated.View 
								style={[
									styles.scanner,
									{
										transform: [
											{
												translateY: translate,
											}
										]
									}
								]}
							>
								<LinearGradient
									// Background Linear Gradient
									colors={['#09703E80', '#09703E00']}
									style={styles.gradient}
								></LinearGradient>
							</Animated.View>
						</View>
						<View style={styles.sideBar} />
					</View>
					<View style={styles.top} />
				</View>
			</Camera>
		</View>
	)
}

export default Scan

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '100%',
		height: '100%',
	},
	camera: {
		width: '100%',
		height: '100%',
	},
	headerWrapper: {
	},
	main: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	top: {
		height: '33%',
		width: '100%',
		backgroundColor: colors.primaryAltLight,
		padding: 24,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexGrow: 1,
	},
	scanWrapper: {
		height: '33%',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// backgroundColor: colors.primaryAltLight
	},
	sideBar: {
		width: 48,
		height: '100%',
		backgroundColor: colors.primaryAltLight,
	},
	scanWindow: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
		position: 'relative',
		height: '100%',
		overflow: 'hidden',
	},
	topLeft: {
		width: 50,
		height: 50,
		position: 'absolute',
		top: 0,
		left: 0,
		borderTopWidth: 3,
		borderLeftWidth: 3,
		borderColor: colors.white,
		borderTopLeftRadius: 13,
	},
	topLeft: {
		width: 50,
		height: 50,
		position: 'absolute',
		top: 0,
		left: 0,
		borderTopWidth: 3,
		borderLeftWidth: 3,
		borderColor: colors.white,
		borderTopLeftRadius: 13,
	},
	topRight: {
		width: 50,
		height: 50,
		position: 'absolute',
		top: 0,
		right: 0,
		borderTopWidth: 3,
		borderRightWidth: 3,
		borderColor: colors.white,
		borderTopRightRadius: 13,
	},
	bottomLeft: {
		width: 50,
		height: 50,
		position: 'absolute',
		bottom: 0,
		left: 0,
		borderBottomWidth: 3,
		borderLeftWidth: 3,
		borderColor: colors.white,
		borderBottomLeftRadius: 13,
	},
	bottomRight: {
		width: 50,
		height: 50,
		position: 'absolute',
		bottom: 0,
		right: 0,
		borderBottomWidth: 3,
		borderRightWidth: 3,
		borderColor: colors.white,
		borderBottomRightRadius: 13,
	},
	scanner: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 1.5,
		borderColor: colors.primary,
		transform: [
			{
				translateY: 0.33 * windowHeight,
			}
		],
	},
	gradient: {
		width: '100%',
		height: '100%',
	}
})