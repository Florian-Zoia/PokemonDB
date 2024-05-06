import React, { Component } from 'react';
import {
    View,
    Text,
    GridList,
    GridListProps,
    Card
} from 'react-native-ui-lib';

import { styles } from '../stylesheets/showTypeSheet';

import TypeCard from '../components/TypeCard';

import { typeComponents } from '../data/typeComponents';

import { types } from '../data/chart';

import PropTypes from 'prop-types';

export default class TypeList extends Component {
    constructor(props) {
        super(props);
    }

    pressed = () => {
        console.log('pressed')
    }

    getIndex (type:string): number  {
        return typeComponents.findIndex(obj => obj.name === type);
    };

    renderItems: GridListProps < (typeof typeComponents) > ['renderItem'] = ({ item }) => {
        return (
            <TypeCard imageSrc={typeComponents[this.getIndex(item)].component} title={typeComponents[this.getIndex(item)].name} onPress={() => this.pressed()} />
        )
    };

    render() {
        return (
            <View>
                <Text style={styles.text}> {this.props.title}</Text>
                <GridList<(typeof typeComponents)[0]>
                    data={this.props.data}
                    numColumns={2}
                    renderItem={this.renderItems}
                />
            </View >
        )
    }
}

TypeList.propTypes = {data: PropTypes.array.isRequired, title: PropTypes.string.isRequired}
