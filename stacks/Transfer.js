import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
// colors
import { colors } from '../style/colors';
// window height
import { windowHeight, windowWidth } from '../utils/dimension';
// components
import Header from '../components/Header';
import Avatar from '../components/Avatar';
// icons
import SearchIcon from '../assets/svg/SearchIcon';
import AddIcon from '../assets/svg/AddIcon';
// shadow component
import { Shadow } from 'react-native-shadow-2';

const Transfer = ({navigation}) => {

    // search query
    const [searchQuery, setSearchQuery] = useState('');

    // all contacts
    const contactList = [
        {
            name: 'Ojaman',
            image_uri: require('../assets/profile/ojaman.png'),
            account_number: '1234567890',
        },
        {
            name: 'Jane',
            image_uri: require('../assets/profile/jane.png'),
            account_number: '1234567890',
        },
        {
            name: 'Lucia',
            image_uri: require('../assets/profile/lucia.png'),
            account_number: '1234567890',
        },
        {
            name: 'Jumin',
            image_uri: require('../assets/profile/jumin.png'),
            account_number: '1234567890',
        },
        {
            name: 'Ray',
            image_uri: require('../assets/profile/ray.jpg'),
            account_number: '1234567890',
        },
        {
            name: 'Jimati',
            image_uri: require('../assets/profile/jimati.png'),
            account_number: '1234567890',
        },
        {
            name: 'Ovie',
            image_uri: require('../assets/profile/ovie.jpg'),
            account_number: '1234567890',
        },
    ]

    // contacts list
    const [contacts, setContacts] = useState(contactList);

    // search contacts
    useEffect(() => {
        setContacts(() => {
            if (!searchQuery) return contactList;

            return contactList.filter((contact) => {
                return contact.name.toLowerCase().includes(searchQuery.toLowerCase())
            })
        })
    }, [searchQuery])

    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal: 24}}>
                <Header
                    mode="light"
                    title={'Transfer'}
                />
            </View>
            {/* mini navigation */}
            <View style={styles.miniNavigation}>
                <TouchableOpacity
                    style={styles.navigationButtons}
                    disabled={true}
                >
                    <View style={styles.outerRing}>
                        <View style={styles.innerRing} />
                    </View>
                    <Text style={styles.navigationText}>Bank Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navigationButtons, styles.inactive]}
                    onPress={() => navigation.navigate('Scan')}
                >
                    <View style={styles.innerRing} />
                    <Text style={styles.navigationText}>Scan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.navigationButtons, styles.inactive]}
                    onPress={() => navigation.navigate('Nearby')}
                >
                    <View style={styles.innerRing} />
                    <Text style={styles.navigationText}>Nearby</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contactsWrapper}>
                <View style={{padding: 24}}>
                    <View style={styles.searchBar}>
                        <SearchIcon />
                        <TextInput
                            placeholder='Search Contact'
                            placeholderTextColor={colors.subtext}
                            style={styles.serachBarInput}
                            onChangeText={setSearchQuery}
                            textAlignVertical='bottom'
                        />
                    </View>
                </View>
                <ScrollView
                    style={styles.mainScrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.recentContactsHeading}>
                        Recents Contacts
                    </Text>
                    <ScrollView
                        style={styles.listHeader}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.recentContactsList}>
                            {contacts.map(contact => (
                                <TouchableOpacity key={contact.name} style={styles.recentContact}>
                                    <Avatar 
                                        uri={contact.image_uri}
                                        diameter={50}
                                    />
                                    <View style={styles.accountDetails}>
                                        <Text style={styles.accountName}>{contact.name}</Text>
                                        <Text style={styles.accountNumber}>Bank - {contact.account_number}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={styles.allContactsContainer}>
                        <View style={styles.horizontalRule}/>
                        <Text style={styles.allContactsHeading}>
                            All Contacts
                        </Text>
                        <View style={styles.allContactsList}>
                            {contacts.map(contact => (
                                <TouchableOpacity key={contact.name} style={styles.contactListItemWrapper}>
                                    <Avatar
                                        uri={contact.image_uri}
                                        diameter={50}
                                    />
                                    <View style={styles.contactAccountDetails}>
                                        <Text style={styles.contactAccountName}>{contact.name}</Text>
                                        <Text style={styles.contactAccountNumber}>Bank - {contact.account_number}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Shadow 
                style={styles.shadow}
                distance={30}
                offset={[0, 4]}
                startColor='#07041A07'
            >
                <View style={styles.addContactButton}>
                    <TouchableOpacity style={styles.addButton}>
                        <AddIcon />
                    </TouchableOpacity>
                    <Text style={styles.addContactText}>Add Contacts</Text>
                </View>
            </Shadow>
        </View>
    )
}

export default Transfer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: windowHeight,
        backgroundColor: colors.primary,
        // padding: 24,
    },
    miniNavigation: {
        height: 54,
        marginTop: 48,
        marginBottom: 45,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 52,
    },
    navigationButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    inactive: {
        opacity: 0.5,
    },
    outerRing: {
        width: 32,
        height: 32,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
        borderWidth: 1,
        borderColor: colors.white,
    },
    innerRing: {
        width: 21,
        height: 21,
        borderRadius: 10.5,
        backgroundColor: colors.white,
    },
    navigationText: {
        fontFamily: 'poppins-medium',
        fontSize: 12,
        lineHeight: 18,
        color: colors.white,
        textAlign: 'center',  
    },
    contactsWrapper: {
        width: '100%',
        backgroundColor: colors.background,
        flex: 1,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        position: 'relative',
        // paddingVertical: 24,
    },
    searchBar: {
        marginTop: 4,
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
    mainScrollView: {
        minHeight: windowHeight - 315,
        width: '100%',
    },
    recentContactsHeading: {
        color: colors.black,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'poppins-medium',
        paddingHorizontal: 24,
        opacity: 0.5,
    },
    recentContactsList: {
        marginTop: 32,
        paddingHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
    },
    recentContact: {
        width: 114,
        height: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
    },
    accountDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    accountName: {
        color: colors.black,
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'poppins-medium',
    },
    accountNumber: {
        color: colors.black,
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'poppins-regular',
        opacity: 0.5,
    },
    allContactsContainer: {
        width: '100%',
        // backgroundColor: 'red',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 102,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    horizontalRule: {
        width: windowWidth - 48,
        height: 0.5,
        backgroundColor: colors.black,
        opacity: 0.1,
    },
    allContactsList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 32,
        // paddingEnd: 24,
    },
    contactListItemWrapper: {
        width: "100%",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 24,
    },
    contactAccountName: {
        color: colors.black,
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'poppins-medium',
    },
    contactAccountNumber: {
        color: colors.black,
        fontSize: 12,
        lineHeight: 12,
        fontFamily: 'poppins-regular',
        opacity: 0.5,
    },
    allContactsHeading: {
        color: colors.black,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'poppins-medium',
        opacity: 0.5,
        marginVertical: 32,
    },
    shadow: {
        // zIndex: 2,
        height: 70,
        // position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addContactButton: {
        height: "100%",
        width: '100%',
        backgroundColor: colors.background,
        paddingHorizontal: 24,
        paddingVertical: 15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 24,
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addContactText: {
        color: colors.black,
        opacity: 0.5,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'poppins-regular',
    }
})