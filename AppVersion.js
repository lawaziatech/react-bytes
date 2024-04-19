import { Text, View } from 'react-native'
import React, { Component } from 'react'
import packagejson from '../package.json';

export default class AppVersion extends Component {
  render() {
    return (
      <View>
        <Text>v {packagejson.version}</Text>
      </View>
    )
  }
}