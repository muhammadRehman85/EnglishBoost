import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import Greeting from "../ConversationData/Greeting";
import BlockList from "../../../layouts/BlockList";
import BuyingElectronics from "../ConversationData/BuyingElectronics";
import BuyingGrocery from "../ConversationData/BuyingGrocery";
import ticketBuying from "../ConversationData/BuyingTikects";
import hotelBooking from "../ConversationData/BookingHotel";
import doctorPatientConversation from "../ConversationData/DocterPatient";
import parentChildConversation from "../ConversationData/ParentChild";
import hobbyConversation from "../ConversationData/Hobbies";
import movieWatchingConversation from "../ConversationData/WatchingMovies";
import conversation2 from "../../../../assets/conversation2.png"
const AllConversataions= ({ navigation, route }) => {

  const conversationScenarios = [
    {
      id: 1,
      title: "Introduction & Greeting",
      name: "ConversationScreen",
      conversation:Greeting
    },
    {
      id: 2,
      title: "Buying a Laptop",
      name: "ConversationScreen",
      conversation:BuyingElectronics

    },
    {
      id: 3,
      title: "Buying Grocery",
      name: "ConversationScreen",
      conversation:BuyingGrocery

    },
    {
      id: 4,
      title: "Buying Tickets",
      name: "ConversationScreen",
      conversation:ticketBuying

    },
    {
      id: 5,
      title: "Booking Room in Hotel",
      name: "ConversationScreen",
      conversation:hotelBooking

    },
    {
      id: 6,
      title: "Doctor And Patient",
      name: "ConversationScreen",
      conversation:doctorPatientConversation

    },
    {
      id: 7,
      title: "Parent And Child",
      name: "ConversationScreen",
      conversation:parentChildConversation

    }, {
      id: 8,
      title: "Hobby",
      name: "ConversationScreen",
      conversation:hobbyConversation

    },
    {
      id: 9,
      title: "Watching Movies",
      name: "ConversationScreen",
      conversation:movieWatchingConversation
    }
    // Add more scenarios as needed
];



  return (
    <>
      <View style={{backgroundColor:'white'}}>
        <View style={{}}><Text style={{fontSize:20,fontWeight:'bold',marginLeft:70,marginTop:25}}>Conversation scenarios</Text>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={conversationScenarios}
            keyExtractor={(item) => item.id}
         
            renderItem={({ item }) => (
              <View>
                <Pressable
                  style={{
                    width: '95%',marginTop:10
                    // height: 100,
                    // backgroundColor: item.id == disabled + 1 ? "green" : "grey",
                    // margin: 10,
                    // flex: 1,
                    // alignItems: "center",
                    // justifyContent: "center",
                    // borderRadius: 10,
                    // height: 70,
                    // backgroundColor: "#004fd7",
                    // margin: 10,
                  }}
                  onPress={() =>
                    navigation.navigate(item.name,{title:item.title,Greeting:item.conversation})
                  }>
                  {/* <Text style={styles.text}>{item.title}</Text> */}
                  
                <BlockList item={item}  image={require('../../../../assets/conversation2.png')}/>
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default  AllConversataions
