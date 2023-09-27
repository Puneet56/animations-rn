import { Stack } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Blog = () => {
  const { width, height } = useWindowDimensions();

  const { top, bottom } = useSafeAreaInsets();

  const xSpeed = useRef(7);
  const ySpeed = useRef(7);

  const position = useSharedValue({ x: 50, y: 300 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: position.value.x,
        },
        {
          translateY: position.value.y,
        },
      ],
    };
  });

  useFrameCallback(() => {
    if (position.value.x > width - 40 || position.value.x < 0) {
      xSpeed.current = xSpeed.current * -1;
    }

    if (position.value.y > height - top - bottom - 40 || position.value.y < 0) {
      ySpeed.current = ySpeed.current * -1;
    }

    position.value = {
      x: position.value.x + xSpeed.current,
      y: position.value.y + ySpeed.current,
    };
  });

  console.log("position", position.value);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Bouncing ball",
        }}
      />
      <View>
        <Animated.View
          style={[
            {
              width: 40,
              height: 40,
              backgroundColor: "red",
              borderRadius: 50,
              borderColor: "black",
              borderWidth: 1,
            },
            animatedStyles,
          ]}
        ></Animated.View>
      </View>
    </>
  );
};

export default Blog;

const styles = StyleSheet.create({});
