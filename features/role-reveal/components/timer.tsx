import { Pressable, View } from "react-native";

import Progress from "@/components/ui/progress";
import { SvgAsset } from "@/components/ui/svg-asset";

const ROLE_REVEAL_TIME_SECONDS = 10;

export default function Timer({
  timeLeft,
  isResettingProgressBar,
  handleBack,
}: {
  timeLeft: number;
  isResettingProgressBar: boolean;
  handleBack: () => void;
}) {
  const progressPercent = Math.max(
    0,
    Math.min(100, (timeLeft / ROLE_REVEAL_TIME_SECONDS) * 100),
  );

  console.log("progressPercent", progressPercent);

  return (
    <View className="w-full">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <Pressable
          className="absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-xl"
          onPress={handleBack}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <SvgAsset
            source={require("@/assets/svg/back-button.svg")}
            width={37}
            height={37}
          />
        </Pressable>
      </View>

      <View className="flex-1 flex-row items-center justify-end">
        <Progress
          className="w-[380px]"
          progressPercent={progressPercent}
          isResettingProgressBar={isResettingProgressBar}
        />
      </View>
    </View>
  );
}
