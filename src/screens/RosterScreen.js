import React, { useContext } from "react"
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert, Image } from "react-native"
import TwoNavigationButtons from "../components/TwoNavigationButtons"
import { Context } from "../context/HeroContext"
import { withNavigation } from "react-navigation"
import ScreenHeaderDetail from "../components/ScreenHeaderDetail"
import ScreenLogoDetail from "../components/ScreenLogoDetail"
import AddAvengerButtonDetail from "../components/AddAvengerButtonDetail"

let IconShow = (heroName) => {
    try{
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
}catch(e){console.log('line 51',e);}

}

let INITIAL_LEVEL = 1;

let INITIAL_GOLD = 100

let INITIAL_MAX_HEALTH = 10

let INITIAL_CURRENT_HEALTH = INITIAL_MAX_HEALTH


let avengers = ['Iron Man', 'Hulk', 'Spider-Man', 'Hawk-Eye', 'Captain America', 'Vision', 'Scarlett Witch',
    'Black Panther', 'Ant Man', 'Black Widow', 'The Falcon', 'Winter Soldier', 'Thor', 'Captain Marvel', 'Doctor Strange', 'DeadPool']

const getRandomName = (arr) => {
    let name
        
try{
    if (arr.length > 0) {
        const random = Math.floor(Math.random() * arr.length);
        console.log('random',random);
        name =arr[random]
        console.log('line 75 name',name);
       arr.splice(random, 1)[0];
        
    }
}catch(e){console.log('line 78 roster',e);}
    return name;
};

const RosterScreen = (props) => {

    const { addHero, state } = useContext(Context);

    return <View style={styles.background}>
        <View style={styles.headerView}>
            <ScreenLogoDetail />
            <ScreenHeaderDetail header={'Avengers'} />
        </View>
        <FlatList
            style={styles.rostercontainer}
            data={state}
            keyExtractor={(hero) => { return hero.id }}
            renderItem={({ item }) => {
                return <TouchableOpacity style={styles.renderView} onPress={() => { props.navigation.navigate('Detail', { id: item.id, routeName: 'Roster' }) }}>
                    <View>
                        {IconShow(item.name)}

                        <Text>
                            {item.name}: Level {item.level} Power {item.power} Health {item.maxHealth} CurrentHealth {item.currentHealth} Gold {item.gold}
                        </Text>

                    </View>
                </TouchableOpacity>

            }}
        />

        <AddAvengerButtonDetail button={'Add Avenger'}
            handler={() => {console.log('adding avenger');
                (avengers.length > 0) ? 
                addHero(getRandomName(avengers),
                    INITIAL_LEVEL,
                    Math.floor(Math.random() * 10) + 1,
                    INITIAL_MAX_HEALTH,
                    INITIAL_CURRENT_HEALTH,
                    INITIAL_GOLD
                ) : console.log('no more avengers to add');
              
            }} />

        <TwoNavigationButtons
            title1='Roster'
            title2='Adventure'
           data={false}
            data2={true}

            handler2={() => { props.navigation.navigate('Adventure', { routeName: 'Roster' }) }}

        />

    </View>
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black'
    },
    headerView: {
        flexDirection: 'row',

    },
    rostercontainer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'red',
        backgroundColor:'gray',
        borderColor:'black',
        borderWidth:2,
        shadowRadius:5

    },
    image: {
        width:70,
        height:70,
        resizeMode:'cover',
        alignContent:'center',
        borderRadius:70/2


    },
    renderView:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
        borderColor:'black',
        borderTopWidth:1
    }

});

export default RosterScreen