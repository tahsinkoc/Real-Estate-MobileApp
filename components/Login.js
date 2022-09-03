import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={{ width: '100%', height: '100%', alignItems: 'center', paddingTop: 25, justifyContent: 'center' }}>
            <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 49, color: '#e2002f' }}>LOGO</Text>
            </View>
            <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>Estate App</Text>
                <View style={{ width: 22, backgroundColor: '#f25c62', height: 2, marginVertical: 13 }}></View>
                <Text style={{ width: 200, textAlign: 'center', marginVertical: 3, color: '#bbbbbb', fontSize: 18 }}>
                    Sel your stuff with us in just 3 steps!
                </Text>
            </View>
            <View style={{ height: '40%', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <View >
                    <TouchableOpacity style={{ marginVertical: 8, width: 327, justifyContent: 'center', alignItems: 'center', backgroundColor: '#547bbf', padding: 15, borderRadius: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 14 }}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginVertical: 8, width: 327, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f57077', padding: 15, borderRadius: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 14 }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#adadad' }}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: '#adadad' }}>Forgot password ?</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', width: 327 }}>By Signing up or Login in you agree with our Terms and Conditions</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})