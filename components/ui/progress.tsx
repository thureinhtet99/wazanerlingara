import { View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

import { cn } from "@/lib/util";

export default function Progress({
  className,
  progressPercent,
  isResettingProgressBar,
}: {
  className?: string;
  progressPercent: number;
  isResettingProgressBar: boolean;
}) {
  return (
    <View
      className={cn(
        "h-5 w-full overflow-hidden rounded-full border border-white bg-background-300",
        className,
      )}
    >
      <Animated.View
        layout={
          isResettingProgressBar ? undefined : LinearTransition.duration(650)
        }
        className={`h-full ${progressPercent <= 30 ? "bg-red-500" : "bg-success-500"}`}
        style={{ width: `${progressPercent}%` }}
      />
    </View>
  );
}
