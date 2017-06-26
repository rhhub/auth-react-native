import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBW0Sb1wp0cmNhzx6V3D424Rthi_10o-KU',
      authDomain: 'auth-13e69.firebaseapp.com',
      databaseURL: 'https://auth-13e69.firebaseio.com',
      projectId: 'auth-13e69',
      storageBucket: 'auth-13e69.appspot.com',
      messagingSenderId: '591760752756'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderConent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderConent() }
      </View>
    );
  }
}

export default App;
