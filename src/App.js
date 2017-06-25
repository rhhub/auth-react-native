import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBW0Sb1wp0cmNhzx6V3D424Rthi_10o-KU',
      authDomain: 'auth-13e69.firebaseapp.com',
      databaseURL: 'https://auth-13e69.firebaseio.com',
      projectId: 'auth-13e69',
      storageBucket: 'auth-13e69.appspot.com',
      messagingSenderId: '591760752756'
  });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <Text>This is awesome</Text>
      </View>
    );
  }
}

export default App;
