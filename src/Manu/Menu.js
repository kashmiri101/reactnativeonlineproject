

import { useNavigation } from "@react-navigation/native";
import React from "react";

import {StyleSheet, Text,TouchableOpacity,View,Image} from "react-native"

const Menu=()=>{
      const navigation=useNavigation();
        return(
         <View style={styles.ak}>
           <TouchableOpacity
           onPress={()=>navigation.navigate('About')}
           >
              <Text>About</Text>

            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={()=>navigation.navigate('contact')}
            >
            <Text>Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity
          onPress={()=>navigation.navigate('data')}
            >
            <Text>data</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>navigation.navigate('User')}
            >
            <Text>Userdata</Text>
            </TouchableOpacity>
         </View>
     )

}

const styles=StyleSheet.create({
     ak:{
         marginTop:'10px',
         textAlign:'center',
         flexDirection:'row',
         justifyContent:'space-around',

     },
     
     iconStytle:{
      width:'100%',
      height:'300px',
      aspectRatio:1,


  }
     

})

export default Menu; 