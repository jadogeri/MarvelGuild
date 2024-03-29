import { StyleSheet} from "react-native"

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

export default styles