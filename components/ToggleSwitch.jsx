import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useRef, useState } from 'react';
// colors
import { colors } from '../style/colors';

const ToggleSwitch = ({value, onValueChange}) => {

    // translate value
    const translate = useRef(new Animated.Value(value ? 0 : -20)).current;

    // handle animate toggle switch
    const handleAnimateOnClick = () => {
        const newValue = !value;
        // animate scroll then return onValueChange function
        Animated.timing(translate, {
            toValue: newValue ? 0 : -20,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            onValueChange && onValueChange(newValue);
        });
    }

    return (
        <TouchableOpacity
            style={[
                styles.toggleSwitch,
                !value && {backgroundColor: colors.primaryDisabled}
            ]}
            onPress={handleAnimateOnClick}
            activeOpacity={1}
        >
            <Animated.View
                style={[
                    styles.toggleSwitchCircle,
                    {transform: [{translateX: translate}]}
                ]}
            />
        </TouchableOpacity>
    )
}

export default ToggleSwitch

const styles = StyleSheet.create({
    toggleSwitch: {
        width: 50,
        height: 30,
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: colors.primaryAlt,
        borderRadius: 100,
    },  
    toggleSwitchCircle: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: colors.white,
    },
})
