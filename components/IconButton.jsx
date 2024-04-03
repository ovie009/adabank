import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { colors } from '../style/colors';

const IconButton = ({onPress, icon}) => {
    return (
        <TouchableOpacity 
            style={styles.iconButton}
            onPress={onPress}
        >
            {icon}
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    // icon buttons
    iconButton: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellow,
    },
})