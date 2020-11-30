import { HeaderHeightContext } from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 49,
        flexDirection:'column',
        backgroundColor: '#131313',
        width: '100%',
        borderBottomWidth:2,
        borderColor:'black'
    },
    row:{
        flexDirection:'row',
    },

    progress:{
        height: 8,
        width: '100%',
        backgroundColor: '#1DB954',
    },
    song_details_div:{
        height: 80,
        marginLeft:8,
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    song_details:{
        flexDirection:'row',
        height: 60,
        justifyContent: "space-around",
        alignItems: 'center',
        maxWidth:'60%',

    },

    icon_container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:100
    },

    song_cover:{
        width:75,
        height: 75,
        marginRight:8
    },
    song_title:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    song_artist:{
        color: 'lightgray',
        fontSize: 17
    },
})

export default styles;