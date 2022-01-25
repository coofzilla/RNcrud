import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route: { params } }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === params.id);

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
