import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Image } from 'expo-image';

const Avatar = ({uri, diameter, conatinerStyle, borderRadius}) => {
  return (
    <View
        style={[
            styles.avatarWrapper,
            diameter && {height: diameter, width: diameter},
            conatinerStyle,
        ]}
    >
        <Image
            source={uri}
            style={[
                styles.avatar,
                diameter && {height: diameter, width: diameter},
                borderRadius && {borderRadius}
            ]}
        />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    avatarWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        height: 56,
        width: 56,
    },
    avatar: {
        height: 56,
        width: 56,
        borderRadius: 15,
    }
})