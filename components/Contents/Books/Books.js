import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import bookCover from "../../../assets/books/cover.jpg";

const Books = () => {
  const bookData = [
    {
      id: 1,
      title: "English101",
      image: bookCover,
    },
    {
      id: 2,
      title: "English101",
      image: bookCover,
    },
    {
      id: 3,
      title: "English101",
      image: bookCover,
    },
    {
      id: 4,
      title: "English101",
      image: bookCover,
    },
    {
      id: 5,
      title: "English101",
      image: bookCover,
    },
    {
      id: 6,
      title: "English101",
      image: bookCover,
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          // backgroundColor: "red",
          width: "100%",
        }}
      >
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          data={bookData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={{
                width: 140,
                height: 220,
                borderWidth: 1,
                borderRadius: 10,
                margin: 20,
                backgroundColor: "yellow",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                source={item.image}
              />
              <Text style={{ marginTop: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default Books;
