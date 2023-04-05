import React from "react";
import { Dimensions } from "react-native";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#D00000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1DAC4',
    }
})

function Main() {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Screen2')}
            />
        </View>
    )
}

export default Main;