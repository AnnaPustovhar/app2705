import React from "react";
import {View, Text, Image, Button, TouchableOpacity, StyleSheet,TouchableWithoutFeedback, Animated,  } from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, HeaderTitle,createSwitchNavigato} from '@react-navigation/stack';


import Dashboard from "./screens/Dashboard";
import Messages from "./screens/Messages";
import Contact from "./screens/Contact";
import SplashScreez from "./screens/SplashScreen";


const Drawer = createDrawerNavigator ();
const Stack = createStackNavigator ();

//create stacks for each screen
//create header button to show the drawer




const Screens = ({navigation}) => {
    return(
       <Stack.Navigator screenOptions= {{
           headerTransparent: true,
           HeaderTitle: null,
           headerLeft: () => (
               <TouchableOpacity style = {styles.MenuIcon} onPress={()=> navigation.openDrawer()}>
                  <Icon name="align-justify" color="grey" size={16} />
               </TouchableOpacity>
           )
       }}
       
       >
        
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
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
          icon={()=> <Icon name="dashboard" color="red" size={16}/>}
        />
        <DrawerItem
          label="Messages"
          labelStyle= {{ marginLeft: -15}}
          onPress={() => props.navigation.navigate("Messages")}
          icon={()=> <Icon name="envelope-o" color="red" size={16}/>}
        />
        <DrawerItem
          label="Contact"
          labelStyle= {{ marginLeft: -12}}
          onPress={() => props.navigation.navigate("Contact")}
          icon={()=> <Icon name="phone" color="red" size={18}/>}
        />
    
        </View>
    </DrawerContentScrollView>
    )
}

export default () => {
    return (
     <Drawer.Navigator 
     initialRouteName="Dashboard"
     drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Screens" component={Screens} />
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
