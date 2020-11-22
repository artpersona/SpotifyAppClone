import React, { useEffect, useState, useContext } from 'react';
import {Text, Image, View} from 'react-native';
import styles from './Styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getSong } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify';
import { AppContext } from '../../AppContext'

const PlayerWidget = () => { 

    const [song , setSong ] = useState(null)
    const { songId } = useContext(AppContext);

    useEffect(() => {
        console.log('id changed')
        const fetchSong = async () => {
          try {
            const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
            setSong(data.data.getSong);
            console.log(data.data.getSong)
          } catch (e) {
            console.log(e);
          }
        }
    
        fetchSong();
      }, [songId])


    const [sound, setSound] = useState<Sound>(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [duration, setDuration] = useState<number|null>(null)
    const [position, setPosition] = useState<number|null>(null)
    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
    }
    
    const playCurrentSong = async () => {   
    
        if(sound){
            await sound.unloadAsync();
        }
        const {sound: newSound} = await Sound.createAsync(
            {uri: song.uri},
            {shouldPlay: isPlaying},
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        if(song){
            playCurrentSong();
        }
    },[])


    const onPlayPausePress = async () => {
        if(!sound)
            return;
        if(isPlaying){
            await sound.pauseAsync();
        }
        else{
            if(getProgress()==100)
                await sound.stopAsync();
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if(sound === null || duration === null || position === null){
            return 0;
        }
        return  (position/duration) * 100;
    }

    if(!song){
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress,{width:`${getProgress()}%`}]}/>
            <View style={styles.row}>
                <Image source={{uri: song.imageUri}} style={styles.song_cover}/>  
                    <View style={styles.song_details_div}>
                        <View style={styles.song_details}>
                            <Text style={styles.song_title}>{song.title}</Text>
                            <Text style={styles.song_artist}>{song.artist}</Text>
                        </View>
                        <View style={styles.icon_container}>    
                            <AntDesign name='hearto' size={30} color='white'/>
                            <TouchableOpacity onPress={onPlayPausePress}>
                                <FontAwesome name={isPlaying ? 'pause':'play'} size={30} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
           
        </View>
    )
}

export default PlayerWidget;