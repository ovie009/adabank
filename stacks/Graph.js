import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../style/colors';
import { windowHeight, windowWidth } from '../utils/dimension';
// card stripes
import VerticalRule from '../assets/svg/VerticalRule';
import ArrowDownLargeIcon from '../assets/svg/ArrowDownLargeIcon';
// gradient
import { LinearGradient } from 'expo-linear-gradient';
// shadow component
import { Shadow } from 'react-native-shadow-2';
// components
import TransactionHistory from '../components/TransactionHistory';
// chart
import {
	LineChart,
  } from "react-native-chart-kit";

const Graph = () => {

	// transactionType could be equipment, entertainment, streaming, food, shopping or travel
    const transactions = [
        {
            id: 1,
            transactionType: 'Equipment',
            amount: 220.98,
            date: '4 Transaction',
        },
        {
            id: 2,
            transactionType: 'Entertainment',
            amount: 160.98,
            date: '3 Transaction',
        },
        {
            id: 3,
            transactionType: 'Travel',
            amount: 550.98,
            date: '5 Transaction',
        },
        {
            id: 4,
            transactionType: 'Streaming',
            amount: 120.98,
            date: '1 Transaction',
        },
        {
            id: 5,
            transactionType: 'Food',
            amount: 57.98,
            date: '2 Transaction',
        },
        {
            id: 6,
            transactionType: 'Shopping',
            amount: 840.52,
            date: '3 Transaction',
        },
    ];

    return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<View style={styles.graphContainer}>
				<View style={styles.chartHeader}>
					<TouchableOpacity
						style={styles.previousButton}
					>
						<ArrowDownLargeIcon />
					</TouchableOpacity>
					<View style={styles.rangeWrapper}>
						<Text style={styles.dateRange}>1 Mar 2024 - 31 Mar 2024</Text>
						<Text style={styles.totalAmount}>$10,561.98</Text>
					</View>
					<TouchableOpacity
						style={styles.nextButton}
					>
						<ArrowDownLargeIcon />
					</TouchableOpacity>
				</View>
				<LineChart
					data={{
						labels: ["1 Mar", "11 Mar", "21 Mar", "31 Mar"],
						datasets: [
							{
								data: [
									Math.random() * 10,
									Math.random() * 10,
									Math.random() * 10,
									Math.random() * 10,
									Math.random() * 10,
									Math.random() * 10
								]
							}
						]
					}}
					width={windowWidth} // from react-native
					height={264}
					yAxisSuffix="k"
					yAxisInterval={1} // optional, defaults to 1
					chartConfig={{
						backgroundGradientFrom: colors.primary,
						backgroundGradientTo: colors.primary,
						fillShadowGradientFrom: colors.yellow,
						fillShadowGradientFromOpacity: 1,
						fillShadowGradientToOpacity: 0,
						fillShadowGradientTo: colors.yellow,
						decimalPlaces: 0, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(233, 255, 171, ${opacity})`,
						labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16,
						},
						propsForDots: {
							r: "1",
							strokeWidth: "3",
							stroke: colors.yellow
						}
					}}
					bezier
					style={{
						// marginVertical: 8,
						// borderRadius: 16
					}}
				/>
			</View>
			<View style={styles.main}>
				<View style={styles.shadowCardWrapper}>
					<Shadow 
						style={styles.cardShadow}
						distance={50}
						offset={[0, 10]}
						startColor='#0905141C'
					>
						<View style={styles.amountWrapper}>
							<Text style={styles.amountDescription}>
								Earned
							</Text>
							<Text style={[styles.amount, {color: colors.primary}]}>
								$127.76
							</Text>
						</View>
						<VerticalRule />
						<View style={styles.amountWrapper}>
							<Text style={styles.amountDescription}>
								Earned
							</Text>
							<Text style={[styles.amount, {color: colors.spent}]}>
								$127.76
							</Text>
						</View>
					</Shadow>
				</View>
				<View style={styles.settingsGroup}>
					<Text style={styles.setttingsHeading}>
						Tranaction History
					</Text>
					<View style={styles.settingsList}>
						{transactions.map(transaction => (
							<TransactionHistory
								key={transaction.id}
								transactionType={transaction?.transactionType}
								amount={transaction.amount}
								date={transaction.date}
							/>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
    )
}

export default Graph

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: '100%',
		height: '100%',
		backgroundColor: colors.primary,
	},
	contentContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	graphContainer: {
		width: "100%",
		height: 407,
		marginBottom: 17,
		marginTop: 28,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
		gap: 23,
	},
	chartHeader: {
		height: 83,
		display: 'flex',
		gap: 4,
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		width: '100%',
	},
	previousButton: {
		position: 'absolute',
		left: 24,
		// transform, rotate 180deg
		// transform: [] 
		transform: [{
			rotateY: '-180deg',
		}]
	},
	nextButton: {
		position: 'absolute',
		right: 24,
	},
	dateRange: {
		fontFamily: 'poppins-regular',
		fontSize: 14,
		lineHeight: 21,
		color: colors.white,
	},
	totalAmount: {
		fontFamily: 'poppins-medium',
		fontSize: 36,
		lineHeight: 54,
		color: colors.white,
	},
	main: {
		minHeight: windowHeight - 452,
		width: '100%',
		backgroundColor: colors.background,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 101,
		position: 'relative',
	},
	shadowCardWrapper: {
		width: '100%',
		position: 'absolute',
		height: 150,
		paddingHorizontal: 35,
		top: -22,
		zIndex: 2,
	},
	cardShadow: {
		backgroundColor: colors.white,
		height: 83,
		borderRadius: 20,
		width: "100%",
		width: '100%',
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 36,
		paddingVertical: 15,
	},
	amountWrapper: {
		width: '50%',
		display: 'flex',
		gap: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	amountDescription: {
		fontFamily: 'poppins-regular',
		fontSize: 12,
		lineHeight: 18,
		color: colors.black,
		opacity: 0.5,
		textAlign: 'center',
		width: '100%',
	},
	amount: {
		fontFamily: 'poppins-medium',
		fontSize: 20,
		lineHeight: 30,
		textAlign: 'center',
	},
	settingsGroup: {
		paddingHorizontal: 24,
		width: '100%'
	},
	setttingsHeading: {
		fontFamily: 'poppins-medium',
		fontSize: 14,
		lineHeight: 21,
		color: colors.black,
		opacity: 0.5,
		marginBottom: 17,
	},
	settingsList: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: 20,
		paddingBottom: 90,
	},
	settingsListItem: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		height: 60,
		borderBottomWidth: 0.5,
		borderColor: colors.listSeperator,
	},
	settingsDescription: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: 4,
	},
	settingsHeading: {
		fontFamily: 'poppins-medium',
		fontSize: 12,
		lineHeight: 18,
		color: colors.black,
	},
	settingsSubText: {
		fontFamily: 'poppins-regular',
		fontSize: 10,
		lineHeight: 15,
		color: colors.black,
		opacity: 0.5,
	},
	limit: {
		fontFamily: 'poppins-medium',
		fontSize: 14,
		lineHeight: 21,
		color: colors.black,
	},
})