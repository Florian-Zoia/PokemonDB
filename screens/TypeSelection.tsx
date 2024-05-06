import React, { Component } from 'react';
import {
  View,
  Text,
  Card,
  GridList,
  GridListProps,
  Image
} from 'react-native-ui-lib';

import { styles } from '../stylesheets/typePickerSheet';

import { typeComponents } from '../data/typeComponents';

import TypeCard from '../components/TypeCard';

export default class TypeSelectionScreen extends Component {

  renderItems: GridListProps<(typeof typeComponents)>['renderItem'] = ({ item }) => {
    return (
        <TypeCard imageSrc={item.component} title={item.name} onPress={() => this.cardPressed(item.name)}/>
    )
  }

  cardPressed = (item: string) => {
    console.log('pressed');
    this.props.navigation.navigate('ShowType', { type: item });
  }

  render() {
    return (
      <View style={styles.container}>
        <GridList<(typeof typeComponents)[0]>
          data={typeComponents}
          numColumns={2}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}
