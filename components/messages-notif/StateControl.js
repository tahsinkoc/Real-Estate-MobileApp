import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const StateControl = ({ status, setStatus }) => {

    const renderComponent = () => {
        if (status) {
            return (
                <View style={{ width: '100%', height: '100%', borderBottomWidth: 1, borderBottomColor: '#dddd', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setStatus(true)}>
                        <Text style={styles.active}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStatus(false)}>
                        <Text style={{color: '#bbbb'}}>Inbox</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={{ width: '100%', height: '100%', borderBottomWidth: 1, borderBottomColor: '#dddd', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setStatus(true)}>
                        <Text style={{color: '#bbbb'}}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStatus(false)}>
                        <Text style={styles.active}>Inbox</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return (
        <View style={{ width: '100%', height: '8%', borderBottomWidth: 1, borderBottomColor: '#dddd', justifyContent: 'space-around', alignItems: 'center'  }}>
            {renderComponent()}
        </View>
    )
}

export default StateControl

const styles = StyleSheet.create({
    active: {
        color: '#000',
    },
})