import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Exercicio1Screen = () => {
    const name = "Otávio"

    return (
        <View>
            <Text style={styles.title}>Getting started with react native!</Text>
            <Text style={styles.subtitle}>My name is {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
    },
    subtitle: {
        fontSize: 20,
    }
})

export default Exercicio1Screen;