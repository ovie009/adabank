import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// shadow component
import { Shadow } from 'react-native-shadow-2';
import { colors } from '../style/colors';
// icons
import CameraIcon from '../assets/svg/CameraIcon';
import GameIcon from '../assets/svg/GameIcon';
import PlayIcon from '../assets/svg/PlayIcon';
import FoodIcon from '../assets/svg/FoodIcon';
import CartIcon from '../assets/svg/CartIcon';
import LocationIcon from '../assets/svg/LocationIcon';

const TransactionHistory = ({transactionType, amount, description, date}) => {
    return (
        <TouchableOpacity
            style={styles.history}
        >
            <View style={styles.categoryWrapper}>
                <Shadow 
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                    }}
                    containerStyle={{
                        // opacity: 0.08,
                    }}
                    distance={30}
                    offset={[0, 7]}
                    startColor='#05051A09'
                    // endColor='tranparent'
                >
                    <View style={styles.iconWrapper}>
                        {transactionType === "Equipment" && <CameraIcon />}
                        {transactionType === "Entertainment" && <GameIcon />}
                        {transactionType === "Streaming" && <PlayIcon />}
                        {transactionType === "Food" && <FoodIcon />}
                        {transactionType === "Shopping" && <CartIcon />}
                        {transactionType === "Travel" && <LocationIcon />}
                    </View>
                </Shadow>

                <View style={styles.transactionCategory}>
                    <Text style={styles.transactionType}>
                        {transactionType}
                    </Text>
                    <Text style={styles.transactionDate}>
                        {date}
                    </Text>
                </View>
            </View>

            <View style={styles.descriptionWrapper}>
                <Text 
                    style={[
                        styles.transactionType,
                        description === undefined && {
                            fontSize: 14,
                            lineHeight: 21,
                        }
                    ]}
                >
                    ${amount}
                </Text>
                <Text style={styles.transactionDate}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TransactionHistory

const styles = StyleSheet.create({
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
        // fontFamily: 'poppins-medium',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: colors.black,
        textTransform: 'capitalize',
    },
    transactionDate: {
        // fontFamily: 'poppins-regular',
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