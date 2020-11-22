import { HeaderHeightContext } from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection:'row',
        margin:15,
        borderBottomWidth:2,
        borderColor: '#131313'
    },
    song_details_div:{
        height: 80,
        marginLeft:8,
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    song_details:{
        height: 60,
        justifyContent: "space-around",
        
    },
    song_cover:{
        width:80,
        height: 80
    },
    song_title:{
        color: 'white',
        fontSize: 20
    },
    song_artist:{
        color: 'lightgray',
        fontSize: 17
    }
})

export default styles;