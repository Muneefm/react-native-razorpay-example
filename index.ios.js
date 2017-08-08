/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableHighlight,
    NativeModules,
    NativeEventEmitter
} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';


export default class RazorPay extends Component {
  render() {
      console.log('rendering')

      return (
      <View style={styles.container}>
          <TouchableHighlight onPress={() => {
              console.log('onPress ')

              var options = {
                  description: 'Credits towards consultation',
                  image: 'https://i.imgur.com/3g7nmJC.png',
                  currency: 'INR',
                  key: 'rzp_test_1DP5mmOlF5G5ag',
                  amount: '5000',
                  external: {
                      wallets: ['paytm']
                  },
                  name: 'foo',
                  prefill: {
                      email: 'akshay@razorpay.com',
                      contact: '8955806560',
                      name: 'Akshay Bhalotia'
                  },
                  theme: {color: '#F37254'}
              }
              RazorpayCheckout.open(options).then((data) => {
                  // handle success
                  console.log('razorpay success ')

                  alert(`Success: ${data.razorpay_payment_id}`);
              }).catch((error) => {
                  // handle failure
                  console.log('razorpay failure ')
                  alert(`Error: ${error.code} | ${error.description}`);
              });
              RazorpayCheckout.onExternalWalletSelection(data => {
                  alert(`External Wallet Selected: ${data.name} | ${data.details}`);
              });
          }}>
              <Text style = {styles.text}>Pay</Text>
          </TouchableHighlight>
      </View>




      /*<View style={styles.container}>


              <Text onPress={() => {
                  console.log('on press razor pay')
                  var options = {
                      description: 'Credits towards consultation',
                      image: 'https://i.imgur.com/3g7nmJC.png',
                      currency: 'INR',
                      key: 'rzp_test_1DP5mmOlF5G5ag',
                      amount: '5000',
                      name: 'foo',
                      prefill: {
                          email: 'akshay@razorpay.com',
                          contact: '8955806560',
                          name: 'Akshay Bhalotia'
                      },
                      theme: {color: '#F37254'}
                  }
                  RazorpayCheckout.open(options).then((data) => {
                      // handle success
                      console.log('razor pay success')

                      alert(`Success: ${data.razorpay_payment_id}`);
                  }).catch((error) => {
                      // handle failure
                      console.log('razor pay error console')

                      alert(`Error: ${error.code} | ${error.description}`);
                  });
              }}>Pay</Text>

      </View>*/
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

AppRegistry.registerComponent('RazorPay', () => RazorPay);
