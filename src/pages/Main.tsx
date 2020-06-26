import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Image, Text } from 'react-native';

// import { Container } from './styles';

interface Posts {
    title: string;
    rendered: string;
    jetpack_featured_media_url: string;
}

const Main: React.FC = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://virtualmake.net/wp-json/wp/v2/posts').then(response => {
            response.json().then(data => {
                setPosts(data);
            })
        })
    }, []);
    
    return (
        <FlatList 
            data={posts} 
            keyExtractor={posts => posts.title}
            renderItem={({item: posts}) => (
                <View style={ styles.post }>
                    <Image style={ styles.image } source={{ uri: posts.jetpack_featured_media_url }} />
                    <Text>{posts.title.rendered}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    post: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20,
        flexWrap: 'wrap',
        marginLeft: 20,
        marginRight: 20,
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#fff',
        elevation: 2
    },
    image: {
        margin: 0,
        width: 170,
        height: 100,
        borderRadius: 4,
    }
})

export default Main;