import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { useState } from 'react'


const Products = () => {

    const [Products, setProducts] = useState([
        {
            id: 1,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 2,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 3,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 4,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 5,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 6,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 7,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 8,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 9,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 10,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        },
        {
            id: 11,
            img: require('../assets/AppImages/carImage.png'),
            price: 1233,
            prouctName: 'Volkswagen Polo'
        }
    ])

    const renderProducts = () => {
        return (
            Products.map((item) => {
                return (
                    <View key={item.id} style={{ width: '48%', borderRadius: 10, height: 160, flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', marginVertical: 10 }}>
                        <View style={{ width: '100%', height: 127, borderRadius: 10 }}>
                            <Image style={{ width: '100%', borderRadius: 10, height: '100%' }} source={item.img}></Image>
                        </View>
                        <View style={{ height: 33, padding: 4, borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                            <Text>{item.prouctName}</Text>
                            <Text>{item.price + ' €'}</Text>
                        </View>
                    </View>
                )
            })
        )
    }

    return (
        <ScrollView style={{ width: '100%', height: '87%', backgroundColor: '#fff', padding: 10 }}>
            <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
                {/* <View style={{width: '48%', borderRadius: 10, height: 160, flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', marginVertical: 10}}>
                    <View style={{width: '100%', height: 127, borderRadius: 10}}>
                        <Image style={{width: '100%', borderRadius: 10, height: '100%'}} source={require('../assets/AppImages/carImage.png')}></Image>
                    </View>
                    <View style={{height: 33, padding: 4, borderRadius: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
                        <Text>Volkswagen Polo</Text>
                        <Text>3000TL</Text>
                    </View>
                </View> */}
                {renderProducts()}
            </View>
        </ScrollView>
    )
}

export default Products

const styles = StyleSheet.create({})