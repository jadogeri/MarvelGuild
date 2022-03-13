import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Context } from "../context/HeroContext"

const AddAvengerButtonDetail = (props) => {

    return <View style={styles.background} >
        <TouchableOpacity onPress={props.handler} >
            <Image style={styles.logostyle}
                source={require('../../assets/images/icon/AvengerLogo.jpg')}
            />

            <Text style={styles.buttontextStyle}> {props.button}</Text>
        </TouchableOpacity>

    </View>
}


const styles = StyleSheet.create({
    buttontextStyle: {
        fontSize: 20,
        textShadowColor: 'white',
        //textShadowColor : '#ff0',
        shadowColor: 'blue',
        marginTop: 5,

        color: 'blue'

    },
    logostyle: {



        width: 120,
        height: 100,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 120 / 2,
        marginTop: 20


    },
    background: {
        backgroundColor: 'black',
        height: 130,
        width: 130,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        shadowColor: "#000",

        shadowOpacity: 60,
        shadowRadius: 1.41,

        elevation: 20,
    }
});


export default AddAvengerButtonDetail