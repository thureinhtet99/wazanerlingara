import { useState } from "react";
import { Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { SvgAsset } from "@/components/ui/svg-asset";
import { ThemeTokens } from "@/constants/theme";
import { useGameConfig } from "@/hooks/use-game-config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

const ImposterCounter = () => {
  const { config, updateGameConfig } = useGameConfig();
  const [pressedButton, setPressedButton] = useState<
    "increase" | "decrease" | null
  >(null);
  const imposterCount = config?.gameSetting.imposterCount || 1;

  const handleImposterCounter = (type: "increase" | "decrease") => {
    if (!config) return;
    if (type === "increase") {
      updateGameConfig({
        gameSetting: {
          ...config?.gameSetting,
          imposterCount: Math.min(
            config?.players.length - 1,
            imposterCount + 1,
          ),
        },
      });
    } else {
      updateGameConfig({
        gameSetting: {
          ...config?.gameSetting,
          imposterCount: Math.max(1, imposterCount - 1),
        },
      });
    }
  };

  const isPressed = (type: "increase" | "decrease") => pressedButton === type;

  return (
    <View className="flex-row items-center justify-between rounded-2xl border border-white px-4 py-8 bg-neutral-500/10">
      <View className="flex-row items-center gap-2">
        <SvgAsset
          source={require("@/assets/svg/people-fill.svg")}
          width={30}
          height={30}
        />
        <ThemedText type="description">Imposter အရေအတွက်</ThemedText>
      </View>
      <View className="flex-1 flex-row items-center justify-end gap-6">
        <Pressable
          onPress={() => handleImposterCounter("decrease")}
          onPressIn={() => setPressedButton("decrease")}
          onPressOut={() => setPressedButton(null)}
          className={`rounded-full w-8 h-8 flex items-center justify-center ${isPressed("decrease") ? "bg-red-500" : "bg-white"}`}
        >
          <ThemedText
            type="defaultSemiBold"
            className={isPressed("decrease") ? "text-white" : "text-black"}
            style={{
              fontSize: ThemeTokens.fontSize.counter,
              lineHeight: ThemeTokens.lineHeight.counter,
            }}
          >
            -
          </ThemedText>
        </Pressable>
        <ThemedText type="subtitle">
          {changeToMMNumber(imposterCount)}
        </ThemedText>
        <Pressable
          onPress={() => handleImposterCounter("increase")}
          onPressIn={() => setPressedButton("increase")}
          onPressOut={() => setPressedButton(null)}
          className={`rounded-full w-8 h-8 flex items-center justify-center ${isPressed("increase") ? "bg-red-500" : "bg-white"}`}
        >
          <ThemedText
            type="defaultSemiBold"
            className={isPressed("increase") ? "text-white" : "text-black"}
            style={{
              fontSize: ThemeTokens.fontSize.counter,
              lineHeight: ThemeTokens.lineHeight.counter,
            }}
          >
            +
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default ImposterCounter;
