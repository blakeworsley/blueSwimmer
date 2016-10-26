import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import firebase, { usersRef } from '../firebase';
import SwimmerDashboard from './SwimmerDashboard';
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
      teamName: null,
    };
  }

  goToSwimmerDashboard() {
    this.props.navigator.push({
      component: SwimmerDashboard,
      title: 'SwimmerDashboard',
    });
  }

  handleNewUser() {
    firebase.auth().createUserWithEmailAndPassword(this.state.emailAddress, this.state.password)
      .then(() => { firebase.database().ref('users').push({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailAddress: this.state.emailAddress,
          teamName: this.state.teamName,
        });
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
    );
  }

  focusNextField(nextField){
    this.refs[nextField].focus();
  }

  checkForFullFields(){
    if(this.state.firstName === null ||
      this.state.lastName === null ||
      this.state.emailAddress === null ||
      this.state.password === null ||
      this.state.teamName === null
    ) { return false; }
    else { return true; }
  }

  render() {
    return (
      <View style={styles.containerCenter}>
        <View style={styles.containerCenter}>
          <TextInput
            ref="1"
            style={styles.newUserInput}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
            placeholder="First Name"
            returnKeyType="next"
            onSubmitEditing={() => {
              if(this.state.firstName){
                return this.focusNextField('2')
              } else {
                return alert('Must Enter UserName')
              }
            }}
            blurOnSubmit={false}
          />
          <TextInput
            ref="2"
            style={styles.newUserInput}
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
            placeholder="Last Name"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('3')}
            blurOnSubmit={false}
          />
          <TextInput
            ref="3"
            style={styles.newUserInput}
            onChangeText={(emailAddress) => this.setState({emailAddress})}
            value={this.state.emailAddress}
            placeholder="Email Address"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('4')}
            blurOnSubmit={false}
            autoCapitalize="none"
          />
          <TextInput
            ref="4"
            style={styles.newUserInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Password"
            returnKeyType="next"
            onSubmitEditing={() => this.focusNextField('5')}
            blurOnSubmit={false}
            secureTextEntry={true}
          />
          <TextInput
            ref="5"
            style={styles.newUserInput}
            onChangeText={(teamName) => this.setState({teamName})}
            value={this.state.teamName}
            placeholder="Team Name"
            returnKeyType="done"
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              if(this.checkForFullFields()){
                this.handleNewUser();
                this.goToSwimmerDashboard();
              }
              else { alert('Please complete all fields before submitting')}
            }}
          >
            <Text style={styles.button}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

module.exports = Register;
