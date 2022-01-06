import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const Footer = () => {
    const image = { uri: "https://p4.wallpaperbetter.com/wallpaper/146/645/120/landscape-mountains-sea-monochrome-wallpaper-preview.jpg" };
    return(

            <ImageBackground style={styles.footerBack}  source={ image} resizeMode="cover">
                <Text style={styles.logoFooter} >Mytinerary</Text>
                <View style={styles.iconsFooter}>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-facebook-nuevo-96.png')} resizeMode="contain"/>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-instagram-96.png')} resizeMode="contain"/>
                    <Image style={styles.footerIcon} source={require('../assets/icons8-twitter-cuadrado-96.png')} resizeMode="contain"/>
                </View>
                <Text style={styles.copyFooter} >Copyright &copy; -- Adrian Hernandez -- MindHub -- 2022 </Text>
            </ImageBackground>
    
    )
}

const styles = StyleSheet.create({
    footerBack:{
        width:"100%",
        height:250,
        justifyContent:"space-between"
    
    },
    logoFooter:{
        color: "black",
        alignSelf:"center",
        fontSize:30,
        padding:10,
        marginVertical:10
    },
    copyFooter:{
       textAlign:"center",
       color:"white",
       paddingVertical:10,
       fontSize:14
    },
    footerIcon:{
        width:25
    },
    iconsFooter:{
        alignSelf:"center",
        width:"70%",
        flexDirection:"row",
        justifyContent:"space-around",
       

        
    }
})

export default Footer