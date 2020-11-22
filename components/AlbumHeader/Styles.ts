import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    album_image:{
        width:200,
        height:200,
        margin:15
    },
    album_name:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    album_likes:{color: 'lightgray',
    margin : 5,
    fontSize: 20
    },
    creatorContainer:{
        flexDirection: 'row'
    },
    album_author:{
        color: 'lightgray',
        margin : 5,
        fontSize: 20
    },
    likes:{
        color: 'lightgray',
        margin: 5,
        fontSize: 20
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',   
        backgroundColor: '#1CD05D',
        height: 50,
        width: 170,
        borderRadius: 60
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default styles