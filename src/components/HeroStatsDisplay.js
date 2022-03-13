import React from "react"
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert } from "react-native"
import TwoNavigationButtons from "../components/TwoNavigationButtons"
import { withNavigation } from "react-navigation"


const HeroStatsDetail = (props) => {

     return (route ==='Adventure')? <View >
        <Text> Current Battle</Text>
        <Text>  {props.scene}</Text>
        <Text> level</Text>
        <Text> {props.level}</Text>
       <Text style={  () => props.handler }></Text>

        <Text> combat detail</Text>
        <Text>{props.avengerName}</Text>
        <Text>{props.current_Health}</Text>
        <Text>{props.current_Power}</Text>
        <Text>{props.damage}</Text>
        <Text>{props.goldState}</Text>
        

    
    </View>


    :     <Text>{route} is right here</Text>

}

const styles = StyleSheet.create({});

export default HeroStatsDetail