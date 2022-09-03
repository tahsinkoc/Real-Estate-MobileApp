import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const State = ({status, setStatus}) => {

  const renderComponent = () => {
      if (status) {
        return(
          <View style={{width: '100%', padding: 20}}>
            <Text style={{marginVertical: 15, color: '#bbbb'}}>New messages</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <Text style={{marginTop: 35, marginBottom: 15, color: '#bbbb'}}>Messages</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
              <View style={{width: 60, height: 60, backgroundColor: '#ddd', borderRadius: 50}}></View>
              <View style={{marginHorizontal: 15}}>
                <Text>Elijah Jackson</Text>
                <Text style={{color: '#bbbb'}}>Advertising Outdoors</Text>
              </View>
            </View>
          </View>
        )
      } else {
        return(
          <Text>{status.toString()}</Text>
        )
      }
  }

  return (
    <ScrollView>
      {renderComponent()}
    </ScrollView>
  )
}

export default State

const styles = StyleSheet.create({})