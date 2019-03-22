'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroBox,
  ViroMaterials,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {
      text : "",
    }

    // bind this to the class functions
    this._onBoxHover = this._onBoxHover.bind(this);
     this._showHelloBeachScene = this._showHelloBeachScene.bind(this);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/6.jpg')} />
        
        <ViroBox position={[4, 1, 9]} scale={[.7,.7,0]} materials={["grid"]}  onClick={this._showHelloBeachScene} />
      </ViroScene>
    );
  }
   _onBoxHover(isHovering) {
    let text = isHovering ? "Click Info Icon to start tour" : "";
    this.setState({
      text
    });
  }
_showHelloBeachScene() {
    this.props.sceneNavigator.push({scene:require("./HelloBeachScene.js")});
  }
}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/icon_info.png'),
  },
  left: {
    diffuseTexture: require('./res/icon_back.png'),
  },
});
var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldScene;
