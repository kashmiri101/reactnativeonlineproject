import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import About from './src/About';
import User from './src/User';
import contact from './src/Contact';
import data from './src/Data';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home"component={Home} options={{
         headerTitleStyle:{
           fontSize:'30px',
           backgroundColor:'black',
           color:'orange',
           
           
         },
         headerTitleAlign:'center',
         headerTitle:'H :  O  :  M  :  E  ',
      }}/>
      <Stack.Screen name="About" component={About} 
      options={{
        headerTitleStyle:{
          fontSize:'30px',
          backgroundColor:'black',
          color:'orange',
          
        },
        headerTitleAlign:'center',
        headerTitle:'A :  B  :  O  :  U : T ',
       
     }}/>
      <Stack.Screen name="User" component={User} 
      options={{
        headerTitleStyle:{
          fontSize:'30px',
          backgroundColor:'black',
          color:'orange',
          
        },
        headerTitleAlign:'center',
        headerTitle:'U :  S  :  E  :  R ',
        
     }}
      />
      <Stack.Screen name="contact" component={contact}
      options={{
        headerTitleStyle:{
          fontSize:'30px',
          backgroundColor:'black',
          color:'orange',
        
          
          
        },
        headerTitleAlign:'center',
        headerTitle:'C:O:N:T:A:C:T',
        
     }}
      />
      <Stack.Screen name="data" component={data} 
      options={{
        headerTitleStyle:{
          fontSize:'30px',
          backgroundColor:'black',
          color:'orange',
          
        },
        headerTitleAlign:'center',
        headerTitle:'D :  A  :  T  :  A',
        
     }}
      />
     
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
