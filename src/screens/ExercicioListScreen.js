import React from "react";
import { StyleSheet, Button, View } from "react-native";

const ExercicioListScreen = ({navigation}) => {
    return(
        <View>
            <Button title="Exercicio 1 (Inicio)" onPress={() => navigation.navigate("Exercicio1")}/>
            <Button title="Exercicio 2 (ListView)" onPress={() => navigation.navigate("Exercicio2")}/>
            <Button title="Exercicio 3 (Reducer)" onPress={() => navigation.navigate("Exercicio3")}/>
            <Button title="Exercicio 4 (TextInput)" onPress={() => navigation.navigate("Exercicio4")}/>
            <Button title="Exercicio 5 (StyleView)" onPress={() => navigation.navigate("Exercicio5")}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ExercicioListScreen;