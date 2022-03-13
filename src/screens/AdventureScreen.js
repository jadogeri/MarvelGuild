import React, { useContext, useReducer, useState } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Image } from "react-native"
import ChallengeDetail from "../components/ChallengeDetail"
import TwoNavigationButtons from "../components/TwoNavigationButtons"
import { Context } from "../context/HeroContext"
import { withNavigation } from "react-navigation"


let IconShow = (heroName) => {
    try {
        console.log('line 12', heroName);

        switch (heroName) {
            case 'Iron Man':
                return <Image style={styles.image} source={require('../../assets/images/character/IronMan2.jpg')} />
            case 'Hulk':
                return <Image style={styles.image} source={require('../../assets/images/character/Hulk2.jpg')} />
            case 'Spider-Man':
                return <Image style={styles.image} source={require('../../assets/images/character/SpiderMan2.jpg')} />
            case 'Hawk-Eye':
                return <Image style={styles.image} source={require('../../assets/images/character/HawkEye2.jpg')} />
            case 'Captain America':
                return <Image style={styles.image} source={require('../../assets/images/character/CaptainAmerica2.jpg')} />
            case 'Vision':
                return <Image style={styles.image} source={require('../../assets/images/character/Vision2.jpg')} />
            case 'Scarlett Witch':
                return <Image style={styles.image} source={require('../../assets/images/character/ScarlettWitch2.jpg')} />
            case 'Black Panther':
                return <Image style={styles.image} source={require('../../assets/images/character/BlackPanther2.jpg')} />
            case 'Ant Man':
                return <Image style={styles.image} source={require('../../assets/images/character/AntMan2.jpg')} />
            case 'Black Widow':
                return <Image style={styles.image} source={require('../../assets/images/character/BlackWidow2.jpg')} />
            case 'The Falcon':
                return <Image style={styles.image} source={require('../../assets/images/character/Falcon2.jpg')} />
            case 'Winter Soldier':
                return <Image style={styles.image} source={require('../../assets/images/character/WinterSoldier2.jpg')} />
            case 'Thor':
                return <Image style={styles.image} source={require('../../assets/images/character/Thor2.jpg')} />
            case 'Captain Marvel':
                return <Image style={styles.image} source={require('../../assets/images/character/CaptainMarvel2.jpg')} />
            case 'Doctor Strange':
                return <Image style={styles.image} source={require('../../assets/images/character/DoctorStrange2.jpg')} />
            case 'DeadPool':
                return <Image style={styles.image} source={require('../../assets/images/character/DeadPool2.jpg')} />
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

//random reward on object based on difficulty of level
// and current level
let generateGoldDifference = (heroLevel, questLevel, power, verdict) => {

    switch (verdict) {
        case 'SUCCESS':
            return (heroLevel * questLevel) + power;
        case 'FAILURE':
            return - 1 * ((heroLevel * questLevel) + power / 2);
        default:
            return
    }

}

let generateHealthDifference = (heroLevel, questLevel, power, verdict) => {

    switch (verdict) {
        case 'SUCCESS':
            return 2 * (heroLevel - questLevel) ;
        case 'FAILURE':
            return (heroLevel + questLevel);
        default:
            return
    }



}
// array awarding points to round


//checks to see if hero quest was a success or failure

const questVerdict = (heroLevel, stageLevel) => {

    let roundVerdict = ["SUCCESS", "FAILURE"]
    let val = ""

    if (heroLevel >= stageLevel)
        val = roundVerdict[0]
    else
        val = roundVerdict[1]

    return val

}

let battleHandler = (hero, stageLevel) => {
    try {

        //checking to see if battle was a success or failur
        let answer = questVerdict(hero.level, stageLevel)
        display.roundVerdict = answer
        console.log('round verdict is ' + display.roundVerdict);

        display.goldDifference = generateGoldDifference(hero.level, stageLevel, hero.power, answer)
        display.healthDifference = generateHealthDifference(hero.level, stageLevel, hero.power, answer)

        display.newGold = hero.gold + display.goldDifference
        display.newHealth = hero.currentHealth + display.healthDifference

        console.log('line 95 adventure screen');
        console.log(display.roundVerdict)
        console.log(display.goldDifference)
        console.log(display.healthDifference)
        console.log(display.newGold)
        console.log(display.newHealth)
        console.log(display.newmaxHealth)
        console.log(display.id)
        console.log(display.routeName)
        console.log(display.challengeLevel)
        console.log(display.name)


        if (hero.maxHealth < display.newHealth) {
            display.newHealth = hero.maxHealth
        } else {
            //do nothing if health is less than max
        }



    } catch (e) {
        console.log('in calling adventure' + e);
    }

}


let data = false

//default values for the reducer
const generateAdventure = () => {

    try {
        let adventure = {}
        const adjectives = ['spooky', 'scary', 'dire', 'miserable', 'dangerous', 'deadly',
            'grim', 'depths', 'misterious']
        const locations = ['caves', 'new york', 'grove', 'tundra', 'desert', 'wilderness', 'wakanda']

        const qualifiers = ['no hope', 'no return', 'death', 'hatred', 'evil', 'sorrow']

        adventure.name = ' The ' + adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' +
            locations[Math.floor(Math.random() * locations.length)] + " of " +
            qualifiers[Math.floor(Math.random() * qualifiers.length)]

        adventure.challengeLevel = Math.floor(Math.random() * 10) + 1

        console.log(adventure);
        return adventure
    } catch (e) { console.log(e); }

}
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
                        battleHandler(item, newAdventure.challengeLevel),
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

const styles = StyleSheet.create({

    rostercontainer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'red',
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 2,
        shadowRadius: 5

    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        alignContent: 'center',
        borderRadius: 70 / 2


    },
    renderView: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderTopWidth: 1
    },
    background: {
        flex: 1,
        backgroundColor: 'black'
    },
    listView: {
        height: 400
    },
    promptstyle: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'white',
    }
});

export default withNavigation(AdventureScreen)