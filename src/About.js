import React from "react";
import {FlatList, Text, View,StyleSheet,Image,styles} from "react-native"
import about from "./API/about"

const About=()=>{
     const aboutdata=({item})=>{
         return <View  style={style.header}>
               <View >
              <Text style={style.ak} >{item.course}</Text>
              </View>
              <View >
                 <Image
                 style={style.vk}
                 resizeMode="contain"
                 source={item.image} />
                  <Text style={style.one} >{item.description}</Text>
                  <Text style={style.two}>{item.course1}</Text>
                  <Text style={style.three}>{item.course2}</Text>
                  <Text style={style.four}>{item.course3}</Text>
                  <Text style={style.five}>{item.price}</Text>
              </View>
             
              
         </View>
     }
     return(
          <View>
            <FlatList
           
            data={about}
            renderItem={aboutdata}
            keyExtractor={(item)=>item.id}
            
            />
       
         </View>
     )

}

const style=StyleSheet.create({
     ak:{
        fontSize:'20px',
        color:'orange',
        textTransform:'capitalize',
        textAlign:'center',
     },
     header:{
         
         borderWidth:'0.5PX',
         borderColor:'gray',
         width:'100%',
         height:'400px',
         marginRight:'5%',
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
         flexDirection:'column',
         textAlign:'center',
         borderBottomRightRadius:'25%',
         borderTopStartRadius:'25%',
         borderRightWidth:'10px',
         borderLeftColor:'orange',
         borderRightColor:'orange',
         paddingHorizontal:'20px',
         shadowColor:'grey',
         shadowOffset:{width:0,height:0},
         shadowOpacity:0.5,
      

         
         
        
     },
     one:{
        fontSize:'20px',
     },
     two:{
        fontSize:'25px',
        color:'red',
        textTransform:'uppercase',
     },
     three:{
        fontSize:'25px',
        color:'pink',
        textTransform:'uppercase',
     },
     four:{
        fontSize:'25px',
        color:'purple',
        textTransform:'uppercase',
     },
     five:{
         color:'gray',
         fontSize:'20px',
     },
     vk:{
         width:'100%',
         height:'100px',
         aspectRatio:1,
         marginTop:'10px',
     }
})

export default About 