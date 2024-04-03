// react native component
import { StatusBar } from 'react-native'
import React from 'react'
// app context
import { useGlobals } from "../context/AppContext";
// import colors
import { colors } from '../style/colors';

const Taskbar = () => {
    // get current stact
    const { currentStack } = useGlobals();

    // list of stacks to have the Statusbar to be the primary color
    const primaryStacks = [
        "Home",
        "Menu",
        "Graph",
        "Card",
        "Profile",
        "Settings",
        "CategoryGraph",
        "Scan",
        "Transfer",
    ] 

    return (
        <StatusBar 
            style="dark" 
            backgroundColor={primaryStacks.includes(currentStack) ? colors.primary : colors.bacground}
        />
    )
}

export default Taskbar