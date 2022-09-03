import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Octicons, FontAwesome, EvilIcons } from '@expo/vector-icons';

const HompageHeader = ({navigation}) => {
    return (
        <View style={{ justifyContent: 'space-around',padding: 4, paddingTop: 25, minHeight: 75, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{ backgroundColor: '#fff', width: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    <Octicons name="three-bars" size={24} color="black" />
                </Text>
            </TouchableOpacity>
            <View style={{display: 'flex', flexDirection: 'row', width: 250, justifyContent: 'space-between'}}>
                <TouchableOpacity style={{ backgroundColor: '#fff', width: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <EvilIcons name="search" size={24} color="black" />
                </TouchableOpacity>
                <TextInput style={{width: '80%'}} placeholder='Search...'></TextInput>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={{ backgroundColor: '#fff', width: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    <FontAwesome name="bell-o" size={24} color="black" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HompageHeader

const styles = StyleSheet.create({})
