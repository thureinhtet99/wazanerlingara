import { Pressable, View } from "react-native";

import Progress from "@/components/ui/progress";
import { SvgAsset } from "@/components/ui/svg-asset";
import { DEFAULT_GAME_CONFIG } from "@/constants/config";

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
  const progressPercent = Math.max(
    0,
    Math.min(100, (timeLeft / ROLE_REVEAL_TIME_SECONDS) * 100),
  );

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
