import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route: { params } }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === params.id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
