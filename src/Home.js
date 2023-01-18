import React from "react";
import { View,StyleSheet,Text,Image} from "react-native";
import Menu from "./Manu/Menu";

const Home=()=>{
      return(
          <View style={style.container}>
            <View style={style.header}>
            <Image style={style.new}  source={('https://picsum.photos/200/300')}/>
            <Text style={style.ak}>WELCOME TO</Text>
            <Text style={style.nk}>ATHAR HUSSAIN</Text>
            <Text style={style.bk}>Education websites are often the first port of call for parents and students wanting to learn more about a school, university, college or online training course before deciding to visit or choose it. Such sites play a very important role in helping schools, online courses or other educational organizations to attract students. </Text>
            <View style={style.line}></View>
           <Menu />
            </View>
          
          </View>
      )


}
const style=StyleSheet.create({
      container:{
             display:'flex',
             justifyContent:'center',
             alignItems:'center',

      },
      ak:{
         color:'blue',
         fontSize:'30px',
         textAlign:'center',
      },
      nk:{
         color:'orange',
         fontSize:'40px',
         marginTop:'2px',
         marginLeft:'10px',
         textAlign:'center',
         

      },
      bk:{
        color:'purple',
        fontSize:'10px',
        marginLeft:'5%',
        marginRight:'5%',
        textAlign:'center',
    

     },
     new:{
         width:'100%',
         height:'300px',
         aspectRatio:1,


     },
     line:{
       borderWidth:0.5,
       borderBottomColor:'gray',
       margin:'20px',
       marginTop:'130px',
     }
})




export default Home;