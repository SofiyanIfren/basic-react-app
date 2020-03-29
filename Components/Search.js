import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'

import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component{
    render(){
        return (
            <View style={styles.maincontainer}>
                <TextInput placeholder="Titre du film" style={styles.textinput} />
                <Button style={{height:50}} title="Rechercher" onPress={() => {}} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

// externalisation des styles dans une variable (/!\ juste une {})
// optionnel: utiliser l'API stylesheet de react-native => meilleures perf.s
const styles = StyleSheet.create({
    maincontainer:{
        marginTop : 20,
        flex:1
    },
    textinput: {
        height:50,
        marginRight:5,
        marginLeft:5,
        borderColor:'#000000',
        paddingRight:5,
        paddingRight:5,
        borderWidth:1
    }
})

export default Search