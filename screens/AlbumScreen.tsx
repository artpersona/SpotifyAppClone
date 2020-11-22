import { useRoute } from '@react-navigation/native';
import React, {useEffect , useState }from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import AlbumHeader from '../components/AlbumHeader';
import SongListItems from '../components/SongListItem';
import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../graphql/queries';
import { styles } from '../components/AlbumCategory/Styles';


const AlbumScreen = () => {
    
    const route  = useRoute();
    const albumID = route.params.id;

    const [album , setAlbum] = useState(null)
    useEffect(() => {
        const fetchAlbum = async () => {
            try{
                const data = await API.graphql(graphqlOperation(getAlbum, {id:albumID}))
                setAlbum(data.data.getAlbum)
                console.log('ps')
                console.log(data)
            }
            catch(e){
                console.log('error is ',e)
            }
        
        }

        fetchAlbum();
    },[])

    if(!album){
        return <ActivityIndicator style ={Styles.center} size="large" color="#00ff00" />
    }

    return(
    <View>
        <FlatList
            data={album.songs.items}
            renderItem={({item}) => <SongListItems song={item}></SongListItems>}
            ListHeaderComponent = {()=><AlbumHeader album={album}
            />}
        />
    </View>
    )
}

const Styles =({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    color:{
        color:'white'
    }
})

export default AlbumScreen;