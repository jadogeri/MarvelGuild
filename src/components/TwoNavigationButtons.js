import React,{useState} from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { withNavigation } from "react-navigation";


const TwoNavigationButtons = (props) => {

 
    return <View style={styles.container}>
        <View style={styles.buttonsbackgroundStyle}>
            <Text> {props.navigate1}</Text>
            <TouchableOpacity value ={props.data} onPress={props.data == true ?props.handler : ()=>{console.log('2');}} 
                            style={props.data ===true ? styles.buttonStyle : styles.darkbuttonStyle}>
                <Text style={ props.data ===true ? styles.textStyle : styles.darktextStyle2}>{props.title1}</Text>
            </TouchableOpacity>

            <TouchableOpacity value = {props.data2} onPress={props.data2 === true ? props.handler2 :()=>{console.log(2);} } 
                              style={props.data2 ===true ?styles.buttonStyle2 : styles.darkbuttonStyle2}>
                <Text style={props.data2 ===true ? styles.textStyle2 : styles.darktextStyle2}>{props.title2}</Text>
            </TouchableOpacity>

        </View>
    </View>
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
    ,
    buttonsbackgroundStyle: {
        alignItems: "center",
        flexDirection: 'row',

    },
    buttonStyle: {
        backgroundColor: "skyblue",
        width: 150,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 4,
        justifyContent: 'center',
        borderRadius: 100 / 2,
        // margin:10



    },
    buttonStyle2: {
        backgroundColor: "skyblue",
        width: 150,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 4,
        justifyContent: 'center',
        borderRadius: 100 / 2,
        margin: 20

    },

    textStyle: {
        backgroundColor: "skyblue",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 25

    },
    textStyle2: {
        backgroundColor: "skyblue",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 25
    },
    darkbuttonStyle: {
        backgroundColor: "gray",
        width: 150,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 4,
        justifyContent: 'center',
        borderRadius: 100 / 2,
        // margin:10



    },
    darkbuttonStyle2: {
        backgroundColor: "gray",
        width: 150,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 4,
        justifyContent: 'center',
        borderRadius: 100 / 2,
        margin: 20

    },
    darktextStyle: {
        backgroundColor: "gray",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 25

    },
    darktextStyle2: {
        backgroundColor: "gray",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 25
    },

});

export default withNavigation(TwoNavigationButtons)