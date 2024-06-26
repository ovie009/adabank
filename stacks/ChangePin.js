import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../style/colors';
import { windowHeight, windowWidth } from '../utils/dimension';
// card stripes
import CardStripes from '../assets/svg/CardStripes';
import MasterCardLogo from '../assets/svg/MasterCardLogo';
import BottomEllipse from '../assets/svg/BottomEllipse';
import TopEllipse from '../assets/svg/TopEllipse';
import EyeIcon from '../assets/svg/EyeIcon';
import EyeSlashIcon from '../assets/svg/EyeSlashIcon';
// gradient
import { LinearGradient } from 'expo-linear-gradient';
// shadow component
import { Shadow } from 'react-native-shadow-2';
// components

const ChangePin = () => {

	// search query
	const [pin, setPin] = useState('');
	
	// search query
	const [confirmPin, setConfirmPin] = useState('');

	// pin hiddem
	const [pinHidden, setPinHidden] = useState(true);

	// confirm pin hidden
	const [confirmPinHidden, setConfirmPinHidden] = useState(true);

	// limit switch value
	const [limit, setLimit] = useState(true);

	// change limit value function
	const handleToggle = () => {
		setLimit(prevValue => !prevValue);
	}

    return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
							<View style={styles.inputContent}>
								<TextInput
									placeholder='New PIN'
									placeholderTextColor={colors.subtext}
									style={styles.input}
									onChangeText={setPin}
									textAlignVertical='bottom'
									keyboardType='numeric'
									maxLength={4}
									secureTextEntry={pinHidden}
								/>
								<TouchableOpacity
									style={styles.viewPinButton}
									onPress={() => setPinHidden(prevValue => !prevValue)}
								>
									{!pinHidden ? <EyeSlashIcon /> : <EyeIcon />}
								</TouchableOpacity>
							</View>
							<Text style={styles.helperText}>
								Enter 6 numbers as new PIN to retain your card
							</Text>
						</View>
						<View style={styles.inputWrapper}>
							<View style={styles.inputContent}>
								<TextInput
									placeholder='Confirmation New PIN'
									placeholderTextColor={colors.subtext}
									style={styles.input}
									onChangeText={setConfirmPin}
									textAlignVertical='bottom'
									keyboardType='numeric'
									maxLength={4}
									secureTextEntry={confirmPinHidden}
								/>
								<TouchableOpacity
									style={styles.viewPinButton}
									onPress={() => setConfirmPinHidden(prevValue => !prevValue)}
								>
									{!confirmPinHidden ? <EyeSlashIcon /> : <EyeIcon />}
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.customButtonWrapper}>
						<TouchableOpacity
							style={[
								styles.customButton,
								[pin, confirmPin].includes('') || (pin != confirmPin) && styles.customButtonDisabled
							]}
							onPress={() => {}}
						>
							<Text style={styles.customButtonText}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</TouchableWithoutFeedback>
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
		fontWeight: '500',
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
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		color: colors.white,
		opacity: 0.54,
	},
	balance: {
		fontFamily: 'poppins-medium',
		fontWeight: '500',
		fontSize: 24,
		lineHeight: 42,
		color: colors.background,
	},
	cardNumber: {
		fontFamily: 'poppins-medium',
		fontWeight: '500',
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
		fontWeight: '500',
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
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '100%',
		gap: 46,
	},
	inputWrapper: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '100%',
		gap: 12,
	},
	inputContent: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '100%',
		flexDirection: 'row',
		borderBottomWidth: 0.5,
		borderColor: colors.listSeperator,
		paddingBottom: 8,
	},
	input: {
        fontFamily: 'poppins-regular',
        fontSize: 14,
        lineHeight: 21,
        color: colors.black,
        flex: 1,
    },
	viewPinButton: {
		width: 24,
		height: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	helperText: {
		fontFamily: 'poppins-regular',
		fontSize: 10,
		lineHeight: 15,
		color: colors.black,
		opacity: 0.3,
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
	customButtonDisabled: {
		backgroundColor: colors.primaryDisabled,
	},
	customButtonText: {
		fontFamily: 'poppins-medium',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 24,
		color: colors.white,
		textTransform: 'uppercase',
	}
})