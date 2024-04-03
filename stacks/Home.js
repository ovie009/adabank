import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef , useCallback} from 'react';
import { colors } from '../style/colors';
// components
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import ModalHandle from '../components/ModalHandle';
import Avatar from '../components/Avatar';
import IconButton from '../components/IconButton';
import TransactionHistory from '../components/TransactionHistory';
// utils
import { windowWidth, windowHeight } from '../utils/dimension';
// icons
import TransferIcon from '../assets/svg/TransferIcon';
import TopUpIcon from '../assets/svg/TopUpIcon';
import BillIcon from '../assets/svg/BillIcon';
import MenuIcon from '../assets/svg/MenuIcon';
import ArrowDownIcon from '../assets/svg/ArrowDownIcon';
import HideBalanceIcon from '../assets/svg/HideBalanceIcon';
// blur view
// import { BlurView } from 'expo-blur';
// import { BlurView } from "@react-native-community/blur";
// bottom sheet
import BottomSheet, { BottomSheetView, BottomSheetScrollView } from '@gorhom/bottom-sheet';
// scroll view from gesture handler
import { ScrollView } from "react-native-gesture-handler";
// shadow component
import { Shadow } from 'react-native-shadow-2';

const Home = ({navigation}) => {

    // state to toggle hide balance
    const [hideBalance, setHideBalance] = useState(false);

    // ref
    const bottomSheetRef = useRef(null);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // benficiaries list
    const beneficiaries = [
        {
            name: 'Ojaman',
            image_uri: require('../assets/profile/ojaman.png'),
        },
        {
            name: 'Jane',
            image_uri: require('../assets/profile/jane.png'),
        },
        {
            name: 'Lucia',
            image_uri: require('../assets/profile/lucia.png'),
        },
        {
            name: 'Jumin',
            image_uri: require('../assets/profile/jumin.png'),
        },
        {
            name: 'Ray',
            image_uri: require('../assets/profile/ray.jpg'),
        },
        {
            name: 'Jimati',
            image_uri: require('../assets/profile/jimati.png'),
        },
        {
            name: 'Ovie',
            image_uri: require('../assets/profile/ovie.jpg'),
        },
    ]

    // quick buttons
    const quickButtons = [
        {
            text: 'Transfer',
            stack: 'Transfer',
            icon: <TransferIcon />,            
        },
        {
            text: 'Top-up',
            stack: 'Top-up',
            icon: <TopUpIcon />,            
        },
        {
            text: 'Bill',
            stack: 'Bill',
            icon: <BillIcon />,            
        },
        {
            text: 'More',
            stack: 'Menu',
            icon: <MenuIcon />,            
        },
    ]

    // transaction history fields: transactionType, amount, description
    // transactionType could be equipment, entertainment, streaming, food, shopping or travel
    const transactions = [
        {
            id: 1,
            transactionType: 'Equipment',
            amount: 220.98,
            description: 'Laptop Acer Aspire 5',
            date: '01 Apr',
        },
        {
            id: 2,
            transactionType: 'Entertainment',
            amount: 160.98,
            description: 'Call of Duty',
            date: '01 Apr',
        },
        {
            id: 3,
            transactionType: 'Travel',
            amount: 550.98,
            description: 'Asaba, Nigeria',
            date: '29 Mar',
        },
        {
            id: 4,
            transactionType: 'Streaming',
            amount: 120.98,
            description: 'Showmax and Netflix',
            date: '29 Apr',
        },
        {
            id: 5,
            transactionType: 'Food',
            amount: 57.98,
            description: 'Nsala',
            date: '27 Mar',
        },
        {
            id: 6,
            transactionType: 'Shopping',
            amount: 840.52,
            description: 'Shoprite, Delta Mall',
            date: '25 Mar',
        },
    ]

    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <View style={styles.headerTextWrapper}>
                    <Text style={styles.headerLightText}>Welcome</Text>
                    <Text style={styles.headerBoldText}>Mariana S.</Text>
                </View>
                <LinearGradient
                    // Background Linear Gradient
                    colors={[colors.gradientStart, colors.gradientEnd]}
                    style={styles.profileImageGradient}
                >
                    <View style={styles.profileImageWrapper}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={require('../assets/profile/mariana.png')}
                                style={styles.profileImage}
                            />
                        </View>
                    </View>
                </LinearGradient>
                
            </View>
            {/* balance card */}
            <View style={styles.main}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={[colors.cardGradientStart, colors.cardGradientEnd]}
                    style={styles.accountBalanceGradient}
                >
                    <View style={styles.accountBalanceCard}>
                        <View style={styles.cardWrapper}>
                            <TouchableOpacity
                                style={styles.hideBalanceButton}
                                onPress={() => setHideBalance(prevValue => !prevValue)}
                            >
                                <HideBalanceIcon />
                            </TouchableOpacity>
                            <View style={styles.balanceContainer}>
                                <Text style={styles.balanceDescription}>Total Balance</Text>
                                <View style={styles.balanceTextWrapper}>
                                    {/* <BlurView
                                        style={styles.blurView}
                                        intensity={5} // Adjust the blur intensity
                                        blurReductionFactor={5}
                                    > */}
                                        <Text style={styles.balanceText}>
                                            $450.37
                                        </Text>
                                    {/* </BlurView> */}
                                </View>
                                <TouchableOpacity style={styles.currencyButton}>
                                    <Text style={styles.currencyButtonText}>USD</Text>
                                    <ArrowDownIcon />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.quickLinksWrapper}>
                                {quickButtons.map(button => (
                                    <View key={button.text} style={styles.iconButtonWrapper}>
                                        <IconButton
                                            onPress={() => navigation.navigate(button.stack)}
                                            icon={button.icon}
                                        />
                                        <Text style={styles.quickButtonDescription}>
                                            {button.text}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            {/* bottomsheet */}
            <BottomSheet
                ref={bottomSheetRef}
                // onChange={handleSheetChanges}
                handleComponent={ModalHandle}
                snapPoints={[windowHeight - 430, windowHeight - 118]}
                backgroundStyle={{borderRadius: 30, backgroundColor: colors.bacground}}
            >
                <BottomSheetScrollView 
                    // showsVerticalScrollIndicator={false}
                    style={styles.bottomSheetScrollViewMain}
                >
                    <View style={styles.beneficiariesWrapper}>
                        <Text style={styles.beneficiariesHeader}>Send Again</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.beneficiariesList}
                        >
                            {beneficiaries.map(beneficiary => (
                                <TouchableOpacity 
                                    key={beneficiary.name}
                                    style={styles.beneficiaryWrapper}
                                >
                                    <Avatar
                                        uri={beneficiary.image_uri}
                                    />
                                    <Text style={styles.beneficiaryName}>
                                        {beneficiary.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.historyWrapper}>
                        <Text style={styles.beneficiariesHeader}>Transaction History</Text>
                        <View style={styles.historyContainer}>
                            {transactions.map(transaction => (
                                <TransactionHistory
                                    key={transaction.id}
                                    transactionType={transaction?.transactionType}
                                    amount={transaction.amount}
                                    description={transaction.description}
                                    date={transaction.date}
                                />
                            ))}

                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
        height: '100%',
        backgroundColor: colors.primary,
        paddingTop: 24,
    },
    header: {
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerTextWrapper: {
        height: 42,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',  
    },
    headerLightText: {
        fontFamily: 'poppins-regular',
        fontSize: 14,
        color: colors.white,
    },
    headerBoldText: {
        fontFamily: 'poppins-medium',
        fontSize: 24,
        color: colors.white,
    },
    profileImageGradient: {
        width: 61,
        height: 61,
        borderRadius: 30.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageWrapper: {
        width: 59.5,
        height: 59.5,
        borderRadius: 29.75,
        backgroundColor: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profileImage: {
        width: 171.43,
        height: 103.57,
    },
    main: {
        width: '100%',
        height: '100%',
        padding: 24,
    },
    accountBalanceGradient: {
        width: '100%',
        height: 284,
        borderRadius: 31,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountBalanceCard: {
        width: windowWidth - 52,
        height: 280,
        borderRadius: 30,
        backgroundColor: colors.primary,
    },
    cardWrapper: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
        backgroundColor: colors.lightOverlay,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        paddingVertical: 22,
        paddingHorizontal: 15,
    },
    hideBalanceButton: {
        position: 'absolute',
        right: 15,
        top: 20,
    },
    balanceContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 116,
    },
    balanceDescription: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: colors.white,
        lineHeight: 18,
    },
    balanceTextWrapper: {
        height: 66,
    },
    blurView: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    balanceText: {
        fontFamily: 'poppins-semibold',
        fontSize: 44,
        lineHeight: 66,
        color: colors.white,
    },
    currencyButton: {
        marginTop: 8,
        height: 20,
        width: 50,
        borderRadius: 20,
        backgroundColor: colors.currencyButton,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currencyButtonText: {
        color: colors.white,
        fontFamily: 'poppins-medium',
        fontSize: 10,
    },
    quickLinksWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 96,
        borderTopWidth: 0.5,
        borderColor: colors.white,
        paddingTop: 20,
    },
    iconButtonWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        height: 76,
        width: 50,
    },


    quickButtonDescription: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: colors.white,
        lineHeight: 18,
    },
    bottomSheetScrollViewMain: {
        // paddingHorizontal: 24,
        // backgroundColor: 'red',
    },
    beneficiariesWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        paddingLeft: 24,
        marginBottom: 28,
    },
    beneficiariesList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 32,
        paddingRight: 24,
    },
    beneficiariesHeader: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        color: colors.black,
        lineHeight: 21,
        opacity: 0.5,
    },
    historyContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
    },
    beneficiaryWrapper: {
        display: 'flex',
        flexDirection: 'cloumn',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        height: 82,
        width: 56,
    },
    beneficiaryName: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: colors.black,
        lineHeight: 18,
        textAlign: 'center',
    },

    historyWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        paddingHorizontal: 24,
        flex: 1,
        height: '100%',
        minHeight: windowHeight - 582,
        // backgroundColor: 'red',
        // marginBottom: 28,
    },
    history: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        height: 40,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        opacity: 1,
    },
    transactionCategory: {
        height: 37,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        alignItems: 'flex-start',
    },
    transactionType: {
        fontFamily: 'poppins-medium',
        fontSize: 12,
        lineHeight: 18,
        color: colors.black,
    },
    transactionDate: {
        fontFamily: 'poppins-regular',
        fontSize: 10,
        lineHeight: 15,
        color: colors.black,
        opacity: 0.5,
    },
    descriptionWrapper: {
        height: 37,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
        alignItems: 'flex-end',
    },
})