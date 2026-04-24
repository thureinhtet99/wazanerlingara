import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import { parseIdsParam, serializeIds } from "@/lib/imposter";

const TRANSITION_DURATION = 2800;
const CIRCLE_RADIUS = 120;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export default function VoteTransition() {
  const params = useLocalSearchParams<{
    votedPlayerIds?: string | string[];
  }>();

  const votedPlayerIds = parseIdsParam(params.votedPlayerIds);

  const [dotCount, setDotCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeLeftMs, setTimeLeftMs] = useState(TRANSITION_DURATION);

  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const dotTimer = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 280);

    return () => clearInterval(dotTimer);
  }, []);

  useEffect(() => {
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 520,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 520,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    const rotateLoop = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1600,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    pulseLoop.start();
    rotateLoop.start();

    return () => {
      pulseLoop.stop();
      rotateLoop.stop();
    };
  }, [pulseAnim, rotateAnim]);

  useEffect(() => {
    startTimeRef.current = Date.now();

    const animate = () => {
      if (startTimeRef.current === null) {
        return;
      }

      const elapsed = Date.now() - startTimeRef.current;
      const nextProgress = Math.min(elapsed / TRANSITION_DURATION, 1);

      setProgress(nextProgress);
      setTimeLeftMs(Math.max(TRANSITION_DURATION - elapsed, 0));

      if (nextProgress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (progress < 1) {
      return;
    }

    const timeout = setTimeout(() => {
      router.replace({
        pathname: CONFIG.VOTE_RESULT,
        params: {
          votedPlayerIds: serializeIds(votedPlayerIds),
        },
      });
    }, 80);

    return () => clearTimeout(timeout);
  }, [progress, votedPlayerIds]);

  const dots = ".".repeat(dotCount);
  const secondsLeft = Math.max(Math.ceil(timeLeftMs / 1000), 0);
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ThemedView className="flex-1 items-center justify-center gap-10">
      <View className="gap-2 px-6">
        <ThemedText type="title" className="text-center">
          မဲရလဒ်တွက်နေပါတယ်{dots}
        </ThemedText>
        <ThemedText type="description" className="text-center">
          သံသယစာရင်းကို စစ်ဆေးနေပါတယ်။
        </ThemedText>
      </View>

      <View className="relative h-[300px] w-[300px] items-center justify-center">
        <Animated.View
          className="absolute"
          style={{
            transform: [{ rotate: rotation }],
          }}
        >
          <Svg width={300} height={300} viewBox="0 0 300 300">
            <Circle
              cx="150"
              cy="150"
              r={CIRCLE_RADIUS}
              stroke="#ffffff"
              strokeWidth="6"
              fill="none"
              opacity="0.16"
            />

            <G rotation={-90} origin="150,150">
              <Circle
                cx="150"
                cy="150"
                r={CIRCLE_RADIUS}
                stroke="#f63b3b"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={CIRCLE_CIRCUMFERENCE}
                strokeDashoffset={
                  CIRCLE_CIRCUMFERENCE - CIRCLE_CIRCUMFERENCE * progress
                }
              />
            </G>
          </Svg>
        </Animated.View>

        <Animated.View
          className="h-36 w-36 rounded-full items-center justify-center bg-black border border-white/20"
          style={{
            transform: [{ scale: pulseAnim }],
          }}
        >
          <SvgAsset
            source={require("@/assets/svg/info-alert.svg")}
            width={44}
            height={44}
          />
          <ThemedText type="subtitle" className="mt-2">
            {secondsLeft}
          </ThemedText>
        </Animated.View>
      </View>
    </ThemedView>
  );
}
