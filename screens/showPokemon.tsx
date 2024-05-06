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
import { ScrollView } from 'react-native-virtualized-view'

import { types } from '../data/chart';
import { pokemon } from '../data/pokemon';

import { styles } from '../stylesheets/showPokemonSheet';
import TypeList from '../components/TypeList';

class ShowPokemon extends Component {
  state = {
    weaknesses: [],
    strength: [],
    immunes: [],
    pokemonIndex: 0,
    responseJson: {},
    superWeaknesss: [],
    superStrength: []
  };

  async componentDidMount() {
    this.setState({
      superWeaknesss: [],
      superStrength: [],
      weaknesses: [],
      strength: [],
      immunse: []
    })
    await this.getIndex()
    await this.getWeaknesses()
    // console.log(this.getSpritesFromApi())
    console.log(this.state.pokemonIndex)
    console.log(this.state.superWeaknesss.length)
  };

  async getWeaknesses() {
    types.map((type) => {
      if (pokemon[this.state.pokemonIndex].type[0] == type['name']) {
        this.setState({
          weaknesses: type['weaknesses'],
          strength: type['strengths'],
          immunes: type['immunes']
        })
      }
    })
    if (pokemon[this.state.pokemonIndex].type.length > 1) {
      this.spliceOwnType(1)
      types.map((type) => {
        if (pokemon[this.state.pokemonIndex].type[1] == type['name']) {
          type['weaknesses'].map((weak) => {
            this.state.weaknesses.push(weak)
          })
          type['strengths'].map((str) => {
            this.state.strength.push(str)
          })
          type['immunes'].map((imm) => {
            this.state.immunes.push(imm)
          })
        }
      })
      this.spliceOwnType(0)
      
      console.log('this.state.superWeaknesss')
      console.log(this.state.superStrength)
      console.log(this.state.strength)
      this.getSuperTypes(this.state.weaknesses, this.state.superWeaknesss);
      this.getSuperTypes(this.state.strength, this.state.superStrength);
      this.setState({
        superWeakness: this.state.superWeaknesss,
        superStrength: this.state.superStrength
      })
    }

    console.log('lalala')
    console.log(this.state.immunes)
  }

  spliceOwnType(typeNr:number) {
    const typeIndex = this.state.weaknesses.indexOf(pokemon[this.state.pokemonIndex].type[typeNr]);
    this.state.weaknesses.splice(typeIndex, 1);
  }

  getSuperTypes(arr:Array<string>, superArr:Array<string>) {
    const temp = [String];
    arr.forEach(value => {
      if (!temp[value]) {
        temp[value] = true; // Markiere als bereits gesehen
      } else {
        // Wert ist bereits vorhanden, entferne es aus array1 und füge es zu array2 hinzu
        const index = arr.indexOf(value);
        arr.splice(index, 1)
        superArr.push(value)
      }
    })
    superArr.map((item) => {
      const indexSW = arr.indexOf(item)
      arr.splice(indexSW, 1)
    })
  }


  getIndex() {
    this.setState({
      pokemonIndex: pokemon.findIndex(obj => obj.name.english === this.props.route.params.pokemonName)
    })
    return true;
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container} >

          <View style={styles.pokemon}>
            <Text style={styles.text}> {pokemon[this.state.pokemonIndex].name.english} </Text>
            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon[this.state.pokemonIndex].id}.png` }} style={styles.image} />
          </View>
          <TypeList data={pokemon[this.state.pokemonIndex].type} title={'Types'} />
          {this.state.superStrength.length > 0 &&
            <TypeList data={this.state.superStrength} title={'Extremely Strong'} />
          }
          <TypeList data={this.state.strength} title={'Strength'} />
          {this.state.superWeaknesss.length > 0 &&
            <TypeList data={this.state.superWeaknesss} title={'Extremely Weak'} />
          }
          {this.state.weaknesses.length > 0 &&
            <TypeList data={this.state.weaknesses} title={'Weaknesses'} />
          }
          {this.state.immunes.length > 0 &&
            <TypeList data={this.state.immunes} title={'Immunities'} />
          }

        </View>
      </ScrollView>
    );
  }
}



export default ShowPokemon;