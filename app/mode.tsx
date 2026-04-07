import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import { MODES } from "@/constants/dummy-data";
import { GameType } from "@/types/index.types";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

export default function Mode() {
  const [mode, setMode] = useState<GameType | undefined>(
    // config?.gameMode,
    "word",
  );

  const handleGameForward = () => {
    if (!mode) return;
    router.push(CONFIG.CATEGORIES);
    //     if (config) {
    //       updateGameConfig({
    //         gameMode: mode,
    //       });
    //       navigate(APP_CONFIG.CHOOSE_CATEGORIES);
    //     }
  };

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ဂိမ်းအမျိုးအစား ရွေးမယ်</ThemedText>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="gap-3">
        {MODES.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              setMode(item.id as GameType);
            }}
            className={`flex-row items-center justify-between rounded-2xl border border-white p-4 ${item.id === mode && "border-4 border-white"}`}
          >
            <View className="flex-row items-center gap-3 pr-3 max-w-xs">
              <SvgAsset source={item.icon} width={80} height={80} />
              <View className="flex-col">
                <ThemedText type="subtitle">{item.title}</ThemedText>
                <ThemedText>{item.desc}</ThemedText>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <View className="mt-auto pb-1">
        <Button onPress={handleGameForward} disabled={!mode}>
          <ThemedText type="subtitle">ရှေ့ဆက်မယ်</ThemedText>
        </Button>
      </View>
    </ThemedView>
  );
}
