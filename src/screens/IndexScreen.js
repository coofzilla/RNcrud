import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  //A component calling useContext will always re-render when the context value changes.
  //If re-rendering the component is expensive, you can optimize it by using memoization.
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      {/* same as this onPress={() => addBlogPost()}; makes ref to function to be called */}
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <Pressable
                onPress={() => {
                  console.log(item.id);
                }}
              >
                <Feather style={styles.icon} name="trash" color="black" />
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
