import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    headerView: {
        flexDirection: 'row',
        fontSize: 50,
        alignSelf: 'center',
        shadowColor: 'white',
        color: 'white',
        fontWeight: 'bold',

    },
    rostercontainer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 3,
        marginTop: 2,
        backgroundColor: 'red'

    },
    image: {
        width: 350,
        height: 340,
        resizeMode: 'contain',
        alignSelf: 'center'

    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
});

export default styles;