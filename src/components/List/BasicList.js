import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, Alert } from 'react-native';
import userList from './../../../data/user';
import Swipeout from 'react-native-swipeout';

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
})

const BasicList = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList data={userList} renderItem={({ item, index }) => {
                const swipeSettings = {
                    autoClose: true,
                    right: [
                        {
                            onPress: () => {
                                Alert.alert('Alert', 'Are you sure you want to delete ?', [
                                    { text: 'No', onPress: () => console.log('cancelled'), style: 'cancel' },
                                    {
                                        text: 'Yes', onPress: () => {
                                            userList.splice(index, 1);
                                        }
                                    }
                                ]);
                            },
                            text: 'Delete', type: 'delete'
                        }
                    ]
                }
                return (
                    <Swipeout {...swipeSettings}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: index % 2 == 0 ? 'mediumseagreen' : 'tomato' }}>
                                <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100, margin: 5 }} />
                                <View style={{ flex: 1, flexDirection: 'column', height: 100 }}>
                                    <Text style={styles.flatListItem}>Hi I'm dk, I'm web developr</Text>
                                    <Text style={styles.flatListItem}>Amazon is a most popular website for online shopping people </Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: 'white' }}>
                            </View>
                        </View>
                    </Swipeout>
                );
            }}>
            </FlatList>
        </View>
    )
}

export default BasicList
