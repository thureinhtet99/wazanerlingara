import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { CONFIG } from "@/constants/config";
import { callGoToNextPlayer } from "@/hooks/use-spinner-next-player";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

const SPINNER_DURATION = 4;
const CIRCLE_RADIUS = 140;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export default function SpinnerScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    mode?: string;
    nextPlayerName?: string | string[];
  }>();
  const [timeLeft, setTimeLeft] = useState(SPINNER_DURATION);
  const [dotCount, setDotCount] = useState(0);
  const [arcProgress, setArcProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 6);
    }, 350);

    return () => clearInterval(id);
  }, []);

  const dots = ".".repeat(dotCount);
  const nextPlayerName = Array.isArray(params.nextPlayerName)
    ? (params.nextPlayerName[0] ?? "")
    : (params.nextPlayerName ?? "");
  const arcAngle = 2 * Math.PI * arcProgress - Math.PI / 2;
  const dotX = 150 + CIRCLE_RADIUS * Math.cos(arcAngle);
  const dotY = 150 + CIRCLE_RADIUS * Math.sin(arcAngle);

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    startTimeRef.current = Date.now();

    const animate = () => {
      if (startTimeRef.current === null) return;

      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const progress = Math.min(elapsed / SPINNER_DURATION, 1);

      setArcProgress(progress);
      setTimeLeft(Math.max(SPINNER_DURATION - Math.ceil(elapsed), 0));

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (arcProgress >= 1) {
      const timeout = setTimeout(() => {
        if (params.mode === "next-player") {
          callGoToNextPlayer();
          router.back();
        } else {
          router.replace(CONFIG.GAME_PLAY);
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [arcProgress, params.mode, router]);

  return (
    <ThemedView className="flex-1 items-center justify-center gap-16">
      <ThemedText type="subtitle" className="text-center">
        {params.mode === "next-player"
          ? `ဖုန်းကို “${nextPlayerName || "နောက်သူ"}”ဆီ ကမ်းပေးပါ`
          : `ဂိမ်းစတင်ပါတော့မယ် ${dots}`}
      </ThemedText>

      <View className="relative h-[300px] w-[300px] items-center justify-center">
        <Svg
          width={300}
          height={300}
          viewBox="0 0 300 300"
          className="absolute"
        >
          <Circle
            cx="150"
            cy="150"
            r={CIRCLE_RADIUS}
            stroke="#ffffff"
            strokeWidth="8"
            fill="none"
            opacity="0.1"
          />

          <G rotation={-90} origin="150,150">
            <Circle
              cx="150"
              cy="150"
              r={CIRCLE_RADIUS}
              stroke="#dc2626"
              strokeWidth="8"
              fill="none"
              strokeDasharray={CIRCLE_CIRCUMFERENCE}
              strokeDashoffset={
                CIRCLE_CIRCUMFERENCE - CIRCLE_CIRCUMFERENCE * arcProgress
              }
              strokeLinecap="round"
            />
          </G>

          <Circle cx={dotX} cy={dotY} r="10" fill="#dc2626" />
        </Svg>

        <View className="absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
          <ThemedText type="title" className="text-center leading-none">
            {changeToMMNumber(timeLeft)}
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}
