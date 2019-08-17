import React from "react";
import { StyleSheet, Button, View } from "react-native";

const ExercicioListScreen = ({navigation}) => {
    return(
        <View>
            <Button title="Exercicio 1" onPress={() => navigation.navigate("Exercicio1")}/>
            <Button title="Exercicio 2" onPress={() => navigation.navigate("Exercicio2")}/>
            <Button title="Exercicio 3" onPress={() => navigation.navigate("Exercicio3")}/>
            <Button title="Exercicio 4" onPress={() => navigation.navigate("Exercicio4")}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ExercicioListScreen;