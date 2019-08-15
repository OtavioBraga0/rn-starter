import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (  
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        style={styles.button}
        title="Go to Exercises List"
        onPress={() => navigation.navigate("ExercicioList")}
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Components")} 
        title="Go to Components Demo"
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        style={styles.button}
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        style={styles.button}
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        style={styles.button}
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        style={styles.button}
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginTop: 20,
  }
});

export default HomeScreen;