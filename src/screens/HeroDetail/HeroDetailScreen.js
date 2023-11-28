import React, { useContext, useState, useReducer } from "react"
import { View, Text, StyleSheet, Alert, Image } from "react-native"
import TwoNavigationButtons from "../../components/TwoNavigationButtons"
import { Context } from "../../context/HeroContext"
import LevelButton from "../../components/LevelButton"
import CombatDetail from "../../components/CombatDetail"
import GameBoard from "../../components/GameBoard"
import styles from "./HeroDetailStyle"
import heroReducer from "../../reducers/activePlayerReducer"

let routeTaken = {
    data2: false,
    data: true,
    route: ''

}

let display = {
    roundVerdict: '',
    goldDifference: 0,
    healthDifference: 0,
    newGold: 0,
    newHealth: 0,
    newmaxHealth:0,
    id: 0,
    routeName: 'Adventure',
    challengeLevel: 0,
    name: '',
 

}


let IconShow = (heroName) => {

  // console.log('detailscreen line 19', heroName);
    try {
        switch (heroName) {
            case 'Iron Man':
                return <Image style={styles.image} source={require('../../../assets/images/character/IronMan2.jpg')} />
            case 'Hulk':
                return <Image style={styles.image} source={require('../../../assets/images/character/Hulk2.jpg')} />
            case 'Spider-Man':
                return <Image style={styles.image} source={require('../../../assets/images/character/SpiderMan2.jpg')} />
            case 'Hawk-Eye':
                return <Image style={styles.image} source={require('../../../assets/images/character/HawkEye2.jpg')} />
            case 'Captain America':
                return <Image style={styles.image} source={require('../../../assets/images/character/CaptainAmerica2.jpg')} />
            case 'Vision':
                return <Image style={styles.image} source={require('../../../assets/images/character/Vision2.jpg')} />
            case 'Scarlett Witch':
                return <Image style={styles.image} source={require('../../../assets/images/character/ScarlettWitch2.jpg')} />
            case 'Black Panther':
                return <Image style={styles.image} source={require('../../../assets/images/character/BlackPanther2.jpg')} />
            case 'Ant Man':
                return <Image style={styles.image} source={require('../../../assets/images/character/AntMan2.jpg')} />
            case 'Black Widow':
                return <Image style={styles.image} source={require('../../../assets/images/character/BlackWidow2.jpg')} />
            case 'The Falcon':
                return <Image style={styles.image} source={require('../../../assets/images/character/Falcon2.jpg')} />
            case 'Winter Soldier':
                return <Image style={styles.image} source={require('../../../assets/images/character/WinterSoldier2.jpg')} />
            case 'Thor':
                return <Image style={styles.image} source={require('../../../assets/images/character/Thor2.jpg')} />
            case 'Captain Marvel':
                return <Image style={styles.image} source={require('../../../assets/images/character/CaptainMarvel2.jpg')} />
            case 'Doctor Strange':
                return <Image style={styles.image} source={require('../../../assets/images/character/DoctorStrange2.jpg')} />
            case 'DeadPool':
                return <Image style={styles.image} source={require('../../../assets/images/character/DeadPool2.jpg')} />
            default:
                return <View></View>

        }
    } catch (e) { console.log('detailscreen line 59', e); }

}

let avengers = ['Iron Man', 'Hulk', 'Spider-Man', 'Hawk-Eye', 'Captain America', 'Vision', 'Scarlett Witch',
    'Black Panther', 'Ant Man', 'Black Widow', 'The Falcon', 'Winter Soldier', 'Thor', 'Captain Marvel', 'Doctor Strange', 'DeadPool']

let adventure = { name: '', challengeLevel: '' }


