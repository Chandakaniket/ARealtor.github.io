'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  Viro360Image,

} from 'react-viro';

export default class HelloBeachSceneLeft extends Component {
  constructor() {
    super();
  
    this.state = {} // initialize state
  
    this._showHelloWorldScene = this._showHelloWorldScene.bind(this);
  }
  
  render() {
    return (
      <ViroScene onClick={this._showHelloWorldScene}>
        <Viro360Image source={require('./res/3.jpg')} />
        
      </ViroScene>
    );
  }

  _showHelloWorldScene() {
    this.props.sceneNavigator.pop();
  }

}

module.exports = HelloBeachSceneLeft;