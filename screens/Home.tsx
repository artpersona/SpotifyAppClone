import * as React  from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../graphql/queries';
import {useEffect, useState} from 'react';
export default function Home() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        setCategories(data.data.listAlbumCategorys.items);
        console.log('pasok')
      } catch (e) {
        console.log('error => ',e);
      }
    }

    fetchAlbumCategories();
  }, []);


  return (
    <View style={styles.container}>
       <FlatList
         data={categories}
         renderItem={({ item }) => (
           <AlbumCategory
             title={item.title}
             albums={item.albums.items}
           />
         )}
         keyExtractor={(item) => item.id.toString()}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01030a',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
