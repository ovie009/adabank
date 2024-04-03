import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../style/colors';
// shadow component
import { Shadow } from 'react-native-shadow-2';
// utility
import { windowWidth } from '../utils/dimension';
// icons
import HomeActiveIcon from '../assets/svg/HomeActiveIcon';
import GraphActiveIcon from '../assets/svg/GraphActiveIcon';
import CardActiveIcon from '../assets/svg/CardActiveIcon';
import NotificationActiveIcon from '../assets/svg/NotificationActiveIcon';
import HomeIcon from '../assets/svg/HomeIcon';
import ScanIcon from '../assets/svg/ScanIcon';
import GraphIcon from '../assets/svg/GraphIcon';
import CardIcon from '../assets/svg/CardIcon';
import NotificationIcon from '../assets/svg/NotificationIcon';
// react navigation
import { useNavigation, useIsFocused } from '@react-navigation/native';

const BottomNavigation = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [currentStack, setCurrentStack] = useState("");

    // function to listen for change in navigation, and update currentStack
    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            // update currentStack
            setCurrentStack(navigation.getCurrentRoute().name);
        });
        return unsubscribe;
    }, [isFocused, navigation]);

    // stacks to show navigation
    const visibleStacks = ["Home", "Graph", "Scan", "Card", "Notifications"];

    return visibleStacks.includes(currentStack) ? (
        <View style={styles.container}>
            <Shadow 
                style={{
                    width: windowWidth - 24,
                    height: 60,
                }}
                distance={30}
                offset={[0, 4]}
                startColor='#07041A17'
                // endColor='tranparent'
            >
                <View style={styles.wrapper}>
                    <View style={styles.navButtonGroup}>
                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => navigation.navigate('Home')}
                        >
                            {currentStack === "Home" ? <HomeActiveIcon /> : <HomeIcon />}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => navigation.navigate('Graph')}
                        >
                            {currentStack === "Graph" ? <GraphActiveIcon /> : <GraphIcon />}
                        </TouchableOpacity>
                    </View>
                    <Shadow 
                        style={{
                            width: 48,
                            height: 48,
                        }}
                        distance={30}
                        offset={[0, 12]}
                        startColor='#07041A17'
                        // endColor='tranparent'
                    >
                        <TouchableOpacity
                            style={styles.scanButton}
                            onPress={() => navigation.navigate('Scan')}
                        >
                            <ScanIcon />
                        </TouchableOpacity>
                    </Shadow>
                    <View style={styles.navButtonGroup}>
                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => navigation.navigate('Card')}
                        >
                            {currentStack === "Card" ? <CardActiveIcon /> : <CardIcon />}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.navButton}
                            onPress={() => navigation.navigate('Notifications')}
                        >
                            {currentStack === "Notifications" ? <NotificationActiveIcon /> : <NotificationIcon />}
                        </TouchableOpacity>
                    </View>
                </View>
            </Shadow>
        </View>
    ) : <></>
}

export default BottomNavigation

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 84,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        position:'absolute',
        bottom: 0,
        left: 0,
        padding: 12,
        zIndex: 100,
    },
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 36,
    },
    scanButton: {
        width: 48,
        height: 48,
        borderRadius: 20,
        backgroundColor: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // translate -16 px in y axis
        // transform: [{ translateY: -16 }],
        marginTop: -16,
    },
    navButtonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 88,
        height: 24,
    },
    navButton: {
        width: 24,
        height: 24,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: colors.primary,
    }
})