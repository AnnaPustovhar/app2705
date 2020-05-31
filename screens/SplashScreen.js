import React from 'react';
import { View, Text, ActivityIndicator, AsyncStorage} from 'react-native';


class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null 
      }
    
      componentWillMount(){
      setTimeout(
            () => {
               this.props.navigation.navigate('Home')
               }, 1000)
    
              }
    
      render() {
        return (
          <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>
            YourBestJob app
        </Text>
        <ActivityIndicator color={'white'}/> 
      </View>
         );
        }
      }
      const styles = {
        viewStyles: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'paleturquoise'
        },
        textStyles: {
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold'
        }
      }
      export default SplashScreen;