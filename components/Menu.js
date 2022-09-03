import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';

const Menu = ({navigation: { goBack }}) => {
    return (
        <View style={{ paddingTop: 25 }}>
            <View style={{ width: '100%', height: '92%', backgroundColor: '#ddd', position: 'relative' }}>
                <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,.6)', zIndex: 99 }}>
                    <View style={{ width: '100%', height: '38%', backgroundColor: 'rgba(138,138,138, .5)', zIndex: 100 }}>
                        <TouchableOpacity onPress={() => goBack()} style={{ right: 15, top: 15, position: 'absolute' }}>
                            <Feather name="x" size={30} color="#ffff" />
                        </TouchableOpacity>
                        <View style={{ top: 50, paddingHorizontal: 43 }}>
                            <View style={{ width: 65, height: 65, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center', borderRadius: 50, overflow: 'hidden', position: 'relative' }}>
                                <Ionicons style={{ position: 'absolute', bottom: -10, left: 6 }} name="person-sharp" size={55} color="#b8b8b8" />
                            </View>
                            <Text style={{ fontSize: 26, color: '#fff', marginTop: 17 }}>Log in now</Text>
                            <Text style={{ fontSize: 18, color: '#fff', marginTop: 5 }}>You are not logged in</Text>
                        </View>
                    </View>
                    <View style={{padding: 40, height: '62%'}}>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 26, marginVertical: 15}}>Kryefaqe</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 26, marginVertical: 15}}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 26, marginVertical: 15}}>Categories</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 26, marginVertical: 15}}>Invite Facebook Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ color: '#fff', fontSize: 26, marginVertical: 15}}>Help</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{ width: '100%', height: '100%' }} source={require('../assets/AppImages/bg.png')}></Image>
            </View>
            <View style={{ width: '100%', height: '8%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 24, color: '#e2002f' }}>LOGO</Text>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})