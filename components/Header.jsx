import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// use navigation
import { useNavigation } from '@react-navigation/native';
// icons
import GoBackLightIcon from '../assets/svg/GoBackLightIcon';
import GoBackDarkIcon from '../assets/svg/GoBackDarkIcon';
// colors
import { colors } from '../style/colors';

const Header = ({mode, title}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.goBackButton}
                onPress={() => navigation.goBack()}
            >   
                {mode === 'dark' ? <GoBackDarkIcon /> : <GoBackLightIcon />}
            </TouchableOpacity>
            <Text style={[styles.headerText, {color: mode === 'dark' ? colors.black : colors.white}]}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        position: 'relative',
    },
    headerText: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        lineHeight: 21,
        color: colors.white,
    },
    goBackButton: {
        position: 'absolute',
        left: 0,
    }
})