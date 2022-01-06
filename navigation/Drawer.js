import React, { useEffect } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import {  HomeStack } from './Stack'
import { StyleSheet, Text, View, Image, ImageBackground, ToastAndroid } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

const drawer = createDrawerNavigator()

const Navigator = (props) => {


    function LogoTitle() {
        return (
            <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require('../assets/travel.png')}
            />
        )
    }

    const CustomDrawerContent = (props) => {
        return (
            <ImageBackground  style={styles.drawerCustom}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.containerUserFoto}>

                        <Image style={{ width: 50, height: 50 }} source={require('../assets/userIcon.png')} />
                        {/* <Image style={styles.userProfile} source={{ uri: profilePhoto }} /> */}

                    </View>
                    <DrawerItemList {...props} />
                  
                </DrawerContentScrollView>
            </ImageBackground>

        )
    }


    return (

        <drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} screenOptions={{ drawerLabelStyle: { fontFamily: "Ubuntu_700Bold" }, drawerActiveBackgroundColor: '#3fced341', drawerActiveTintColor: '#2ab6bb' }}>
            <drawer.Screen name="Home" component={HomeStack} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
        </drawer.Navigator>

    )
}

const styles = StyleSheet.create({
    nameUser: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    containerUserFoto: {
        alignItems: 'center'
    },
    drawerCustom: {
        flex: 1,
        marginTop: 15,
    },
    userProfile: {
        minWidth: 55,
        height: 57,
        borderRadius: 50
    }


})

// const mapStateToProps = (state) => {
//     return{
//         token: state.users.token,
//         firstName: state.users.firstName,
//         profilePhoto: state.users.profilePhoto
//     }
// }

// const mapDispatchToProps = {
//     signInLS: userActions.signInLS,
// signOutUser: userActions.signOutUser
// }

export default (Navigator)
