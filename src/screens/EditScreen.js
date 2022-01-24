import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditScreen = ({ route: { params } }) => {
  return (
    <View>
      <Text>Edit Screen - {params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
