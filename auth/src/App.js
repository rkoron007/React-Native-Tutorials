import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDX8pVejVZjog7ircIeL2AyHQe5wfEdtRI",
      authDomain: "auth-626ba.firebaseapp.com",
      databaseURL: "https://auth-626ba.firebaseio.com",
      projectId: "auth-626ba",
      storageBucket: "auth-626ba.appspot.com",
      messagingSenderId: "302090039559"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
      return(
        <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
      );
      case false:
        return <LoginForm />;
      default:
      return <Spinner size="large" />;
      }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
