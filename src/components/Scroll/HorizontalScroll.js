import React from 'react'
import { View, Text, ScrollView, Dimensions, Alert } from 'react-native'

const HorizontalScroll = () => {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} onMomentumScrollBegin={() => Alert.alert('Begin Scrolling')}
        onMomentumScrollEnd={() => Alert.alert('End Scrolling')} onScroll={(e) => Alert.alert('Scrolled')}>
            <View style={{ width: screenWidth, backgroundColor: '#5f9ea0', flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center' }}>
                    Screen 1
                </Text>
            </View>
            <View style={{ width: screenWidth, backgroundColor: 'tomato', flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center' }}>
                    Screen 2
                </Text>
            </View>
            <View style={{ width: screenWidth, backgroundColor: '#663399', flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center' }}>
                    Screen 3
                </Text>
            </View>
        </ScrollView>
    )
}

export default HorizontalScroll
