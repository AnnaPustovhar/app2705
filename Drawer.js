import React from "react";
import {View, Text, Image, Button, TouchableOpacity, StyleSheet,TouchableWithoutFeedback  } from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, HeaderTitle,createSwitchNavigato} from '@react-navigation/stack';


import Dashboard from "./screens/Dashboard";
import Messages from "./screens/Messages";
import Contact from "./screens/Contact";

import Animated from "react-native-reanimated";
import SplashScreen from "./screens/SplashScreen";


const Drawer = createDrawerNavigator ();
const Stack = createStackNavigator ();

//create stacks for each screen
//create header button to show the drawer




const Screens = ({navigation}) => {
    return(
        <Animated.View style={[{ flex: 1}]}>
             <Stack.Navigator screenOptions= {{
             headerTransparent: true,
             HeaderTitle: null,
             headerLeft: () => (
               <TouchableOpacity style = {styles.MenuIcon} onPress={()=> navigation.openDrawer()}>
                  <Icon name="align-justify" color="grey" size={16} />
               </TouchableOpacity>
             )
             }} >
        
             <Stack.Screen name="Dashboard" component={Dashboard} />
             <Stack.Screen name="Messages" component={Messages} />
             <Stack.Screen name="Contact" component={Contact} />
             </Stack.Navigator>
        </Animated.View>

    );
};

// build custom drawer menu
const DrawerContent = props => {
    return (
    <DrawerContentScrollView {...props}>
       <View style={styles.LogoView}>
        {/* <Text HERE ADD AVATAR/> */}
         <View>
            <Image source={require ('./src/logo.png')} style = {styles.LogoClass} />
         </View>

         <DrawerItem
          label="Dashboard"
          labelStyle= {{ marginLeft: -16}}
          onPress={() => props.navigation.navigate("Dashboard")}
          icon={()=> <Icon name="dashboard" color="black" size={16}/>}
         />
         <DrawerItem
          label="Messages"
          labelStyle= {{ marginLeft: -15}}
          onPress={() => props.navigation.navigate("Messages")}
          icon={()=> <Icon name="envelope-o" color="black" size={16}/>}
         />
         <DrawerItem
          label="Contact"
          labelStyle= {{ marginLeft: -12}}
          onPress={() => props.navigation.navigate("Contact")}
          icon={()=> <Icon name="phone" color="black" size={18}/>}
         />
    
        </View>
    </DrawerContentScrollView>
    )
}

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    
    const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
    });


    const animatedStyle = { borderRadius, transform: [{ scale }] };


    return (
     <Drawer.Navigator 
     drawerType="slide"
     overlayColor="transparent"
    //  initialRouteName="Dashboard"
     drawerContentOptions={{
         activeBackgroundColor: 'transparent',
         activeTintColor: 'blue',
         inactiveTintColor: 'blue',
     }}
     sceneContainerStyle={{backgroundColor:"blue"}}
     drawerContent={(props) => {
         setProgress(props.progress);
        // console.log("progress", props.progress);
     return <DrawerContent {...props} />
    }}>
        <Drawer.Screen name="Screens"  >
            {props => <Screens {...props} style={animatedStyle}/>}
        </Drawer.Screen>
     </Drawer.Navigator>
    );
};


const styles = StyleSheet.create ({
    LogoClass: {
        height: 60,
        width:60,
        left: 14,
        top: 3,
    
    },

   MenuIcon:{
        top: -1,
        left: 15


   }
});
