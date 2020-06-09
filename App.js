/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Support" component={Support} />
    </Stack.Navigator>
    </NavigationContainer>  
    );
}

function Home(props) {
  return (
    <View>
      <TouchableHighlight
        underlayColor={'#dfdfdf'}
        onPress={() => console.log('Pressed')}
        style={{backgroundColor: 'red', height: 200, width: '100%'}}>
        <Text>CLICK ME!!!!!!</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'blue'}
        onPress={() => props.navigation.navigate('Support')}
        style={{backgroundColor: 'skyblue', height: 200, width: '100%'}}>
        <Text>Navigate to support</Text>
      </TouchableHighlight>
    </View>
  );
}

function Support() {
  return <View />;
}
