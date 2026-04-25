import { Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, Pressable, View, useWindowDimensions } from "react-native";
import Svg, { Ellipse, Rect } from "react-native-svg";

import Progress from "@/components/ui/progress";
import { DEFAULT_GAME_CONFIG } from "@/constants/config";
import { ThemeTokens } from "@/constants/theme";
import { useAudioSettings } from "@/hooks/use-audio-settings";

const ROLE_REVEAL_TIME_SECONDS = DEFAULT_GAME_CONFIG.roleRevealTime;

export default function Timer({
  timeLeft,
  isResettingProgressBar,
  handleBack,
}: {
  timeLeft: number;
  isResettingProgressBar: boolean;
  handleBack: () => void;
}) {
  const { width } = useWindowDimensions();
  const progressBarWidth = Math.max(Math.min(width - 66, 640), 0);

  const progressPercent = Math.max(
    0,
    Math.min(100, (timeLeft / ROLE_REVEAL_TIME_SECONDS) * 100),
  );

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
    <View className="w-full">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <Animated.View
          className="absolute left-0 top-0 items-center justify-center h-14 w-14"
          style={{ transform: [{ scale: scaleAnim }] }}
        >
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => {
              playClickSound();
              handleBack();
            }}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            className="h-12 w-12 rounded-2xl items-center justify-center active:bg-background-400"
          >
            <Svg width={37} height={37} viewBox="0 0 37 37" fill="none">
              <Rect width="36.7767" height="36.2333" rx="12" fill="#181818" />
              <Rect
                x="0.8"
                y="0.8"
                width="35.1767"
                height="34.6333"
                rx="11.1"
                fill="none"
                stroke="white"
                strokeOpacity="0.18"
                strokeWidth="1"
              />
              <Rect
                x="1.6"
                y="1.6"
                width="33.5767"
                height="33.0333"
                rx="10.3"
                fill="none"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="0.8"
              />
              <Rect
                x="0.2"
                y="0.2"
                width="36.3767"
                height="35.8333"
                rx="11.8"
                fill="none"
                stroke="#B5B5B5"
                strokeWidth="0.4"
              />

              <Ellipse
                cx="6.56376"
                cy="7.03625"
                rx="4.1"
                ry="1.5"
                transform="rotate(-51 6.56376 7.03625)"
                fill="white"
                fillOpacity="0.88"
              />
              <Ellipse
                cx="30.3872"
                cy="27.7834"
                rx="3.35"
                ry="1.25"
                transform="rotate(-51 30.3872 27.7834)"
                fill="white"
                fillOpacity="0.88"
              />
              <Ellipse
                cx="3.5"
                cy="13"
                rx="0.5"
                ry="1"
                fill="white"
                fillOpacity="0.88"
              />
            </Svg>
            <Animated.View className="absolute items-center justify-center">
              <Ionicons
                name="arrow-back-sharp"
                size={30}
                color={ThemeTokens.ui.white}
              />
            </Animated.View>
          </Pressable>
        </Animated.View>
      </View>

      <View className="flex-1 flex-row items-center justify-end">
        <View style={{ width: progressBarWidth }}>
          <Progress
            className="w-full"
            progressPercent={progressPercent}
            isResettingProgressBar={isResettingProgressBar}
          />
        </View>
      </View>
    </View>
  );
}
