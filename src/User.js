import React, { useEffect, useState } from "react";
import {FlatList, Text,View,Image,StyleSheet} from "react-native"

const User=()=>{
    const [show,setShow]=useState([]);


    const getdata=async()=>{
        const ak=await fetch("https://thapatechnical.github.io/userapi/users.json");
        const data=await ak.json();
        setShow(data);
    }
    const ak=({item})=>{
        return <View style={styles.container}>
          
           <Image style={styles.edit} source={item.image} />
            <View style={styles.ck}>
            <Text style={styles.vk}>ATHAR HUSSAIN</Text>
            <Text style={styles.vk}>GHULAM HUSSAIN</Text>
            <Text style={styles.vk}>ATHARH1678@GMIAL.COM</Text>
            <Text style={styles.vk}>03030737281</Text>
            </View>
           
        </View>
    }
     
     useEffect(()=>{
       getdata();

     },[])
     return(<View>
         <FlatList showsVerticalScrollIndicator={false} horizontal data={show} renderItem={ak} />
        <FlatList data={show} renderItem={ak} />
          


     </View>
       
     )

}

const styles=StyleSheet.create({
      edit:{
         width:'100%',
         height:'300px',
         aspectRatio:1,
         shadowColor:'grey',
         shadowOffset:{width:'10px',height:'10px'},
         shadowOpacity:0.5,
      },
      container:{
        width: "100%",
    minHeight: "100%",
   
    backgroundColor: "#ebedee",
   
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'grey',
    shadowOffset:{width:10,height:10},
    shadowOpacity:0.5,
   
    
        
      },
      vk:{
         fontSize:'20px',
         color:'grey',
         padding:'5px',


         
      },
      ck:{
        width: 300,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 5,
        margin: 20,
        textAlign:'center',
        borderColor:'orange',
        borderWidth:'0.5px',
      }
})

export default User; 