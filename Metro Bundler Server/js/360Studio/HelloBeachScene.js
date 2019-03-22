'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  Viro360Image,
  ViroBox,
  ViroMaterials,
} from 'react-viro';

export default class HelloBeachScene extends Component {
  constructor() {
    super();
  
    this.state = {} // initialize state
    this._showHelloBeachSceneLeft = this._showHelloBeachSceneLeft.bind(this);
  
    this._showHelloWorldSceneRight = this._showHelloWorldSceneRight.bind(this);
  }
  
  render() {
    return (
      <ViroScene >
        <Viro360Image source={require('./res/5.jpg')} />
        <ViroBox position={[2, -1, 1]} scale={[.7,.7,0]} materials={["left"]} onClick={this._showHelloBeachSceneLeft} />
        <ViroBox position={[-3, -1, 3]} scale={[.7,.7,0]} materials={["left"]}  onClick={this._showHelloWorldSceneRight} />
      </ViroScene>
    );
  }

  _showHelloBeachSceneLeft() {
    this.props.sceneNavigator.push({scene:require("./HelloBeachSceneLeft.js")});
  }
  _showHelloWorldSceneRight() {
    this.props.sceneNavigator.push({scene:require("./HelloBeachSceneRight.js")});
  }


}

module.exports = HelloBeachScene;