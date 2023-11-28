import React, { useContext, useReducer, useState } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from "react-native"
import ChallengeDetail from "../../components/ChallengeDetail"
import TwoNavigationButtons from "../../components/TwoNavigationButtons"
import { Context } from "../../context/HeroContext"
import { generateAdventure } from "../../utils/generateAdventure"
import { battleHandler } from "../../utils/battleHandler"
import styles from "./AdventureStyle"


let IconShow = (heroName) => {
    try {
        console.log('line 12', heroName);

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


        }
    } catch (e) { console.log('line 51', e); }

}




let display = {
    roundVerdict: '',
    goldDifference: 0,
    healthDifference: 0,
    newGold: 0,
    newHealth: 0,
    newmaxHealth: 0,
    id: 0,
    routeName: 'Adventure',
    challengeLevel: 0,
    name: '',


}

const setHeroID = function (newID) {

    display.id = newID
}


let data = false

//default values for the reducer

const AdventureScreen = (props) => {

    const { state, editHero } = useContext(Context);

    let newAdventure = generateAdventure()
    display.name = newAdventure.name
    display.challengeLevel = newAdventure.challengeLevel

    const routeName = props.navigation.getParam('routeName')

    //enable functionality to roster screen
    if (routeName === 'Roster') {
        data = true
    }

    return <View style={styles.background}>
        <ChallengeDetail name={newAdventure.name}
            challengeLevel={newAdventure.challengeLevel} />
        <Text style={styles.promptstyle}> Which Avenger are you sending to battle ?</Text>

        <View style={styles.listView}>
            <FlatList
                style={styles.rostercontainer}
                data={state}
                keyExtractor={(hero) => { return hero.id }}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={styles.renderView} onPress={() => {
                        setHeroID(item.id)
                        battleHandler(item, display, newAdventure.challengeLevel),
                            console.log('' + item.id + '' + item.name + '' + item.level + '' + item.power + '' + item.maxHealth + '' + display.newHealth + '' + display.newGold);
                        editHero(item.id, item.name, item.level, item.power, item.maxHealth, display.newHealth, display.newGold,
                            () => {
                                props.navigation.navigate('Detail', display)
                            })

                    }}>
                        <View>
                            {IconShow(item.name)}
                            <Text>
                                {item.name}: Level {item.level} Power {item.power} Health {item.maxHealth} CurrentHealth {item.currentHealth} Gold {item.gold}
                            </Text>

                        </View>
                    </TouchableOpacity>

                }}
            />



        </View>



        <TwoNavigationButtons
            title1='Roster'
            title2='Adventure'
            data2={false}
            data={data}
            handler={() => { props.navigation.navigate('Roster', { routeName: 'Adventure' }) }}
        />

    </View>
}



export default AdventureScreen