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
  View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {

    const image = "http://1.bp.blogspot.com/-qNg0y-A3foM/UMIbLV4P46I/AAAAAAAAT-g/TlcuaehdSSU/s1600/9-11-12-rescate_ad33362bd4aba2fd3d6fdda7217a3630.jpg";
    const name = "Rescate Band";


    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: image }}></Image>
          <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  image:{
    width: 150,
    height: 150
  },
  artistBox:{
    flexDirection: "row",
    backgroundColor: "white",
  },
  info:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  name:{
    fontSize: 20,
    marginTop: 10,
  }
});