const hasGold = function (heroCurrentGold, levelGold) {
    return heroCurrentGold >= levelGold
}
const HeroDetailScreen = (props) => {

   display.roundVerdict = props.navigation.getParam('roundVerdict')
   display.goldDifference= props.navigation.getParam('goldDifference')
   display.healthDifference= props.navigation.getParam('healthDifference')
   display.newGold= props.navigation.getParam('newGold')
   display.newHealth =props.navigation.getParam('newHealth')
   display.newmaxHealth=props.navigation.getParam('newmaxHealth')
   display.id=props.navigation.getParam('id')
   display.routeName= props.navigation.getParam('routeName')
   display.challengeLevel=props.navigation.getParam('challengeLevel')
   display.name=props.navigation.getParam('name')
   console.log('data fromadventure screen below');

   console.log('Hero Detail line 128',JSON.stringify(display))
  
   
    // the route name can either be from Adventure screen or Roster screen
    let newRoute = props.navigation.getParam('routeName')
    console.log('line 112',routeTaken.route);

    const { state, editHero, deleteHero } = useContext(Context);

    const heroID = props.navigation.getParam('id')

    //loop and retrieve id of character
    const hero = state.find((hero) => {
        return heroID === hero.id
    })
    try {
        console.log('line 129',routeTaken.route);
        if (newRoute === 'Adventure') {

            adventure.challengeLevel = props.navigation.getParam('challengeLevel')
            adventure.name = props.navigation.getParam('name')
            routeTaken.data2 = true
            routeTaken.data = false  
            routeTaken.route = 'Adventure'          
        }else{
            routeTaken.data2 = false
            routeTaken.data = true 
            routeTaken.route = 'Roster'          


        }

    } catch (e) {
        console.log('line 136',e);
    }
    const [goldCost, setGoldCost] = useState(10)
    const [updatedHero, dispatch] = useReducer(heroReducer, hero)
    console.log('line 133 typeof updatedHero',typeof updatedHero ,updatedHero);
    console.log('updated hero name',updatedHero.name);     

    return <View style={styles.container}>

<Text style={styles.headerView}> {updatedHero.name}</Text>
<Text style={{color:'red'}}>UPDATED HERO NAME </Text>
{updatedHero.name !== undefined ? IconShow(updatedHero.name) : <View></View>}

        <GameBoard id={updatedHero.id}
            power={updatedHero.power}
            level={updatedHero.level}
            maxhealth={updatedHero.maxHealth}
            currenthealth={updatedHero.currentHealth}
            gold={updatedHero.gold}

        />

<Text style={{color:'red'}}>ABOVE COMBAT DETAIL </Text>

        <CombatDetail routeName={routeTaken.route}
            scene={adventure.name}
            level={adventure.challengeLevel}
            avengerName={updatedHero.name}
            current_Health={updatedHero.currentHealth}
            current_Power={updatedHero.power}
            
            roundVerdict={display.roundVerdict }
   goldDifference={ display.goldDifference}
   healthDifference={display.healthDifference}

  newGold={ display.newGold}

  newHealth={ display.newHealth }

  newmaxHealth={display.newmaxHealth}

   id={ display.id}

//    routeName={display.routeName}

   challengeLevel={display.challengeLevel}

   name={ display.name}

        />

        <LevelButton title='Level Up!'
            goldAmount={updatedHero.level * 10}

            handler={hasGold(updatedHero.gold, updatedHero.level * 10) ? () => {

                dispatch({ attributeToChange: "update", amount: goldCost })

                //  editHero(newHero.id, newHero.name, newHero.level, newHero.power, newHero.maxHealth, newHero.currentHealth, newHero.gold)

                setGoldCost(goldCost + 10)
            } : () => { console.log(hero.name + "is out of gold") }} />

        <TwoNavigationButtons

            title1='Roster'
            title2='Adventure'
            data={routeTaken.data}
            data2={routeTaken.data2}
            handler={() => {
                console.log('line 82  \n' + updatedHero); editHero(updatedHero.id, updatedHero.name, updatedHero.level, updatedHero.power, updatedHero.maxHealth, updatedHero.currentHealth, updatedHero.gold),
                    props.navigation.navigate('Roster')
            }}

            handler2={() => {
                console.log('line 82  \n' + updatedHero);
                updatedHero.currentHealth <= 0 ? deleteHero(updatedHero.id) :

                editHero(updatedHero.id, updatedHero.name, updatedHero.level, updatedHero.power, updatedHero.maxHealth, updatedHero.currentHealth, updatedHero.gold),
                    props.navigation.navigate('Adventure')
            }}

        />

    </View>
}

export default HeroDetailScreen