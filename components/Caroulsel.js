import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const Caroulsel = () => {
    const city =[ {
        src: require('../assets/brasil.jpg'),
        id: 'Brasil',
        name: 'Rio De janeiro',
      },
      {
        src: require('../assets/dubai.jpg'),
        id: 'Dubai',
        name: 'Emirates Arab United'
      },
      {
        src: require('../assets/españa.jpg'),
        id: 'España',
        name: 'Mayorca'
      },
      {
        src: require('../assets/china.jpg'),
        id: 'china',
        name: 'Shanhaiguan',
      },
      
       {
        src: require('../assets/londres.jpg'),
        id: 'United Kingdom',
        name: 'London',
      },
      {
        src: require('../assets/rusia.jpg'),
        id: 'Rusia',
        name: 'Moscow'
      },
      {
        src: require('../assets/italia.jpg'),
        id: 'Italia',
        name: 'Rome'
      },
      {
        src: require('../assets/venezuela.jpg'),
        id: 'venezuela',
        name: 'Bolivar',
      },
       {
        src: require('../assets/japon.jpg'),
        id: 'Japon',
        name: 'Tokio',
      },
      {
        src: require('../assets/usa.jpg'),
        id: 'Usa',
        name: 'Arizona'
      },
      {
        src: require('../assets/egipto.jpg'),
        id: 'Egyp',
        name: 'Cairo'
      },
      {
        src: require('../assets/francia.jpg'),
        id: 'France',
        name: 'Paris',
      },
      ]

      const renderItem = ({ item }) => {
        return (
            < View key={item.id} style={styles.slide} >
                <ImageBackground source={ item.src } style={styles.image} imageStyle={{borderRadius:15}} >
                    <Text style={styles.cityName}>{item.name}</Text>
                </ImageBackground>
            </View >
        )
    }

    return(
        <View style={styles.containerCarrusel}>
        <Text style={styles.carouselTitles}>POPULAR MYTINERARIES</Text>
      
        <Carousel
            data={city}
            sliderWidth={900}
            itemWidth={450}
            renderItem={renderItem}
            layout={"default"}
            loop={true}
            autoplay={true}
        />

    </View>
    )
}

const styles = StyleSheet.create({

    image: {
        alignSelf:"center",
        resizeMode:"cover",
        justifyContent: "center",
        height: 400,
        width: 300,
    },
    cityName: {
        color: "whitesmoke",
        fontSize: 42,
        fontFamily:"ZillaSlabHighlight_700Bold",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        textShadowColor: '#000', 
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 5
    },
    containerCarrusel: {
        width:"100%",
        marginBottom: 20,
        marginTop: 20,
        alignItems:"center",
        justifyContent:"center",
    },
    slide:{
        width:"100%"
    },
    carouselTitles:{
        alignSelf:"flex-start",
        padding:10,
        color:"#dad8d8",
        fontSize:30,
  
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
        marginBottom:30
    }


})

export default Caroulsel