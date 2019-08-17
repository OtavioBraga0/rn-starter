import React from "react";
import { View, StyleSheet } from "react-native";

const Exercicio5Screen = () => {
    return(
        <View style={styles.viewPattern}>
            <View style={styles.viewOne} />
            <View style={styles.viewTwo} />
            <View style={styles.viewThree} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewPattern: {
        flexDirection: "row",
        justifyContent:"space-between"
    },
    viewOne: {
        height: 50,
        width: 50,
        backgroundColor: "red"
    },
    viewTwo: {
        height: 50,
        width: 50,
        marginTop: 50,
        backgroundColor: "green"
    },
    viewThree: {
        height: 50,
        width: 50,
        backgroundColor: "purple"
    }
});

export default Exercicio5Screen;