import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons'
import Products from './Products'

const HomePage = () => {
  return (
    <View>
      <View style={{ width: '100%', minHeight: 100, backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#f6e455' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f6e455', borderRadius: 50 }}>
              <FontAwesome5 name="truck-pickup" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 10 }}>Cars</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#ef8f82' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ef8f82', borderRadius: 50 }}>
              <MaterialCommunityIcons name="monitor" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 10 }}>Jobs</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#8192a0' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#8192a0', borderRadius: 50 }}>
              <MaterialCommunityIcons name="wrench" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 10 }}>Tools</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#6be3d5' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6be3d5', borderRadius: 50 }}>
              <Ionicons name="home-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 10 }}>Houses</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, borderRadius: 50, backgroundColor: '#6bdb9e' }}>
            <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6bdb9e', borderRadius: 50 }}>
              <MaterialCommunityIcons name="monitor" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 10 }}>Electronics</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '3%', zIndex: 9999 }}>
        <TouchableOpacity style={{ width: 260, height: 50, backgroundColor: '#d9062e', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, borderRadius: 50, alignItems: 'center' }}>
          <Text style={{color: '#fff', fontSize: 22}}>Sell</Text>
          <Text>
            <Entypo name="camera" size={28} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
      <Products />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})