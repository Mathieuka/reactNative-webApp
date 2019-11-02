import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, Button} from 'react-native';

const message = Platform.select({
  android: 'An Android application designed with React Native',
  ios: 'An iOS application designed with React Native',
  web: 'A Web application designed with React Native Web',
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {t: 0};
  }

  componentDidMount() {
    setInterval(() => this.setState(state => ({t: state.t + 0.1})), 1000 / 60);
  }

  render() {
    const translateY = Math.sin(this.state.t) * 15;
    const opacity = (Math.sin(this.state.t / 2) + 1) / 2;
    return (
      <View style={styles.container}>
        <Image
          source={require('./betomorrow.png')}
          style={[styles.image, {transform: [{translateY}]}]}
        />
        <Text style={[styles.text, {opacity}]}>{message}</Text>
        <Button title="Blue Button" onPress={e => console.log(e)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    margin: 40,
    textAlign: 'center',
    fontSize: 20,
    color: '#333344',
  },
  image: {
    width: 80,
    height: 80,
  },
});
