import React from 'react'
import { View, Text, ViewPagerAndroid, StyleSheet, Alert } from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
});

const ViewPagerExample = () => {
    return (
        <ViewPagerAndroid style={{ flex: 1 }} initialPage={0}
            onPageScroll={(e) => { console.log(`offset`) }}
            onPageScrollStateChanged={(e) => { console.log(`Scrolling state = ${e.nativeEvent.offset}`) }}>
            <View style={{ backgroundColor: 'lightseagreen' }}>
                <Text style={styles.textStyle}>Screen 1</Text>
            </View>
            <View style={{ backgroundColor: 'palevioletred' }}>
                <Text style={styles.textStyle}>Screen 2</Text>
            </View>
            <View style={{ backgroundColor: 'salmon' }}>
                <Text style={styles.textStyle}>Screen 3</Text>
            </View>
        </ViewPagerAndroid>
    )
}

export default ViewPagerExample
