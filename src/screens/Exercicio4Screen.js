import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Exercicio4Screen = () => {
    const [password, setPassword] = useState("");

    return(
        <View>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {(password.length < 5) 
                ? <Text>Password must be longer than 5 characters</Text> 
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default Exercicio4Screen;