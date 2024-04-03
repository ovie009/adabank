import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
// component
import { colors } from '../style/colors';
// component
import Header from '../components/Header';

const TopUp = () => {
    return (
        <ScrollView style={styles.container}>
            <Header mode="dark" title="Top-Up Wallet" />
        </ScrollView>
    )
}

export default TopUp

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
        height: '100%',
        backgroundColor: colors.bacground,
        padding: 24,
    }
})