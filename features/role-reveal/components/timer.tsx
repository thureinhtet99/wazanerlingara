import { Pressable, View } from "react-native";

import Progress from "@/components/ui/progress";
import { SvgAsset } from "@/components/ui/svg-asset";

export default function Timer({
  timeLeft,
  isResettingProgressBar,
  handleClickBack,
}: {
  timeLeft: number;
  isResettingProgressBar: boolean;
  handleClickBack: () => void;
}) {
  const progressPercent = (timeLeft / 10) * 100;

  return (
    <View className="w-full">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <Pressable
          className="absolute left-0 top-0 h-12 w-12 items-center justify-center rounded-xl"
          onPress={handleClickBack}
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
