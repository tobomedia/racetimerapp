'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';


export default class App extends Component {
    render() {
        return (
                <Camera style={{flex: 1}}
                        ref={cam => this.camera=cam}
                        aspect={Camera.constants.Aspect.fill}>

                </Camera>
        );
    }
}

AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);
