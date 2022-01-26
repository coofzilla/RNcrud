import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        //third arg callback() from BlogContext.js
        addBlogPost(title, content, () => navigation.navigate("Blogs"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
