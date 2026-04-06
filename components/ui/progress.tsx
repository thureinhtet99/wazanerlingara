import { cn } from "@/lib/util";
import { View } from "react-native";

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
        "h-5 w-full overflow-hidden rounded-full border border-white bg-background-400",
        className,
      )}
    >
      <View
        className={`h-full ${
          isResettingProgressBar
            ? ""
            : "transition-all duration-1000 ease-linear"
        }  ${progressPercent <= 3 ? "bg-red-500" : "bg-success-500"}`}
        style={{ width: `${progressPercent}%` }}
      />
    </View>
  );
}
