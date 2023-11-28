import React, { useState } from "react"
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert, ProgressBarAndroidComponent } from "react-native"


const CombatDetail = (props) => {

    const [route,setRoute] = useState(props.routeName)
    


     return (route ==='Adventure')? <View >
        <Text style={styles.currentbattleStyle}> Battle Status</Text>
        <View style={styles.messageborderStyle}>
        <Text>  {props.scene} was a {props.roundVerdict}  </Text>
       <Text>  {props.avengerName} {props.goldDifference>0?<Text>gained {props.goldDifference} of gold</Text>:<Text>lost  {props.goldDifference} of gold</Text>} 
       {props.goldDifference<0?<Text> and lost {props.healthDifference} of health</Text>:<Text> and gained  {props.goldDifference} of health</Text>}</Text>
      
        <Text>{props.newHealth > 0?<Text> {props.avengerName} is alive:</Text>:<Text> {props.avengerName} is dead:</Text>}</Text>
        </View> 
    
    </View>

    :     <View></View>

}

const styles = StyleSheet.create({
    currentbattleStyle:{
        fontSize:30,
        alignSelf:'center',
        color:'white',
        
    },
    messageborderStyle:{
        width:350,
        height:100,
        borderWidth:2,
        alignSelf:'center',
        color:'gray',
        backgroundColor:'gray'
    }
});

export default CombatDetail