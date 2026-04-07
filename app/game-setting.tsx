import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/constants/config";
import GameInfo from "@/features/game-setting/components/game-info";
import ImposterCounter from "@/features/game-setting/components/imposter-counter";
import TimerMode from "@/features/game-setting/components/timer-mode";
import ToggleImposterHint from "@/features/game-setting/components/toggle-imposter-hint";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";

export default function GameSetting() {
  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ဂိမ်းဆက်တင်</ThemedText>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="gap-4 pb-4">
        <View className="flex-col gap-4">
          <ImposterCounter />
          <TimerMode />
          <ToggleImposterHint />

          <GameInfo />
        </View>
      </ScrollView>

      <View className="mt-auto pb-1">
        <Button onPress={() => router.push(CONFIG.ROLE_REVEAL)}>
          <ThemedText type="subtitle">ဂိမ်းစမယ်</ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
}
