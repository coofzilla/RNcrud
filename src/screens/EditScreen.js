import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({
  route: {
    params: { id },
  },
}) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((post) => post.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.title }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
