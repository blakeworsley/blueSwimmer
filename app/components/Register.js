import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
const styles = require('../styles.js');
const constants = styles.constants;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      emailAddress: null,
      password: null,
      teamName: null
    };
  }

  goToSwimmerDashboard() {
    this.props.navigator.push({
      component: Authorization,
      title: 'Authorization'
    });
  }

  render() {
    return (
      <View style={styles.containerCenter}>
        <View style={styles.containerCenter}>
          <TextInput
            style={styles.newUserInput}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
            placeholder="First Name"
            returnKeyType="next"
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
            placeholder="Last Name"
            returnKeyType="next"
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(emailAddress) => this.setState({emailAddress})}
            value={this.state.emailAddress}
            placeholder="Email Address"
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            returnKeyType="next"
          />
          <TextInput
            style={styles.newUserInput}
            onChangeText={(teamName) => this.setState({teamName})}
            value={this.state.teamName}
            placeholder="Team Name"
            returnKeyType="done"
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.button}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

module.exports = Register;



// First Name
// Last Name
// Email Address
// Password
// Team Name
