import { cn } from "@/lib/util";
import { View } from "react-native";

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

function Progress({ value, max, className }: ProgressProps) {
  const safeMax = max > 0 ? max : 1;
  const percent = Math.max(0, Math.min(100, (value / safeMax) * 100));

  return (
    <View
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full border border-white bg-background-400",
        className,
      )}
    >
      <View
        className="h-full bg-success-500"
        style={{ width: `${percent}%` }}
      />
    </View>
  );
}

export default Progress;
