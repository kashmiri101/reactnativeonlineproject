import React, { useState } from "react";
import {CheckBox,View,Text, TextInput,StyleSheet, TouchableOpacity} from "react-native"


const contact=({navigation})=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [entry,setEntry]=useState("");
    const [agree,setAgree]=useState(false);
    const submit=()=>{
        if(name=="" && email=="" && number=="" && entry==""){
         console.log("pleae enter your true value");
    }else {
         console.log(name,email);
         navigation.navigate("Home");
    }
    }
     return(
        <View style={Styles.container}>
            <Text  style={Styles.UK}>LOGIN FORM</Text>
         <View>
            <Text>Enter your name</Text>
            <TextInput  style={Styles.ak} value={name} onChangeText={(actual)=>setName(actual)}/>
         
         </View>
          <View>
          <Text>Enter your email</Text>
          <TextInput  style={Styles.ak} value={email} onChangeText={(actual)=>setEmail(actual)}/>
       
       </View>
        <View>
        <Text>Enter your number</Text>
        <TextInput  style={Styles.ak} value={number} onChangeText={(actual)=>setNumber(actual)}/>
     
     </View>
      <View>
      <Text>Enter your descriptions</Text>
      <TextInput  style={Styles.ak} value={entry} onChangeText={(actual)=>setEntry(actual)}/>
   
   </View>
   <CheckBox
        style={Styles.btn}
         value={agree}
         onValueChange={()=>setAgree(!agree)}
         color={agree ? "orange" :'grey'}
        />
     <TouchableOpacity
     onPress={submit}
     style={[Styles.btn,{
        backgroundColor:agree ? "orange" :"grey",
     }]}
     disabled={!agree}
     >
        <Text>Login</Text>
     </TouchableOpacity>

   </View>
     )

}

const Styles=StyleSheet.create({
       ak:{
         borderWidth:'2px',
         borderBottomColor:'grey',
         width:'80%',
         borderRadius:'20',
       
       },

       btn:{width:'80%',
      
       marginTop:'20px',
    },
    UK:{
       textAlign:'CENTER',
       fontSize:'20px',
    },
    container:{
         width:"80%",
         height:'auto',
         display:'flex',
         justifyContent:'center',
         margin:'70px',
    }

})

export default contact 