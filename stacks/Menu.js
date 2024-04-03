import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';
import { colors } from '../style/colors';
// components
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
// icons
import SearchIcon from '../assets/svg/SearchIcon';
import TransferIcon from '../assets/svg/TransferIcon';
import BillIcon from '../assets/svg/BillIcon';
import TopUpIcon from '../assets/svg/TopUpIcon';
import CodeQrIcon from '../assets/svg/CodeQrIcon';
import HistoryIcon from '../assets/svg/HistoryIcon';
import UserIcon from '../assets/svg/UserIcon';
// shadow component
import { Shadow } from 'react-native-shadow-2';

const Menu = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');

    // all menus
    const menus = [
        {
            title: 'Send Money',
            icon: <TransferIcon />,
            onPress: () =>  navigation.navigate('Transfer'),
            category: 'shortcut',
        },
        {
            title: 'Top-Up Wallet',
            icon: <TopUpIcon />,
            onPress: () =>  navigation.navigate('TopUp'),
            category: 'shortcut',
        },
        {
            title: 'Bill Payment',
            icon: <BillIcon />,
            onPress: () =>  navigation.navigate('Bill'),
            category: 'shortcut',
        },
        {
            title: 'Code Qr',
            icon: <CodeQrIcon />,
            onPress: () =>  navigation.navigate('Scan'),
            category: 'shortcut',
        },
        {
            title: 'History Transactions',
            icon: <HistoryIcon />,
            onPress: () =>  navigation.navigate('History'),
            category: 'others',
        },
        {
            title: 'Request Payment',
            icon: <UserIcon />,
            onPress: () =>  navigation.navigate('RequestPayment'),
            category: 'others',
        },
    ]

    // shortcuts
    const [shortcuts, setShortcuts] = useState(() => {
        return menus.filter(menu => menu.category === 'shortcut');
    });
    
    // other menu
    const [otherMenu, setOtherMenu] = useState(() => {
        return menus.filter(menu => menu.category === 'others');
    });

    // handle searxch query
    useEffect(() => {
        // set shortcuts
        setShortcuts(() => {
            if (!searchQuery) return menus.filter(menu => menu.category === 'shortcut');
            return menus
                .filter(menu => menu.category === 'shortcut')
                .filter(menu => menu.title.toLowerCase().includes(searchQuery.toLowerCase()));
        })

        // set other menu
        setOtherMenu(() => {
            if (!searchQuery) return menus.filter(menu => menu.category === 'others');
            return menus
                .filter(menu => menu.category === 'others')
                .filter(menu => menu.title.toLowerCase().includes(searchQuery.toLowerCase()));
        })

    }, [searchQuery]);


    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={{paddingHorizontal: 24}}>
                <Header
                    title={'Menu'}
                    mode={'light'}
                />
            </View>
            <Shadow 
                style={styles.shadow}
                distance={30}
                offset={[0, 10]}
                startColor='#05041514'
                // endColor='tranparent'
            >
                <View style={styles.searchBar}>
                    <SearchIcon />
                    <TextInput
                        placeholder='Search Menu'
                        placeholderTextColor={colors.subtext}
                        style={styles.serachBarInput}
                        onChangeText={setSearchQuery}
                        textAlignVertical='bottom'
                    />
                </View>
            </Shadow>
            <View style={{paddingHorizontal: 24}}>
                {/* shortcut menu links button group */}
                {shortcuts.length >= 1 && (
                    <View style={styles.buttonGroup}>
                        <Text style={styles.buttonGroupHeading}>
                            Shortcuts
                        </Text>
                        <View style={styles.buttonList}>
                            {shortcuts.map(shortcut => (
                                <MenuButton
                                    key={shortcut.title}
                                    icon={shortcut.icon}
                                    title={shortcut.title}
                                    onPress={shortcut.onPress}
                                />
                            ))}
                        </View>
                    </View>
                )}
                {/* other menu links button group */}
                {otherMenu.length >= 1 && (
                    <View style={styles.buttonGroup}>
                        <Text style={styles.buttonGroupHeading}>
                            Other Menu
                        </Text>
                        <View style={styles.buttonList}>
                            {otherMenu.map(menu => (
                                <MenuButton
                                    key={menu.title}
                                    icon={menu.icon}
                                    title={menu.title}
                                    onPress={menu.onPress}
                                />
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: '100%',
        height: '100%',
        backgroundColor: colors.primary,
        paddingVertical: 24,
    },
    shadow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24,
    },
    searchBar: {
        marginTop: 36,
        marginBottom: 48,
        backgroundColor: colors.white,
        borderRadius: 15,
        width: '100%',
        height: 52,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 14,
        gap: 20,
    },
    serachBarInput: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: colors.black,
        flex: 1,
    },
    buttonGroup: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 28,
        marginBottom: 72,
    },
    buttonGroupHeading: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'poppins-medium',
    },
    buttonList: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 32,
    },
    
})