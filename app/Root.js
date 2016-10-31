import firebase from './firebase';
import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import Authentication from './screens/Authentication';
import SwimmerDashboard from './screens/SwimmerDashboard';
const styles = require('./styles.js');

export default class blueSwimmer extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  render() {
    return(
      <NavigatorIOS
        ref="navigator"
        initialRoute={
          (this.state.user ?
            { component: SwimmerDashboard, title: 'Welcome', user: this.state.user } :
            { component: Authentication, title: 'Sign In' }
          )
        }
        style={{flex: 1}}
      />
    )
  }
}
