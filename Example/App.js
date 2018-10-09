/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgressHUD from '@blankapp/plugin-progresshud';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handlePressShowProgress = this.handlePressShowProgress.bind(this);

    this.progress = 0;
  }
  
  handlePressShow() {
    ProgressHUD.show('');
    ProgressHUD.dismiss(2000);
  }

  handlePressShowLoading() {
    ProgressHUD.show('Loading...');
    ProgressHUD.dismiss(2000);
  }

  handlePressShowInfo() {
    ProgressHUD.showInfo('This is info message');
    ProgressHUD.dismiss(2000);
  }

  handlePressShowSuccess() {
    ProgressHUD.showSuccess('This is success message');
    ProgressHUD.dismiss(2000);
  }

  handlePressShowError() {
    ProgressHUD.showError('This is error message');
    ProgressHUD.dismiss(2000);
  }

  handlePressShowProgress() {
    this.showProgressTimer = setInterval(() => {
      this.progress = (this.progress || 0) + 1;
      ProgressHUD.showProgress(this.progress, 'This is progress message');
      if (this.progress >= 100) {
        clearInterval(this.showProgressTimer);
        ProgressHUD.dismiss(0);
        this.progress = 0;
      }
    }, 100)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePressShow}>
          <Text>
            ProgressHUD.show()
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressShowLoading}>
          <Text>
            ProgressHUD.show('Loading')
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressShowInfo}>
          <Text>
            ProgressHUD.showInfo('This is info message')
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressShowSuccess}>
          <Text>
          ProgressHUD.showSuccess('This is success message')
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressShowError}>
          <Text>
            ProgressHUD.showError('This is error message')
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePressShowProgress}>
          <Text>
            ProgressHUD.showProgress(50, 'This is progress message')
          </Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
