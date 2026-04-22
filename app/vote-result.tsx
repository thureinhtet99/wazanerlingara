import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Image, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import {
  IMPOSTER_WIN_QUOTES,
  TEAMMATES_WIN_QUOTES,
} from "@/constants/dummy-data";
import { images } from "@/constants/icons";
import { themeTokens } from "@/constants/theme-tokens";
import { useGameConfig } from "@/hooks/use-game-config";

export default function VoteResult() {
  const { config } = useGameConfig();

  const params = useLocalSearchParams<{
    votedPlayerId?: string | string[];
  }>();

  const votedPlayerId = Array.isArray(params.votedPlayerId)
    ? params.votedPlayerId[0]
    : params.votedPlayerId;

  const votedPlayer = config.players.find(
    (player) => player.id === votedPlayerId,
  );
  const imposter = config.players.find(
    (player) => player.id === config.imposterId,
  );
  const didCatchImposter = votedPlayerId === config.imposterId;

  const outcomeTitle = didCatchImposter ? "Teammates Win!" : "Imposter Win!";

  const outcomeQuote = useMemo(() => {
    const quotePool = didCatchImposter
      ? TEAMMATES_WIN_QUOTES
      : IMPOSTER_WIN_QUOTES;
    const filteredQuotes = config.gameSetting.canImposterGetHint
      ? quotePool
      : quotePool.filter((quote) => !quote.isHint);

    const safePool = filteredQuotes.length > 0 ? filteredQuotes : quotePool;
    const randomIndex = Math.floor(Math.random() * safePool.length);

    return safePool[randomIndex]?.text ?? "";
  }, [didCatchImposter, config.gameSetting.canImposterGetHint]);

  const hint =
    config.gameMode === "word" ? config.word?.hint : config.question?.hint;
  const keyword =
    config.gameMode === "word" ? config.word?.text : config.question?.text;

  const handleRepeatGame = () => {
    router.replace(CONFIG.GAME_SETTING);
  };

  const handleExit = () => {
    router.replace(CONFIG.HOME);
  };

  return (
    <ThemedView className="flex-1 gap-12">
      <View className="gap-2 py-6 px-10">
        <ThemedText
          type="title"
          className="text-center"
          style={
            didCatchImposter
              ? { color: themeTokens.palette.success[400] }
              : { color: themeTokens.palette.primary[400] }
          }
        >
          {outcomeTitle}
        </ThemedText>

        <ThemedText type="description" className="text-center">
          {outcomeQuote}
        </ThemedText>
      </View>

      <View className="flex-1 items-center justify-center">
        <Image
          source={didCatchImposter ? images.teammateWin : images.imposterWin}
          alt={votedPlayer?.name}
          resizeMode="contain"
          borderRadius={10}
          className="w-[340px] h-[340px]"
        />
      </View>

      <View className="gap-2">
        <ThemedText type="description" className="text-center">
          Imposter: {imposter?.name ?? "Unknown"}
        </ThemedText>
        <ThemedText type="description" className="text-center">
          Imposter hint: {hint}
        </ThemedText>

        <ThemedText type="description" className="text-center">
          Keyword: {keyword}
        </ThemedText>
      </View>

      <View className="mt-auto gap-4">
        <Button onPress={handleRepeatGame}>
          <View className="flex-row items-center justify-center gap-2">
            <SvgAsset
              source={require("@/assets/svg/play-icon.svg")}
              width={30}
              height={30}
            />
            <ThemedText type="subtitle">နောက်တစ်ပွဲ ဆော့မယ်</ThemedText>
          </View>
        </Button>

        <Button variant="outline" onPress={handleExit}>
          <View className="flex-row items-center justify-center">
            <SvgAsset
              source={require("@/assets/svg/home.svg")}
              width={40}
              height={40}
            />
            <ThemedText type="subtitle">ထွက်မယ်</ThemedText>
          </View>
        </Button>
      </View>
    </ThemedView>
  );
}
