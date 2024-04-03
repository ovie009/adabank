// react native component
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../style/colors";

const ModalHandle = () => {
    // render ModalHandle component
    return (
        <View style={styles.modalHandleWrapper}>
            <TouchableOpacity style={styles.modalHandle}></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    modalHandleWrapper: {
        height: 28,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
    },
    modalHandle: {
        width: 20,
        height: 2,
        backgroundColor: colors.black,
        opacity: 0.1,

    },
})
 
export default ModalHandle;