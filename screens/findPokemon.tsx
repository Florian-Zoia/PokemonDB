import React, { Component } from 'react';
import {
    View,
    Text,
    Constants,
    GridList,
    Card,
    Spacings,
    BorderRadiuses,
    GridListProps,
    TouchableOpacity,
    Button,
    TextField,
    Image,
    Icon,
} from 'react-native-ui-lib';

import { types } from '../data/chart';
import { pokemon } from '../data/pokemon';

import { styles } from '../stylesheets/findPokemonSheet';
import { FlatList, Pressable } from 'react-native';

class FindPokemon extends Component {
    state = {
        entryPokemon: "",
        weaknesses: [],
        pokemonIndex: 0,
        names: []
    };

    async componentDidMount() {
        pokemon.map((item) => {
            this.state.names.push(item.name.english)
        })
    };

    // async getWeaknesses() {
    //     await this.getIndex()
    //     console.log(this.state.pokemonIndex)
    //     if (pokemon[this.state.pokemonIndex].type.length == 1) {
    //         types.map((type) => {
    //             if (pokemon[this.state.pokemonIndex].type[0] == type['name']) {
    //                 this.setState({
    //                     weaknesses: type['weaknesses']
    //                 })
    //             }
    //         })
    //     }
    // }

    // getIndex() {
    //     this.setState({
    //         pokemonIndex: pokemon.findIndex(obj => obj.name.english === this.state.entryPokemon)
    //     })
    //     return true;
    // }

    pressed = (item) => {
        console.log('pressed');
        this.setState({ entryPokemon: item })
        this.props.navigation.navigate('ShowPokemon', { pokemonName: item });
    }

    changeText = (entryPokemon: string) => {
        if (entryPokemon.length > 0) {
            this.setState({
                entryPokemon: entryPokemon,
                names: this.state.names.filter((name) => name.includes(entryPokemon))
            })
        } else {
            pokemon.map((item) => {
                this.state.names.push(item.name.english)
            })
            this.setState({
                entryPokemon: entryPokemon
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextField
                    label="Pokemon"
                    style={styles.textField}
                    text50
                    placeholder="Pokemon"
                    onChangeText={(entryPokemon) => this.changeText(entryPokemon)}
                    value={this.state.entryPokemon}
                />
                <View style={styles.flatlist} >
                    <FlatList
                        data={this.state.names}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => this.pressed(item)} >
                                <Text style={styles.textsecondary} >
                                    {item}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                    label={'Submit'}
                        text70
                        style={styles.button}
                        onPress={() => this.pressed(this.state.entryPokemon)}
                    />
                </View>
                {/* <Card */}
            </View>
        );
    }
}



export default FindPokemon;