import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { cn } from "@/lib/util";
import { PlayerInputType } from "@/types/index.types";
import * as Crypto from "expo-crypto";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 10;

const createPlayerInput = (name = ""): PlayerInputType => ({
  id: Crypto.randomUUID(),
  name,
});

export default function Start() {
  // const { config, updateGameConfig } = useGameConfigStore();
  const router = useRouter();
  const [playerInputs, setPlayerInputs] = useState<PlayerInputType[]>([
    createPlayerInput(),
  ]);

  const validPlayers = useMemo(
    () => playerInputs.map((player) => player.name.trim()).filter(Boolean),
    [playerInputs],
  );

  const playerCount = validPlayers.length;
  const canStartGame = playerCount >= MIN_PLAYERS;

  const handleInputChange = (index: number, value: string) => {
    setPlayerInputs((previousInputs) =>
      previousInputs.map((input, currentIndex) =>
        currentIndex === index ? { ...input, name: value } : input,
      ),
    );
  };

  const handleAddPlayer = () => {
    setPlayerInputs((previousInputs) => {
      if (previousInputs.length >= MAX_PLAYERS) {
        return previousInputs;
      }

      return [...previousInputs, createPlayerInput()];
    });
  };

  const handleRemovePlayer = (id: string) => {
    setPlayerInputs((previousInputs) => {
      if (previousInputs.length === 1) {
        return [createPlayerInput()];
      }

      return previousInputs.filter((input) => input.id !== id);
    });
  };

  const handleStartGame = () => {
    // if (!canStartGame) {
    //   return;
    // }
    // updateGameConfig({
    //   players: validPlayers.map((name) => ({
    //     id: Crypto.randomUUID(),
    //     name,
    //     imageId: null,
    //   })),
    // });
    router.push(CONFIG.MODE);
  };

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ဘယ်သူတွေ ကစားမလဲ</ThemedText>
      </View>

      <ThemedText className="text-center mx-auto max-w-sm">
        ပါဝင်ကစားသွားမှာဖြစ်တဲ့ သူငယ်ချင်းတွေရဲ့ နာမည်တွေကို အောက်မှာ
        ရိုက်ထည့်ပေးပါ။
      </ThemedText>

      <View className="mt-5 flex-1 flex-col gap-3">
        <ThemedText
          className={cn(
            "text-lg font-semibold",
            playerCount >= 3
              ? "text-success-500"
              : playerCount === 0
                ? "text-white"
                : "text-red-500",
          )}
        >
          {changeToMMNumber(playerCount)} / {changeToMMNumber(MAX_PLAYERS)}
        </ThemedText>

        <ScrollView className="flex-1" contentContainerClassName="gap-4">
          {playerInputs.map((playerInput, index) => (
            <View key={playerInput.id} className="relative">
              <Input
                value={playerInput.name}
                maxLength={28}
                onChangeText={(value) => handleInputChange(index, value)}
                placeholder="နာမည် ရိုက်ထည့်ပါ..."
              />

              {playerCount >= 1 && (
                <Pressable
                  onPress={() => handleRemovePlayer(playerInput.id)}
                  className="absolute right-4 top-1/2 h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-neutral-100"
                  accessibilityLabel="Remove player"
                >
                  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <Path
                      d="M3 3L11 11M11 3L3 11"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </Svg>
                </Pressable>
              )}
            </View>
          ))}
          <Button
            variant="outline"
            onPress={handleAddPlayer}
            disabled={playerInputs.length >= MAX_PLAYERS}
          >
            <View className="flex-row items-center justify-center gap-2">
              <SvgAsset
                source={require("@/assets/svg/plus-circle-icon.svg")}
                width={30}
                height={30}
              />
              <ThemedText type="subtitle">နောက်ထပ်ထည့်မယ်</ThemedText>
            </View>
          </Button>
        </ScrollView>

        <View className="mt-auto gap-3 pb-1">
          {!canStartGame && (
            <ThemedText className="text-center text-red-500">
              အနည်းဆုံး {changeToMMNumber(MIN_PLAYERS)} ယောက်ရှိမှ
              ကစားလို့ရပါမယ်
            </ThemedText>
          )}

          <Button onPress={handleStartGame} disabled={canStartGame}>
            <ThemedText type="subtitle">ရှေ့ဆက်မယ်</ThemedText>
          </Button>
        </View>
      </View>
    </ThemedView>
  );
}
