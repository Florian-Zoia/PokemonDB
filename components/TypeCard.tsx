import React, { Component } from 'react';
import {
  View,
  Text,
  Card,
  GridList,
  GridListProps,
  Image
} from 'react-native-ui-lib';

import PropTypes from 'prop-types';

import { styles } from '../stylesheets/typePickerSheet';

export default class TypeCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card row style={styles.card} height={66} onPress={this.props.onPress}>
            <View style={styles.svgContainer}>
              <Image source={this.props.imageSrc} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {this.props.title}
              </Text>
            </View>
          </Card>
        )
    }
}

TypeCard.propTypes = {title: PropTypes.string.isRequired, imageSrc: PropTypes.any.isRequired, onPress: PropTypes.func.isRequired}
