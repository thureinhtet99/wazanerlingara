import { Feather } from "@expo/vector-icons";
import * as Crypto from "expo-crypto";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

import Loading from "@/app/loading";
import BackButton from "@/components/back-button";
import DeleteButton from "@/components/delete-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONFIG } from "@/constants/config";
import { ThemeTokens } from "@/constants/theme";
import { themeTokens } from "@/constants/theme-tokens";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { PlayerType } from "@/types/index.types";

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 10;

const createPlayerInput = (name = ""): PlayerType => ({
  id: Crypto.randomUUID(),
  name,
  image: "",
});

export default function Start() {
  const { config, loading, updateGameConfig } = useGameConfig();
  const router = useRouter();
  const { playClickSound } = useAudioSettings();

  const [playerInputs, setPlayerInputs] = useState<PlayerType[]>([
    createPlayerInput(),
  ]);

  useEffect(() => {
    if (loading || config.players.length === 0) {
      return;
    }

    setPlayerInputs(
      config.players.map((player) => ({
        id: player.id,
        name: player.name,
        image: player.image ?? null,
      })),
    );
  }, [config.players, loading]);

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

      playClickSound();

      return previousInputs.filter((input) => input.id !== id);
    });
  };

  const handleStartGame = () => {
    if (!canStartGame) {
      return;
    }

    updateGameConfig({
      players: validPlayers.map((name) => ({
        id: Crypto.randomUUID(),
        name,
        image: null,
      })),
    });

    router.push(CONFIG.MODE);
  };

  if (loading) return <Loading />;

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ဘယ်သူတွေ ကစားမလဲ</ThemedText>
      </View>

      <ThemedText type="description" className="text-center mx-auto max-w-lg">
        ပါဝင်ကစားသွားမှာဖြစ်တဲ့ သူငယ်ချင်းတွေရဲ့ နာမည်တွေကို အောက်မှာ
        ရိုက်ထည့်ပေးပါ။
      </ThemedText>

      <View className="mt-4 flex-1 flex-col gap-3">
        <ThemedText
          type="description"
          style={{
            color:
              playerCount >= 3
                ? ThemeTokens.palette.success[500]
                : playerCount === 0
                  ? ThemeTokens.ui.white
                  : ThemeTokens.palette.primary[500],
          }}
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
                <DeleteButton
                  handleRemovePlayer={handleRemovePlayer}
                  playerInput={playerInput}
                />
              )}
            </View>
          ))}
          <Button
            variant="outline"
            onPress={handleAddPlayer}
            disabled={playerInputs.length >= MAX_PLAYERS}
          >
            <View className="flex-row items-center justify-center gap-2">
              <Feather
                name="plus-circle"
                size={24}
                color={themeTokens.ui.white}
              />
              <ThemedText type="subtitle">နောက်ထပ်ထည့်မယ်</ThemedText>
            </View>
          </Button>
        </ScrollView>

        <View className="mt-auto gap-3 pt-6">
          {!canStartGame && (
            <ThemedText type="description" className="text-center text-red-500">
              အနည်းဆုံး {changeToMMNumber(MIN_PLAYERS)} ယောက်ရှိမှ
              ကစားလို့ရပါမယ်
            </ThemedText>
          )}

          <Button onPress={handleStartGame} disabled={!canStartGame}>
            <ThemedText type="subtitle">ရှေ့ဆက်မယ်</ThemedText>
          </Button>
        </View>
      </View>
    </ThemedView>
  );
}
