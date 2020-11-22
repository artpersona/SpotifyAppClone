import React, {useContext} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Song}  from '../../types';
import { AppContext } from '../../AppContext'
export type SongListItemsProps = {song:Song}


const SongListItem = (props: SongListItemsProps) => {
    const {song} = props;

    const {setSongId} = useContext(AppContext)
    const onPlay = () => {
        setSongId(song.id)
        console.log('song id: ',song.id)
    }


    return (
        <TouchableOpacity onPress={onPlay}>
            <>
            <View style={styles.container}>
                <Image source={{uri: song.imageUri}} style={styles.song_cover}/>
                <View style={styles.song_details_div}>
                    <View style={styles.song_details}>
                        <Text style={styles.song_title}>{song.title}</Text>
                        <Text style={styles.song_artist}>{song.artist}</Text>
                    </View>
                </View>
            </View>
            </>
        </TouchableOpacity>
    )
}

export default SongListItem;