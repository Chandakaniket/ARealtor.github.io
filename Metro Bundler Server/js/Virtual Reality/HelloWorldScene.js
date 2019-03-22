'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
    ViroSound,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/H10.jpg')} />
        <ViroText text="Welcome to the reality" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
            <ViroSound paused={false} muted={false}
                  minDistance={5} maxDistance={8}
                  position={[0, 0, 0]}
                source={require("./res/sound.mp3")}
    />
      </ViroScene>
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldScene;
