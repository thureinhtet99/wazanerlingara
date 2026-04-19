import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button } from "@/components/ui/button";
import { TimerModeType } from "@/types/index.types";

type Props = {
  timerMode: TimerModeType;
  isLastPlayer: boolean;
  disabledPrimary: boolean;
  isDiscussPaused: boolean;
  onPrimaryPress: () => void;
  onPausePress: () => void;
  onContinuePress: () => void;
  onVote: () => void;
};

export default function BottomControls({
  timerMode,
  isLastPlayer,
  disabledPrimary,
  isDiscussPaused,
  onPrimaryPress,
  onPausePress,
  onContinuePress,
  onVote,
}: Props) {
  const primaryLabel = isLastPlayer ? "မဲပေးမယ်" : "နောက်တစ်ယောက်";

  if (timerMode === "duration" && isDiscussPaused) {
    return (
      <View className="flex-row justify-between gap-3 w-full">
        <View className="flex-1">
          <Button onPress={onVote}>
            <ThemedText type="subtitle">မဲပေးမယ်</ThemedText>
          </Button>
        </View>

        <View className="flex-1">
          <Button variant="outline" onPress={onContinuePress}>
            <ThemedText type="subtitle">ဆက်ကစားမယ်</ThemedText>
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View className="w-full">
      {timerMode === "turn" && (
        <Button disabled={disabledPrimary} onPress={onPrimaryPress}>
          <ThemedText type="subtitle">{primaryLabel}</ThemedText>
        </Button>
      )}

      {timerMode === "duration" ? (
        <Button onPress={onPausePress}>
          <ThemedText type="subtitle">ခဏရပ်ပြီး ဆွေးနွေးမယ်</ThemedText>
        </Button>
      ) : null}
    </View>
  );
}
