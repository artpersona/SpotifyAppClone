import React from 'react';
import {View,Text,FlatList} from 'react-native';
import {styles} from './Styles';
import {albumCategory} from '../../types';
import Album from '../Album'

export type AlbumCategoryProps = {
    title: string,
    albums: []
}

const AlbumCategory = (props: AlbumCategoryProps) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList
            data={props.albums}
            renderItem={({item}) => <Album album={item}/>}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item)=> item.id.toString()}
        />
    </View>
)

export default AlbumCategory;