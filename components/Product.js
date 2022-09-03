import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons, Entypo  } from '@expo/vector-icons';

const Product = () => {

    const [Product, setProduct] = useState([])


    return (
        <View style={{paddingHorizontal: 15, backgroundColor: '#ffff', minHeight: '100%', position: 'relative'}}>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{ fontSize: 30, color: '#39393a' }}>GOLF PLUS 2005</Text>
                <Text style={{ borderWidth: 1, borderColor: '#3b7adb', color: '#3b7adb', width: 70, borderRadius: 15, textAlign: 'center', padding: 5 }}>12 000 €</Text>
            </View>
            <ScrollView decelerationRate={0} snapToInterval={250} snapToAlignment={'start'} horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 22, maxHeight: 251}}>
                <View style={{ width: '100%', flexDirection: 'row', height: '100%'}}>
                    <View style={{ minWidth: 199, height: 251, backgroundColor: '#ddd', marginRight: 22, borderRadius: 10 }}>
                        <Image style={{ borderRadius: 10 }} source={require('../assets/AppImages/car-o.png')}></Image>
                    </View>
                    <View style={{ minWidth: 199, height: 251, backgroundColor: '#ddd', marginRight: 22, borderRadius: 10 }}>
                        <Image style={{ borderRadius: 10 }} source={require('../assets/AppImages/car-s.png')}></Image>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                <Text style={{ borderWidth: 1, borderColor: '#50e3c2', color: '#898989', marginHorizontal: 5, minWidth: 70, borderRadius: 15, textAlign: 'center', padding: 5 }}>220 km</Text>
                <Text style={{ borderWidth: 1, borderColor: '#50e3c2', color: '#898989', marginHorizontal: 5, minWidth: 70, borderRadius: 15, textAlign: 'center', padding: 5 }}>Automatic</Text>
                <Text style={{ borderWidth: 1, borderColor: '#50e3c2', color: '#898989', marginHorizontal: 5, minWidth: 70, borderRadius: 15, textAlign: 'center', padding: 5 }}>Full option</Text>
            </View>
            <ScrollView style={{ maxHeight: '37%', marginVertical: 15}}>
                <View>
                    <Text style={{fontSize: 12, color: '#4d5a61', padding: 5}}>
                        Motorhome or Trailer that is the question for you. Here are some of the advantages and disadvantages of both, so you will be confident when purchasing an RV. When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth wheeler? The advantages and disadvantages of both are studied so that you can make your choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an achievement of a lifetime. It can be similar to sojourning with your residence as you search the various sites of our great land, America.

                        The two commonly known recreational vehicle classes are the motorized and towable. Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth wheel has the attraction of getting towed by a pickup or a car, thus giving the adaptability of possessing transportation for you when you are parked at your campsite.

                        A motorhome is a recreational vehicle that is motorized. It has three categories which can either be gas, diesel or Diesel Pushers which are the most costly ones. Converted vans that are large and self-sustaining represent the smaller types of motorhomes and then there are the ones that are built on the chassis of a truck.. The motorized motor home needs a tow car for your transportation after you set up in your campsite.

                        Rvs are styled to your specifications for the best appearance and luxuries you anticipate when possessing an rv. High standard artisanship, venues for entertainment, and keenness to small bits of information can be applied into an rv bearing in mind that each and every amenity comes with a price tag.

                        A travel trailer or fifth wheel is larger inside than a motorhome of the same size because of the driving area, i.e. a 40 foot trailer or fifth wheel has more livable space than a 40 foot motorhome. Towing a trailer with a car puts a lot of wear and tear on the automobile because they are usually not equipped for heavy duty towing.

                        The motor home is definitely more money because you are paying for the driving mechanism and chassis. Trailers and motorhomes can be equipped with the same options. So the question seems to be do I want to travel in a truck pulling a large fifth wheel or ride in a motorhome pulling a tow car. One thing is certain if you talk to a motorhome owner he will tell you that you should definitely purchase a motorhome and the same goes for a travel trailer or fifth wheel owner, he thinks the trailer is the only way to go.  No matter what you choose the experiences are out of this world.
                    </Text>
                </View>
            </ScrollView>
            <View style={{width: '100%', bottom: 0, zIndex: 99, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 25, width: '53%', flexDirection: 'row', justifyContent: 'space-between', height: 50, alignItems: 'center', backgroundColor: '#a42dfb', borderRadius: 35}}>
                    <Text style={{color: '#fff'}}>
                        Call Seller
                    </Text>
                    <Ionicons name="call" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 25, width: '37%', flexDirection: 'row', justifyContent: 'space-between', height: 50, alignItems: 'center', backgroundColor: '#a42dfb', borderRadius: 35}}>
                    <Text style={{color: '#fff'}}>
                        Chat
                    </Text>
                    <Entypo name="chat" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})