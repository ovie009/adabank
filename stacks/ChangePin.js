import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../style/colors';
import { windowHeight, windowWidth } from '../utils/dimension';
// card stripes
import CardStripes from '../assets/svg/CardStripes';
import MasterCardLogo from '../assets/svg/MasterCardLogo';
import BottomEllipse from '../assets/svg/BottomEllipse';
import TopEllipse from '../assets/svg/TopEllipse';
import TopUpIcon from '../assets/svg/TopUpIcon';
import LockIcon from '../assets/svg/LockIcon';
import PinIcon from '../assets/svg/PinIcon';
// gradient
import { LinearGradient } from 'expo-linear-gradient';
// shadow component
import { Shadow } from 'react-native-shadow-2';
// components
import IconButton from '../components/IconButton';
import ToggleSwitch from '../components/ToggleSwitch';

const ChangePin = () => {

	// limit switch value
	const [limit, setLimit] = useState(true);

	// change limit value function
	const handleToggle = () => {
		setLimit(prevValue => !prevValue);
	}

    return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<LinearGradient
				// Background Linear Gradient
				colors={[colors.circleGradientStart, colors.circleGradientEnd]}
				style={styles.circularDesign}
			/>
			{/* <View style={styles.circularDesign} /> */}
			<View style={styles.cardWrapper}>
				<Text style={styles.cardHeading}>Chnage PIN</Text>
				<View style={styles.cardContainer}>
					<Shadow 
						style={styles.cardShadow}
						distance={40}
						offset={[0, 24]}
						startColor='#0408151A'
					>
						<View style={styles.card}>
							<View style={styles.rightContainer}>
								<View style={styles.balanceWrapper}>
									<Text style={styles.balanceHeading}>Current Balance</Text>
									<Text style={styles.balance}>$174.52</Text>
								</View>
								<Text style={styles.cardNumber}>
									5282 3456 7890 1289
								</Text>
								<View style={styles.cardEllipseBottom}>
									<BottomEllipse />
								</View>
								<View style={styles.cardEllipseTop}>
									<TopEllipse />
								</View>
							</View>
							<View style={styles.leftContainer}>
								<View style={styles.cardStripes}>
									<CardStripes />
								</View>
								<View style={styles.expireDateContainer}>
									<MasterCardLogo />
									<Text style={styles.expireDate}>
										09/25
									</Text>
								</View>
							</View>
						</View>
					</Shadow>
				</View>
			</View>
			<View style={styles.main}>
				<View style={styles.InputGroup}>
					<View style={styles.inputWrapper}>
						
					</View>
				</View>
                <View style={styles.customButtonWrapper}>
                    <TouchableOpacity
                        style={styles.customButton}
                        onPress={() => {}}
                    >
                        <Text style={styles.customButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
			</View>
		</ScrollView>
    )
}

export default ChangePin

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: colors.primary,
	},
	contentContainer: {
		minHeight: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		paddingTop: 213,
		// height: '100%',
	},
	circularDesign: {
		width: 384,
		height: 384,
		borderRadius: 384 / 2,
		position: 'absolute',
		zIndex: 1,
		left: - 153,
		top: -163,
		bottom: 0,
	},
	cardWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: "100%",
		// paddingHorizontal: 24,
		height: 250,
		position: 'absolute',
		top: 48,
		left: 0,
		zIndex: 2,
	},
	cardHeading: {
		fontFamily: 'poppins-medium',
		fontSize: 20,
		lineHeight: 30,
		color: colors.white
	},
	cardContainer: {
		width: '100%',
		height: 184,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
	cardShadow: {
		width: windowWidth - 48,
		height: 184,
		borderRadius: 30,
		display: 'flex',
		justifyContent: 'space-center',
		alignContent: 'center',
	},
	card: {
		width: windowWidth - 48,
		height: 184,
		backgroundColor: colors.black,
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
	},
	rightContainer: {
		paddingTop: 30,
		paddingBottom: 17,
		paddingLeft: 31.14,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignContent: 'flex-start',
		height: '100%',
		flexGrow: 1,
		position: 'relative',
		overflow: 'hidden',
	},
	balanceHeading: {
		fontFamily: 'poppins-medium',
		fontSize: 14,
		lineHeight: 21,
		color: colors.white,
		opacity: 0.54,
	},
	balance: {
		fontFamily: 'poppins-medium',
		fontSize: 24,
		lineHeight: 42,
		color: colors.background,
	},
	cardNumber: {
		fontFamily: 'poppins-medium',
		fontSize: 14,
		lineHeight: 21,
		color: colors.background,
		opacity: 0.9,
	},
	cardEllipseTop: {
		position: 'absolute',
		width: 75.05,
		height: 226 - 142,
		top: 0,
		right: -50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardEllipseBottom: {
		position: 'absolute',
		width: 333.23 - 142,
		height: 226 - 142,
		bottom: 0,
		left: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 117,
		height: '100%',
		backgroundColor: colors.cardBackground,
		borderTopRightRadius: 30, 
		borderBottomRightRadius: 30, 
		position: 'relative',
		overflow: 'hidden',
	},
	cardStripes: {
		width: "100%",
		height: "100%",
		zIndex: 2,
		position: 'absolute',
		zIndex: 2,
		left: 0,
		top: 0,
	},
	expireDateContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: "100%",
		height: '100%',
		borderTopRightRadius: 30, 
		borderBottomRightRadius: 30, 
		position: 'relative',
		overflow: 'hidden',
		paddingTop: 24,
		paddingBottom: 17,
		zIndex: 3,
	},
	expireDate: {
		fontFamily: 'poppins-medium',
		fontSize: 14,
		lineHeight: 21,
		color: colors.black
	},
	main: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: colors.background,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
		gap: 50,
		paddingTop: 177,
        paddingBottom: 16,
		paddingHorizontal: 24,
	},
	InputGroup: {
	},
    customButtonWrapper: {
        width: '100%',
		height: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        width: '100%',
        height: 64,
        borderRadius: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryAlt
    },
	customButtonText: {
		fontFamily: 'poppins-medium',
		fontSize: 16,
		lineHeight: 24,
		color: colors.white,
		textTransform: 'uppercase',
	}
})