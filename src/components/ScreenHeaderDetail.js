import React from "react"
import { View, Text, StyleSheet } from "react-native"



const ScreenHeaderDetail = (props) => {

    return <View style={styles.background} >
        <Text style={styles.header}> {props.header}</Text>


    </View>
}

const styles = StyleSheet.create({
    header: {
        fontSize:60,
        textShadowColor:'white',
        textShadowColor : '#ff0',
        padding:2,
        alignSelf:'center',
        marginRight:30,
        textShadowRadius:60,
        color:'white'

    },
    background:{
        backgroundColor:'black',
        flex:1

    }
});

export default ScreenHeaderDetail