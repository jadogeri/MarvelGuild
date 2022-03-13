import React from "react";
import { Text, StyleSheet, View} from "react-native";




const GameBoard = (props) => {
  // printing out props to the command line


  console.log(props);
  //printing what is living inside props.navigation
  console.log(props.navigation);

  return <View style={styles.gameStyle}>

    <View  >
      <Text style={styles.board}>  ID               {props.id}  </Text>
      <Text style={styles.board}>  POWER     {props.power}  </Text>
      <Text style={styles.board}>  LEVEL       {props.level}  </Text>

    </View>
    <View >

      <Text style={styles.board}>  MAX HEALTH     {props.maxhealth}  </Text>
      <Text style={styles.board}>  HERO HEALTH    {props.currenthealth}  </Text>
      <Text style={styles.board}>  GOLD                     {props.gold}  </Text>
    </View>



  </View>

};

const styles = StyleSheet.create({

  gameStyle: {

    backgroundColor: 'yellow',
    width: 357,
    height: 80,
    flexDirection: 'row',
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:5



  },

  text: {
    fontSize: 30,
    color: "#700",
    fontStyle: 'italic'
  },
  board: {

    borderWidth: 0.5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderLeftColor: 'black',
    borderColor: 'black',
    width:175,
    borderWidth:2
  }
});



export default GameBoard;