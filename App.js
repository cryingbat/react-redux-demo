/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import initStore from './src/store/store';
import router from './router'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const store = initStore();
// console.log('++++++++++++++')
// console.log(store.getState())
type Props = {};
const Navigator = router.Navigator;
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
  }
}
