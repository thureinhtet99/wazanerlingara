import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { LOCKED_PLAYERS } from "@/constants/config";
import { ThemeTokens } from "@/constants/theme";
import { themeTokens } from "@/constants/theme-tokens";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { getAllowedImposterCount } from "@/lib/imposter";

const ImposterCounter = () => {
  const { config, updateGameConfig } = useGameConfig();
  const { playClickSound } = useAudioSettings();
  const [pressedButton, setPressedButton] = useState<
    "increase" | "decrease" | null
  >(null);

  const playerCount = config.players.length;
  const currentCount = config.gameSetting.imposterCount;
  const min = 1;
  const max = playerCount === LOCKED_PLAYERS ? 2 : 1;
  const boundedCount = getAllowedImposterCount(playerCount, currentCount);

  useEffect(() => {
    if (currentCount !== boundedCount) {
      updateGameConfig({
        gameSetting: {
          imposterCount: boundedCount,
        },
      });
    }
  }, [boundedCount, currentCount, updateGameConfig]);

  const isPressed = (type: "increase" | "decrease") => pressedButton === type;

  const setCount = (count: number) => {
    const nextCount = Math.min(max, Math.max(min, count));

    updateGameConfig({
      gameSetting: {
        imposterCount: nextCount,
      },
    });
  };

  const increaseCount = () => {
    if (boundedCount < max) {
      setCount(boundedCount + 1);
    }

    playClickSound();
  };

  const decreaseCount = () => {
    if (boundedCount > min) {
      setCount(boundedCount - 1);
    }

    playClickSound();
  };

  const locked = playerCount < LOCKED_PLAYERS;

  return (
    <View className="rounded-2xl border border-white px-4 py-6 bg-neutral-500/10 gap-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Ionicons
            name="people-sharp"
            size={36}
            color={themeTokens.ui.white}
          />
          <ThemedText type="description">Imposter အရေအတွက်</ThemedText>
        </View>

        <View className="flex-row items-center gap-4">
          <Pressable
            onPress={decreaseCount}
            disabled={boundedCount <= min}
            onPressIn={() => setPressedButton("decrease")}
            onPressOut={() => setPressedButton(null)}
            className={`rounded-full w-8 h-8 flex items-center justify-center ${isPressed("decrease") ? "bg-red-500" : "bg-white"} ${boundedCount <= min ? "opacity-40" : "opacity-100"}`}
          >
            <ThemedText
              type="defaultSemiBold"
              style={{
                color: isPressed("decrease")
                  ? ThemeTokens.ui.white
                  : ThemeTokens.ui.black,
                fontSize: 30,
                lineHeight: 28,
              }}
            >
              −
            </ThemedText>
          </Pressable>

          <ThemedText type="subtitle">
            {changeToMMNumber(boundedCount)}
          </ThemedText>

          <Pressable
            onPress={increaseCount}
            disabled={boundedCount >= max}
            onPressIn={() => setPressedButton("increase")}
            onPressOut={() => setPressedButton(null)}
            className={`rounded-full w-8 h-8 flex items-center justify-center ${isPressed("increase") ? "bg-red-500" : "bg-white"} ${boundedCount >= max ? "opacity-40" : "opacity-100"}`}
          >
            <ThemedText
              type="defaultSemiBold"
              style={{
                color: isPressed("increase")
                  ? ThemeTokens.ui.white
                  : ThemeTokens.ui.black,
                fontSize: 30,
                lineHeight: 24,
              }}
            >
              +
            </ThemedText>
          </Pressable>
        </View>
      </View>

      <View className="flex-row items-start gap-2">
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={22}
          color={themeTokens.palette.info[400]}
        />
        <ThemedText type="default" className="flex-1">
          {locked
            ? "ကစားသမား ၇ ယောက်မပြည့်လို့ Imposter ကို ၁ ယောက်ပဲသတ်မှတ်ထားပါတယ်။"
            : "ကစားသမား ၇ ယောက်ပြည့်လို့ Imposter ၁ ယောက် (သို့) ၂ ယောက် ရွေးနိုင်ပါတယ်။"}
        </ThemedText>
      </View>
    </View>
  );
};

export default ImposterCounter;
