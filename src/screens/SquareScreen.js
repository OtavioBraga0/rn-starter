import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };            
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            break;
    }
};

const SquareScreen = () => {
    const [state, dispatch] =  useReducer(reducer, { red: 0, green: 0, blue: 0 })
    
    return (
        <View>
            <ColorCounter
                onIncrease={() =>}
                onDecrease={() =>}
                color="Red"
            />
            <ColorCounter
                onIncrease={() =>}
                onDecrease={() =>}
                color="Green"
            />
            <ColorCounter
                onIncrease={() =>}
                onDecrease={() =>}
                color="Blue"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SquareScreen;