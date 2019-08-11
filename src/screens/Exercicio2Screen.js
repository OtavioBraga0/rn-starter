import React  from "react";
import { StyleSheet, FlatList, Text } from "react-native";

const Exercicio2Screen = () => {
    const friends = [
        {name: "Friend 1", age: 20},
        {name: "Friend 2", age: 45},
        {name: "Friend 3", age: 32},
        {name: "Friend 4", age: 27},
        {name: "Friend 5", age: 53},
        {name: "Friend 7", age: 30},
    ];

    return (
        <FlatList
            keyExtractor={(friends) => friends.name}
            data={friends}
            renderItem={({item}) => {
                return (
                    <Text>{item.name} - Age {item.age}</Text>
                );
            }}
        />
    )
}

const styles = StyleSheet.create({});

export default Exercicio2Screen;