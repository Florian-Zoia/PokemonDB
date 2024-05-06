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

import TypeList from '../components/TypeList';

class ShowType extends Component {
    state = {
        type: 0,
        weaknesses: [],
        strength: [],
        immunes: []
    };

    async componentDidMount(): void {
        await this.setState({
            type: this.getIndex(this.props.route.params.type)
        })
        await this.getWeaknessesStrength()
    }

    getIndex(type): number {
        return typeComponents.findIndex(obj => obj.name === type);
    }

    pressed = () => {
        console.log('pressed')
    }

    async getWeaknessesStrength() {
        types.map((type) => {
            if (typeComponents[this.state.type].name == type['name']) {
                this.setState({
                    weaknesses: type['weaknesses'],
                    strength: type['strengths'],
                    immunes: type['immunes']
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.singleCard}>
                    <TypeCard imageSrc={typeComponents[this.state.type].component} title={typeComponents[this.state.type].name} onPress={() => this.pressed()} />
                </View>
                <TypeList data={this.state.strength} title={'Strength'} />
                {this.state.weaknesses.length > 0 &&
                    <TypeList data={this.state.weaknesses} title={'Weaknesses'} />
                }
                {this.state.immunes.length > 0 &&
                    <TypeList data={this.state.immunes} title={'Immunities'} />
                }
            </View>
        )
    }
}

export default ShowType;