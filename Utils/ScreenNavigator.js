import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, PanResponder, Animated, ScrollView } from 'react-native';
import Main from '../Components/Main';
import Map from '../Components/Map';

const SCREEN_WIDTH = Dimensions.get('window').width;

function ScreenNavigator() {
    const [activeIndex, setActiveIndex] = useState(1);

    const SCREENS = [
        <Text style={styles.text}>First Screen</Text>,
        <Text style={styles.text}>Second Screen</Text>,
        <Text style={styles.text}>Third Screen</Text>
    ];

    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                {SCREENS.map((screen, index) => (
                    <View
                        key={index}
                        style={styles.screen}
                    >
                        {screen}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#38618C'
    },
    screen: {
        width: SCREEN_WIDTH,
        height: '100%',
        backgroundColor: '#38618C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1DAC4',
      }
});

export default ScreenNavigator;
