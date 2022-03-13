import React from "react"
import { View, Text, StyleSheet,Image } from "react-native"



const ScreenLogoDetail = (props) => {

    return <View style={styles.background} >
                <Image style = {styles.logostyle} source={require('../../assets/images/icon/AvengerLogo.jpg')}/> 

    </View>
}

const styles = StyleSheet.create({
    logostyle: {

        width:70,
        height:70,
        resizeMode:'cover'
        
    },
    background:{
        alignContent:'center'
        
    }
});

export default ScreenLogoDetail