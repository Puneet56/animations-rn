import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Test = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <View style={StyleSheet.absoluteFill}>
        <Link href={"/bouncing-ball"} asChild>
          <Pressable style={styles.tile}>
            <Text style={styles.tileText}>Bouncing ball</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default Test;

const styles = StyleSheet.create({
  tile: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  tileText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
