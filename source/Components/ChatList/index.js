import React from 'react'
import {View,Text,Image,StyleSheet, SafeAreaView} from 'react-native';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Use the relativeTime plugin to enable formatting dates as relative time strings
dayjs.extend(relativeTime);

const ChatList = ({ chat}) => {
   
  // Format the chat.lastMessage.createdAt value as a relative time string
  const formattedTime = dayjs(chat.lastMessage.createdAt).fromNow(true);

  return(
    <SafeAreaView style={styles.container}>
      
            <Image 
                source={{uri:chat.user.image}}
                style = { styles.image}  /> 
            <View style ={{flex:1}} >
                <View  style = {{flexDirection: 'row'}}>
                    <Text numberOfLines={1} style={styles.name}>
                        {chat.user.name}
                    </Text> 
                    <Text style = {styles.time} >{formattedTime}</Text>
                </View>
               <Text numberOfLines={2} style={styles.description}>{chat.lastMessage.text}</Text>
            </View>    
                 
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container : {
        borderBottomWidth:StyleSheet.hairlineWidth,
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
    description:{
        flexDirection:'row',
        color: 'grey',
        flexDirection :'row',
        fontSize : 15
    },
    name : {
        fontWeight : 400,
        fontSize : 16,
        marginVertical : 5,
        flex : 1
    },
    time : {
        color : 'grey',
        justifyContent : 'flex-end',
        marginVertical : 5,
        
    },
  
});

export default ChatList;