import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
// icons
import CloseIcon from '../assets/svg/CloseIcon';
import ArrowDownLargePrimaryIcon from '../assets/svg/ArrowDownLargePrimaryIcon';
// colors
import { colors } from '../style/colors';
// utilities
import { windowWidth } from '../utils/dimension';

const NotificationListItem = ({index, onPress, onPressClose, mainText, subText, icon}) => {
    return (
        <TouchableOpacity
            style={[styles.transaction, index === 0 && {borderTopWidth: 0.5}]}
            onPress={onPress}
        >
            <View style={styles.transactionContent}>
                {/* icon */}
                {icon}
                {/* transaction details */}
                <View style={styles.transactionTextWrapper}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.transactionDescription}>
                        {mainText}
                    </Text>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.transactionDate}>
                        {subText}
                    </Text>
                </View>
            </View>
            {/* remove transaction button */}
            <TouchableOpacity
                onPress={onPressClose || (() => {})}
                activeOpacity={onPressClose ? undefined : 1}
            >
                {onPressClose ? <CloseIcon /> : <ArrowDownLargePrimaryIcon /> }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default NotificationListItem

const styles = StyleSheet.create({
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
		borderColor: colors.lisetSeperator,
	},
	transactionContent: {
		width: windowWidth - 132,
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 12,
	},
	transactionTextWrapper: {
		width: windowWidth - 168,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		gap: 4,
	},
	transactionDescription: {
		fontFamily: 'poppins-regular',
		fontSize: 12,
		lineHeight: 18,
		color: colors.blackOut,
        width: '100%',
	},
	transactionDate: {
        fontFamily: 'poppins-regular',
		fontSize: 10,
		lineHeight: 15,
		color: colors.subtext,
        width: '100%',
	},
})