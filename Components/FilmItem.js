import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component{
    render(){
        console.log(this.props);
        const film = this.props.film
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>{film.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190
    },
    title_text:{

    }
})

export default FilmItem