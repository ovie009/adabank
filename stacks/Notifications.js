import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react';
// colors
import { colors } from '../style/colors';
// shadow component
import { Shadow } from 'react-native-shadow-2';
// icons
import CloseIcon from '../assets/svg/CloseIcon';
import ReceiptIcon from '../assets/svg/ReceiptIcon';
// utils
import { windowWidth } from '../utils/dimension';
// components
import NotificationListItem from '../components/NotificationListItem';
// icons
import PersonIcon from '../assets/svg/PersonIcon';
import EmailIcon from '../assets/svg/EmailIcon';


const Notifications = ({navigation}) => {

	// list of transactions
	const [transactions, setTransactions] = useState([
		{
			id: 1,
			description: 'successful transaction to Ojaman, view and download the receipt',
			date: 'April 01'
		},
		{
			id: 2,
			description: 'successful transaction to Ovie, view and download the receipt',
			date: 'April 01'
		},
		{
			id: 3,
			description: 'successful transaction to Jane, view and download the receipt',
			date: 'April 01'
		},
	]);

	const verification = [
		{
			id: 1,
			description: 'Personal Information',
			subText: 'complete your name and profile photo to complete the data',
			icon: <PersonIcon />,
		},
		{
			id: 2,
			description: 'Confirm Email',
			subText: 'Please confirm your email for further data security and completeness',
			icon: <EmailIcon />,
		},
	];

	// function to remove transaction
	const handleRemoveTransaction = (id) => {
		const newTransactions = transactions.filter(transaction => transaction.id !== id);
		setTransactions(newTransactions);
	}

    return (
      <ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Notifications</Text>
			</View>
			<View style={styles.main}>
				{transactions.length > 0 && (
					<Shadow 
						style={styles.shadow}
						distance={50}
						offset={[0, 8]}
						startColor='#07051A12'
						// endColor='tranparent'
					>
						<View style={styles.transactionHistoryWrapper}>
							<Text style={styles.transactionHistoryHeading}>
								Transaction
							</Text>
							<View style={styles.transactionsWrapper}>
								{transactions.map((transaction, index) => (
									<NotificationListItem
										key={transaction.id}
										index={index}
										// onPress={() => navigation.navigate("Receipt")}
										onPress={() => {}}
										onPressClose={() => handleRemoveTransaction(transaction.id)}
										mainText={transaction.description}
										subText={transaction.date}
										icon={<ReceiptIcon />}
									/>
								))}
								
							</View>
						</View>
					</Shadow>
				)}
				<Shadow 
					style={styles.shadow}
					distance={50}
					offset={[0, 8]}
					startColor='#07051A12'
					// endColor='tranparent'
				>
					<View style={styles.transactionHistoryWrapper}>
						<View style={styles.transactionHistoryHeadingWrapper}>
							<Text style={styles.transactionHistoryHeading}>
								Complete Verification
							</Text>
							<Text style={styles.percentageProgress}>
								60%
							</Text>
						</View>
						<View style={styles.progressBar}>
								<View style={styles.progress}/>
						</View>
						<View style={styles.transactionsWrapper}>
							{verification.map((transaction, index) => (
								<NotificationListItem
									key={transaction.id}
									index={index}
									// onPress={() => navigation.navigate("Profile")}
									onPress={() => {}}
									mainText={transaction.description}
									subText={transaction.subText}
									icon={transaction.icon}
								/>
							))}
							
						</View>
					</View>
				</Shadow>
			</View>
      </ScrollView>
    )
}

export default Notifications

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '100%',
		height: '100%',
		backgroundColor: colors.background,
		// padding: 24,
	},
	header: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 32,
		marginBottom: 28,
	},
	headerText: {
		// fontFamily: 'poppins-medium',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 24,
		color: colors.black,
	},
	main: {
		paddingBottom: 70,
	},
	shadow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 24,
		marginBottom: 24,
	},
	transactionHistoryWrapper: {
		paddingHorizontal: 24,
		paddingTop: 24,
		width: '100%',
		borderRadius: 20,
		backgroundColor: colors.white,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		gap: 16,
	},
	transactionHistoryHeadingWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 12,
	},
	transactionHistoryHeading: {
		// fontFamily: 'poppins-medium',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		color: colors.black,
		opacity: 0.5,
	},
	percentageProgress: {
		// fontFamily: 'poppins-medium',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		color: colors.primary,
	},
	progressBar: {
		marginTop: 4,
		marginBottom: 12,
		width: '100%',
		height: 10,
		borderRadius: 100,
		backgroundColor: colors.progressBar,
	},
	progress: {
		width: '60%',
		height: 10,
		borderRadius: 100,
		backgroundColor: colors.primaryAlt
	},
	transactionsWrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		gap: 16,
	},
	transaction: {
		paddingVertical: 15,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection:'row',
		height: 85,
		gap: 20,
		borderBottomWidth: 0.5,
		borderColor: colors.listSeperator,
	},
	transactionContent: {
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 12,
		width: windowWidth - 132,
	},
	transactionTextWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: windowWidth - 168,
		gap: 4,
	},
	transactionDescription: {
		// fontFamily: 'poppins-regular',
		fontSize: 12,
		lineHeight: 18,
		color: colors.blackOut,
		flexWrap: 'wrap',
		height: 36,
	},
	transactionDate: {
		// fontFamily: 'poppins-regular',
		fontSize: 10,
		lineHeight: 15,
		color: colors.subtext,
	},


})