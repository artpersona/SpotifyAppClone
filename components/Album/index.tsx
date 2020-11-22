import React from 'react'
import {View,
    Image,
    Text,
    TouchableWithoutFeedback} 
    from 'react-native'
import {styles} from './Styles';
import {album} from '../../types'
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {album:album}

const Album = (props: AlbumProps) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('AlbumScreen',{id: props.album.id})
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                    <Image source={{uri: props.album.imageUri}} style={styles.image}/>
                    <Text style={styles.album_name}>{props.album.name}</Text>
                    <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


export default Album;