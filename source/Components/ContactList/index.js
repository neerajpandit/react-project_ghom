import React ,{useState}from 'react'
import {View,Text,Image,StyleSheet, SafeAreaView,Pressable} from 'react-native';


const ContactList = ({ chat,selectedMessages}) => {

    return(
        <SafeAreaView style={styles.container}>
        
                <Image 
                    source={{uri:chat.user.image}}
                    style = { styles.image}  /> 
                <View  >
                    <View >
                        <Text numberOfLines={1} style={styles.name}>
                            {chat.user.name}
                        </Text> 
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.status}>
                            {chat.user.status}
                        </Text> 
                     </View>  
                    </View>
                 
                    
        </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container : {
       // borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'grey',
        marginVertical : 5,
        marginHorizontal : 10,
        height : 70,
        flexDirection : 'row',
        flex : 1,
              
   },
    image:{
       width : 50,
       height: 50,
       borderRadius:25,
       marginRight: 10,
       justifyContent :'space-around',
       marginBottom:5
    },
  
    name : {
        fontWeight : 400,
        marginVertical : 7,
        fontSize : 16
      
       
    },
    status:{
        color : 'grey',
        fontSize:15

    }

});

export default ContactList;