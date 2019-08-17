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
        backgroundColor: "rgb(255,0,0)"
    },
    viewTwo: {
        height: 50,
        width: 50,
        marginTop: 50,
        backgroundColor: "rgb(0,255,0)"
    },
    viewThree: {
        height: 50,
        width: 50,
        backgroundColor: "rgb(0,0,255)"
    }
});

export default Exercicio5Screen;