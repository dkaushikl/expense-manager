import React from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  image: {
      marginTop:20,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
  },
  text: {
    height: 40,
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
},
});

const ScrollDemo = () => {
    return (
        <ScrollView keyboardDismissMode="on-drag" maximumZoomScale={3}  minimumZoomScale={1}>
            <Image style={styles.image} source={require('../../../images/rocket.png')} />
            <Text style={{ marginLeft: 10, marginTop: 20 }}>Enter firstname</Text>
            <Text style={{ color: '#a03b51' }}>Enter email</Text>
        </ScrollView>
    )
}


export default ScrollDemo;
