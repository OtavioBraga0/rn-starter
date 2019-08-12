import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return(
        <View style={{marginBottom: 50}}>
            <Text>{color}</Text>
            <Button title={`More ${color}`} onPress={() => onIncrease()}/>
            <Button title={`Less ${color}`} onPress={() => onDecrease()}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter;