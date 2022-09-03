import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StateControl from './StateControl'
import State from './State'

const MNLayout = () => {

    const [whichShow, setWhichShow] = useState(true)

    return (
        <View style={{backgroundColor: '#ffff', height: '100%'}}>
            <StateControl setStatus={setWhichShow} status={whichShow}/>
            <State setStatus={setWhichShow} status={whichShow}/>
        </View>
    )
}

export default MNLayout

const styles = StyleSheet.create({})