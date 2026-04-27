import { useRef } from "react";
import { Animated, Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";

import { ThemeTokens } from "@/constants/theme";

import { useAudioSettings } from "../hooks/use-audio-settings";

export default function DeleteButton({
  handleRemovePlayer,
  playerInput,
}: {
  handleRemovePlayer: (id: string) => void;
  playerInput: {
    id: string;
    name: string;
  };
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { playClickSound } = useAudioSettings();

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      className="absolute right-6 top-6"
      style={{ transform: [{ scale: scaleAnim }] }}
    >
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => {
          playClickSound();
          handleRemovePlayer(playerInput.id);
        }}
        accessibilityRole="button"
        accessibilityLabel="Remove player"
        className="h-8 w-8 items-center justify-center active:bg-background-400 rounded-full border-2 border-white"
      >
        <Svg width="18" height="18" viewBox="0 0 14 14" fill="none">
          <Path
            d="M3 3L11 11M11 3L3 11"
            stroke={ThemeTokens.ui.iconStroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Svg>
      </Pressable>
    </Animated.View>
  );
}
