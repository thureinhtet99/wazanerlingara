import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { useGameConfig } from "@/hooks/use-game-config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

import { getCategory } from "../../../lib/get-category";
import { getGameMode } from "../lib/get-game-mode";

export default function GameInfo() {
  const { config } = useGameConfig();

  const playerCount = config?.players.length || 0;
  const gameMode = config?.gameMode || "";
  const category = config?.category || "";

  return (
    <View className="rounded-2xl px-4 py-6">
      <View className="mb-3 flex-row items-center justify-between">
        <ThemedText type="subtitle">ပါဝင်ကစားမည့်သူ အရေအတွက်</ThemedText>
        <ThemedText type="description">
          ({changeToMMNumber(playerCount)}) ယောက်
        </ThemedText>
      </View>

      <View className="mb-3 flex-row items-center justify-between">
        <ThemedText type="subtitle">ဂိမ်းအမျိုးအစား</ThemedText>
        <ThemedText type="description">{getGameMode(gameMode)}</ThemedText>
      </View>

      <View className="flex-row items-center justify-between">
        <ThemedText type="subtitle">အမျိုးအစား:</ThemedText>
        <ThemedText type="description">{getCategory(category)}</ThemedText>
      </View>
    </View>
  );
}
