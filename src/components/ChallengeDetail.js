import React, { useContext } from "react"
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert } from "react-native"
import TwoNavigationButtons from "../components/TwoNavigationButtons"
import { withNavigation } from "react-navigation"


const ChallengeDetail = (props) => {

    return <View style={styles.container}>
        <Text style={styles.header}> Current Battle</Text>
        <Text style={styles.stagetextstyle}> {props.name}</Text>
        <Text style={styles.levelstyle}> Level {props.challengeLevel}</Text>

    </View>
}

const styles = StyleSheet.create({
    header:{
        fontSize:50,
        color:'white',
        alignSelf:'center',
        shadowRadius:5

    },
    stagetextstyle:{
        fontSize:20,
        color:'white',
        alignSelf:'center'


    },
    levelstyle:{
        fontSize:15,
        color:'white',
        alignSelf:'center',
        

    },
    container:{
        backgroundColor:'red',
        alignContent:'center',
        
    }
});

export default ChallengeDetail