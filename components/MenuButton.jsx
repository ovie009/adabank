import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
// component
import IconButton from './IconButton';
// icon
import ArrowDownLargeIcon from '../assets/svg/ArrowDownLargeIcon';
// colors
import { colors } from '../style/colors';

const MenuButton = ({onPress, icon, title}) => {
    return (
    <TouchableOpacity
        style={styles.menuButton}
        onPress={onPress}
    >
        <View style={styles.buttonTextWrapper}>
            <IconButton
                icon={icon}
            />
            <Text style={styles.menuButtonText}>
                {title}
            </Text>
        </View>
        <ArrowDownLargeIcon />
    </TouchableOpacity>
  )
}

export default MenuButton

const styles = StyleSheet.create({
    menuButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
    },
    buttonTextWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
    },
    menuButtonText: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'poppins-regular',
        textTransform: 'capitalize',
    },
})