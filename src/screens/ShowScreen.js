import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route: { params } }) => {
  //destructured from value={{ state, ...boundActions }}>
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === params.id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
