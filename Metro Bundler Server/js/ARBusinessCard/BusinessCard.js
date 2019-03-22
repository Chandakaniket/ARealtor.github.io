'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from 'react-viro';

export class BusinessCard extends Component {

  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false
  }

  getNoTrackingUI(){
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }/>
    )
  }



  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker target={"house"}
          onAnchorFound={
            () => this.setState({
                runAnimation: true
            })}
        >
          <ViroNode key="card">
            <ViroNode
              opacity={0} position={[0, -0.02, 0]}
              animation={{
                name:'animateImage',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                  style={styles.cardWrapper}
                >
                  <ViroImage
                    height={0.015}
                    width={0.015}
                    style={styles.image}
                    source={require('./res/avatar.png')}
                  />
                  <ViroText
                  width={1.0}
                    textClipMode="None"
                    text="2Bd 2Bth House In Big Island,950 Sq.ft "
                    scale={[.01, .01, .01]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
                <ViroFlexView
                  onTouch={() => alert("twitter")}
                  style={styles.subText}
                >
                  <ViroText
                    width={0.01}
                    height={0.01}
                    textAlign="left"
                    textClipMode="None"
                    text="757-757-7755"
                    scale={[.01, .01, .01]}
                    style={styles.textStyle}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode opacity={0} position={[0, 0, 0]}
              animation={{
                name:'animateViro',
                run: this.state.runAnimation
              }}
            >
              <ViroText text="www.homes.com"
                rotation={[-90, 0, 0]}
                scale={[.01, .01, .01]}
                style={styles.textStyle}
              />
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    )
  }


    getARScene1() {
      return (
        <ViroNode>
          <ViroARImageMarker target={"house1"}
            onAnchorFound={
              () => this.setState({
                  runAnimation: true
              })}
          >
            <ViroNode key="card">
              <ViroNode
                opacity={0} position={[0, -0.02, 0]}
                animation={{
                  name:'animateImage',
                  run: this.state.runAnimation
                  }}
              >
                <ViroFlexView
                    rotation={[-90, 0, 0]}
                    height={0.03}
                    width={0.05}
                    style={styles.card}
                >
                  <ViroFlexView
                    style={styles.cardWrapper}
                  >
                    <ViroImage
                      height={0.015}
                      width={0.015}
                      style={styles.image}
                      source={require('./res/avatar.png')}
                    />
                    <ViroText
                      textClipMode="None"
                      text="4-Bedroom House In Leesburg"
                      scale={[.015, .015, .015]}
                      style={styles.textStyle}
                    />
                  </ViroFlexView>
                  <ViroFlexView
                    onTouch={() => alert("twitter")}
                    style={styles.subText}
                  >
                    <ViroText
                      width={0.01}
                      height={0.01}
                      textAlign="left"
                      textClipMode="None"
                      text="@GadkariHrishi"
                      scale={[.01, .01, .01]}
                      style={styles.textStyle}
                    />
                    <ViroAnimatedImage
                      height={0.01}
                      width={0.01}
                      loop={true}
                      source={require('./res/tweet.gif')}
                    />
                  </ViroFlexView>
                </ViroFlexView>
              </ViroNode>
              <ViroNode opacity={0} position={[0, 0, 0]}
                animation={{
                  name:'animateViro',
                  run: this.state.runAnimation
                }}
              >
                <ViroText text="www.homes.com"
                  rotation={[-90, 0, 0]}
                  scale={[.01, .01, .01]}
                  style={styles.textStyle}
                />
              </ViroNode>
            </ViroNode>
          </ViroARImageMarker>
        </ViroNode>
      )
    }


        getARScene2() {
          return (
            <ViroNode>
              <ViroARImageMarker target={"house2"}
                onAnchorFound={
                  () => this.setState({
                      runAnimation: true
                  })}
              >
                <ViroNode key="card">
                  <ViroNode
                    opacity={0} position={[0, -0.02, 0]}
                    animation={{
                      name:'animateImage',
                      run: this.state.runAnimation
                      }}
                  >
                    <ViroFlexView
                        rotation={[-90, 0, 0]}
                        height={0.03}
                        width={0.05}
                        style={styles.card}
                    >
                      <ViroFlexView
                        style={styles.cardWrapper}
                      >
                        <ViroImage
                          height={0.015}
                          width={0.015}
                          style={styles.image}
                          source={require('./res/avatar.png')}
                        />
                        <ViroText
                          textClipMode="None"
                          text="3-Bedroom House In Great Bridge"
                          scale={[.015, .015, .015]}
                          style={styles.textStyle}
                        />
                      </ViroFlexView>
                      <ViroFlexView
                        onTouch={() => alert("twitter")}
                        style={styles.subText}
                      >
                        <ViroText
                          width={0.01}
                          height={0.01}
                          textAlign="left"
                          textClipMode="None"
                          text="@GadkariHrishi"
                          scale={[.01, .01, .01]}
                          style={styles.textStyle}
                        />
                        <ViroAnimatedImage
                          height={0.01}
                          width={0.01}
                          loop={true}
                          source={require('./res/tweet.gif')}
                        />
                      </ViroFlexView>
                    </ViroFlexView>
                  </ViroNode>
                  <ViroNode opacity={0} position={[0, 0, 0]}
                    animation={{
                      name:'animateViro',
                      run: this.state.runAnimation
                    }}
                  >
                    <ViroText text="www.homes.com"
                      rotation={[-90, 0, 0]}
                      scale={[.01, .01, .01]}
                      style={styles.textStyle}
                    />
                  </ViroNode>
                </ViroNode>
              </ViroARImageMarker>
            </ViroNode>
          )
        }

        getARScene3() {
          return (
            <ViroNode>
              <ViroARImageMarker target={"house3"}
                onAnchorFound={
                  () => this.setState({
                      runAnimation: true
                  })}
              >
                <ViroNode key="card">
                  <ViroNode
                    opacity={0} position={[0, -0.02, 0]}
                    animation={{
                      name:'animateImage',
                      run: this.state.runAnimation
                      }}
                  >
                    <ViroFlexView
                        rotation={[-90, 0, 0]}
                        height={0.03}
                        width={0.05}
                        style={styles.card}
                    >
                      <ViroFlexView
                        style={styles.cardWrapper}
                      >
                        <ViroImage
                          height={0.015}
                          width={0.015}
                          style={styles.image}
                          source={require('./res/avatar.png')}
                        />
                        <ViroText
                          textClipMode="None"
                          text="6-Bedroom House In Henrico"
                          scale={[.015, .015, .015]}
                          style={styles.textStyle}
                        />
                      </ViroFlexView>
                      <ViroFlexView
                        onTouch={() => alert("twitter")}
                        style={styles.subText}
                      >
                        <ViroText
                          width={0.01}
                          height={0.01}
                          textAlign="left"
                          textClipMode="None"
                          text="@DabadeAkshay"
                          scale={[.01, .01, .01]}
                          style={styles.textStyle}
                        />
                        <ViroAnimatedImage
                          height={0.01}
                          width={0.01}
                          loop={true}
                          source={require('./res/tweet.gif')}
                        />
                      </ViroFlexView>
                    </ViroFlexView>
                  </ViroNode>
                  <ViroNode opacity={0} position={[0, 0, 0]}
                    animation={{
                      name:'animateViro',
                      run: this.state.runAnimation
                    }}
                  >
                    <ViroText text="www.homes.com"
                      rotation={[-90, 0, 0]}
                      scale={[.01, .01, .01]}
                      style={styles.textStyle}
                    />
                  </ViroNode>
                </ViroNode>
              </ViroARImageMarker>
            </ViroNode>
          )
        }

        getARScene4() {
          return (
            <ViroNode>
              <ViroARImageMarker target={"house4"}
                onAnchorFound={
                  () => this.setState({
                      runAnimation: true
                  })}
              >
                <ViroNode key="card">
                  <ViroNode
                    opacity={0} position={[0, -0.02, 0]}
                    animation={{
                      name:'animateImage',
                      run: this.state.runAnimation
                      }}
                  >
                    <ViroFlexView
                        rotation={[-90, 0, 0]}
                        height={0.03}
                        width={0.05}
                        style={styles.card}
                    >
                      <ViroFlexView
                        style={styles.cardWrapper}
                      >
                        <ViroImage
                          height={0.015}
                          width={0.015}
                          style={styles.image}
                          source={require('./res/avatar.png')}
                        />
                        <ViroText
                          textClipMode="None"
                          text="5-Bedroom House In Timberville"
                          scale={[.015, .015, .015]}
                          style={styles.textStyle}
                        />
                      </ViroFlexView>
                      <ViroFlexView
                        onTouch={() => alert("twitter")}
                        style={styles.subText}
                      >
                        <ViroText
                          width={0.01}
                          height={0.01}
                          textAlign="left"
                          textClipMode="None"
                          text="@GadkariHrishi"
                          scale={[.01, .01, .01]}
                          style={styles.textStyle}
                        />
                        <ViroAnimatedImage
                          height={0.01}
                          width={0.01}
                          loop={true}
                          source={require('./res/tweet.gif')}
                        />
                      </ViroFlexView>
                    </ViroFlexView>
                  </ViroNode>
                  <ViroNode opacity={0} position={[0, 0, 0]}
                    animation={{
                      name:'animateViro',
                      run: this.state.runAnimation
                    }}
                  >
                    <ViroText text="www.homes.com"
                      rotation={[-90, 0, 0]}
                      scale={[.01, .01, .01]}
                      style={styles.textStyle}
                    />
                  </ViroNode>
                </ViroNode>
              </ViroARImageMarker>
            </ViroNode>
          )
        }

        getARScene5() {
          return (
            <ViroNode>
              <ViroARImageMarker target={"house5"}
                onAnchorFound={
                  () => this.setState({
                      runAnimation: true
                  })}
              >
                <ViroNode key="card">
                  <ViroNode
                    opacity={0} position={[0, -0.02, 0]}
                    animation={{
                      name:'animateImage',
                      run: this.state.runAnimation
                      }}
                  >
                    <ViroFlexView
                        rotation={[-90, 0, 0]}
                        height={0.03}
                        width={0.05}
                        style={styles.card}
                    >
                      <ViroFlexView
                        style={styles.cardWrapper}
                      >
                        <ViroImage
                          height={0.015}
                          width={0.015}
                          style={styles.image}
                          source={require('./res/avatar.png')}
                        />
                        <ViroText
                          textClipMode="None"
                          text="4-Bedroom House In Hanover"
                          scale={[.015, .015, .015]}
                          style={styles.textStyle}
                        />
                      </ViroFlexView>
                      <ViroFlexView
                        onTouch={() => alert("twitter")}
                        style={styles.subText}
                      >
                        <ViroText
                          width={0.01}
                          height={0.01}
                          textAlign="left"
                          textClipMode="None"
                          text="@GadkariHrishi"
                          scale={[.01, .01, .01]}
                          style={styles.textStyle}
                        />
                        <ViroAnimatedImage
                          height={0.01}
                          width={0.01}
                          loop={true}
                          source={require('./res/tweet.gif')}
                        />
                      </ViroFlexView>
                    </ViroFlexView>
                  </ViroNode>
                  <ViroNode opacity={0} position={[0, 0, 0]}
                    animation={{
                      name:'animateViro',
                      run: this.state.runAnimation
                    }}
                  >
                    <ViroText text="www.homes.com"
                      rotation={[-90, 0, 0]}
                      scale={[.01, .01, .01]}
                      style={styles.textStyle}
                    />
                  </ViroNode>
                </ViroNode>
              </ViroARImageMarker>
            </ViroNode>
          )
        }


  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene1() }
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene2() }
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene3() }
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene4() }
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene5() }
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroARTrackingTargets.createTargets({
  "house" : {
    source : require('./res/house.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});


ViroARTrackingTargets.createTargets({
  "house1" : {
    source : require('./res/house1.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});



ViroARTrackingTargets.createTargets({
  "house2" : {
    source : require('./res/house2.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});



ViroARTrackingTargets.createTargets({
  "house3" : {
    source : require('./res/house3.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});



ViroARTrackingTargets.createTargets({
  "house4" : {
    source : require('./res/house4.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});



ViroARTrackingTargets.createTargets({
  "house5" : {
    source : require('./res/house5.png'),
    orientation : "Up",
    physicalWidth : 0.05 // real world width in meters
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)"
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)"
  }
});

ViroAnimations.registerAnimations({
  animateImage:{
    properties:{
      positionX: 0.05,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing:"Bounce",
    duration: 500
  }
});

module.exports = BusinessCard;
