import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {album} from '../../types'
import styles from './Styles'
export type AlbumHeaderProps = {
    album: album
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const {album} = props;
    return (
        <View style={styles.container}>
            <Image style={styles.album_image} source={{uri:album.imageUri}}/>
            <Text style={styles.album_name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.album_author}>{album.by}</Text>
                <Text style={styles.album_likes}>{album.numberOfLikes}</Text>
            </View>

            <TouchableOpacity>
                 <View style={styles.button}>
                     <Text style={styles.buttonText}>Play</Text>
                 </View>
            </TouchableOpacity>
        </View>

    )
}

export default AlbumHeader