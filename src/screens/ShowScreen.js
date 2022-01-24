import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ route: { params }, navigation }) => {
  //destructured from value={{ state, ...boundActions }}>
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === params.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: params.id })}
        >
          <FontAwesome name="pencil-square-o" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
