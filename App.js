
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Drawer from "./Drawer";


export default function App () {
  return (
    
    <NavigationContainer>
    
      <Drawer/>
       {/* <View style={styles.container}>
           <Text > We are building drawer menu using</Text>
           <Text>react-navigation v5 </Text>
        </View> */}
    </NavigationContainer>
  );

}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  
});