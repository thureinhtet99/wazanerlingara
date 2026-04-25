import React, { ComponentRef, forwardRef, ReactNode, useRef } from "react";
import { Animated, Pressable, View, type PressableProps } from "react-native";
import Svg, { Circle, Ellipse } from "react-native-svg";

import { ThemeTokens } from "@/constants/theme";
import { cn } from "@/lib/util";

import { useAudioSettings } from "../../hooks/use-audio-settings";
import { ThemedText } from "../themed-text";

export interface ButtonProps extends PressableProps {
  variant?: "default" | "outline";
  className?: string;
  children?: ReactNode;
}

export const Button = forwardRef<ComponentRef<typeof Pressable>, ButtonProps>(
  (
    {
      className,
      variant = "default",
      children,
      disabled,
      onPress,
      onPressIn,
      onPressOut,
      ...props
    },
    ref,
  ) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const { playClickSound } = useAudioSettings();

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

    const handlePress = (e: any) => {
      playClickSound();
      onPress?.(e);
    };

    return (
      <Animated.View
        style={{ transform: [{ scale: scaleAnim }] }}
        className={cn("relative flex", disabled && "opacity-60")}
      >
        <Pressable
          ref={ref}
          disabled={disabled}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
          className={cn(
            "px-4 py-4 h-20 w-full rounded-full text-white flex items-center justify-center",
            variant === "default" &&
              "bg-primary-500 active:bg-primary-400 disabled:bg-primary-200",
            variant === "outline" &&
              "bg-transparent active:bg-background-400 disabled:bg-background-200 border border-white",
            className,
          )}
          {...props}
        >
          <View className="absolute top-2 left-4">
            <Svg width={24} height={23} viewBox="0 0 24 23" fill="none">
              <Ellipse
                cx="15.1509"
                cy="7.70769"
                rx="6"
                ry="9.69819"
                transform="rotate(50.5883 15.1509 7.70769)"
                fill="white"
              />
              <Circle
                cx="3.51616"
                cy="18.6084"
                r="3.516"
                transform="rotate(50.5883 3.51616 18.6084)"
                fill={ThemeTokens.palette.neutral[600]}
              />
            </Svg>
          </View>

          <View className="absolute bottom-2 right-4">
            <Svg width={14} height={12} viewBox="0 0 14 12" fill="none">
              <Ellipse
                cx="6.75576"
                cy="5.51548"
                rx="4.17355"
                ry="7.65595"
                transform="rotate(55.8233 6.75576 5.51548)"
                fill="white"
                fillOpacity="0.9"
              />
            </Svg>
          </View>
          {typeof children === "string" || typeof children === "number" ? (
            <ThemedText>{children}</ThemedText>
          ) : (
            children
          )}
        </Pressable>
      </Animated.View>
    );
  },
);

Button.displayName = "Button";
