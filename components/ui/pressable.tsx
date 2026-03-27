import { cn } from "@/lib/util";
import React, { useRef } from "react";
import {
  Animated,
  Pressable as RNPressable,
  type PressableProps,
} from "react-native";
import { ThemedText } from "../themed-text";

export interface ButtonProps extends PressableProps {
  variant?: "default" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export const Pressable = React.forwardRef<
  React.ComponentRef<typeof RNPressable>,
  ButtonProps
>(({ className, children, disabled, onPressIn, onPressOut, ...props }, ref) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = (e: any) => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    onPressIn?.(e);
  };

  const handlePressOut = (e: any) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    onPressOut?.(e);
  };

  return (
    <Animated.View
      style={{ transform: [{ scale: scaleAnim }] }}
      className={cn("relative flex", disabled && "opacity-60")}
    >
      <RNPressable
        ref={ref}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className={cn("")}
        {...props}
      >
        {typeof children === "string" || typeof children === "number" ? (
          <ThemedText>{children}</ThemedText>
        ) : (
          children
        )}
      </RNPressable>
    </Animated.View>
  );
});

Pressable.displayName = "Pressable";
