import { View } from "react-native";
import Svg, { Circle, Defs, G, LinearGradient, Stop } from "react-native-svg";

import { ThemedText } from "@/components/themed-text";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

const CIRCLE_RADIUS = 140;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

type Props = {
  timeLeft: number;
  arcProgress: number;
  isPaused: boolean;
  isWarning: boolean;
};

export default function TimerRing({
  timeLeft,
  arcProgress,
  isPaused,
  isWarning,
}: Props) {
  const arcAngle = 2 * Math.PI * arcProgress - Math.PI / 2;
  const dotX = 150 + CIRCLE_RADIUS * Math.cos(arcAngle);
  const dotY = 150 + CIRCLE_RADIUS * Math.sin(arcAngle);

  const displayMinutes = Math.floor(timeLeft / 60);
  const displaySeconds = timeLeft % 60;
  const display = `${String(displayMinutes).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;

  return (
    <View
      className="relative h-[300px] w-[300px] items-center justify-center"
      style={{ opacity: isPaused ? 0.45 : 1 }}
    >
      <Svg width={300} height={300} viewBox="0 0 300 300" className="absolute">
        <Defs>
          <LinearGradient
            id="trackGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#52525b" stopOpacity="0.65" />
            <Stop offset="100%" stopColor="#27272a" stopOpacity="0.95" />
          </LinearGradient>
          <LinearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#a1a1aa" />
            <Stop offset="100%" stopColor="#71717a" />
          </LinearGradient>
        </Defs>

        <Circle
          cx="150"
          cy="150"
          r={CIRCLE_RADIUS}
          stroke="url(#trackGradient)"
          strokeWidth="8"
          fill="none"
        />

        <G rotation={-90} origin="150,150">
          <Circle
            cx="150"
            cy="150"
            r={CIRCLE_RADIUS}
            stroke={isWarning ? "#ef4444" : "url(#progressGradient)"}
            strokeWidth="8"
            fill="none"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={
              CIRCLE_CIRCUMFERENCE - CIRCLE_CIRCUMFERENCE * arcProgress
            }
            strokeLinecap="round"
          />
        </G>

        <Circle
          cx={dotX}
          cy={dotY}
          r="10"
          fill={isWarning ? "#ef4444" : "#a1a1aa"}
        />
      </Svg>

      <View className="absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
        <ThemedText type="title" className="text-center leading-none">
          {changeToMMNumber(display)}
        </ThemedText>
      </View>
    </View>
  );
}
