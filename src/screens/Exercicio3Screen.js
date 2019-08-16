import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const COUNT_INCREMENT = 15;

const reducer = (state, action) => {
    return {...state, count: state.count + action.payload}
}

const Exercicio3Screen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;


    return(
        <View>
            <Button title="Increase" onPress={() => dispatch({payload: COUNT_INCREMENT})}/>
            <Button title="Decrease" onPress={() => dispatch({payload: -1 * COUNT_INCREMENT})}/>
            <Text>Current Count: {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default Exercicio3Screen;