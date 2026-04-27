import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import BackButton from "@/components/back-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { CONFIG } from "@/constants/config";
import GameInfo from "@/features/game-setting/components/game-info";
import ImposterCounter from "@/features/game-setting/components/imposter-counter";
import TimerMode from "@/features/game-setting/components/timer-mode";
import ToggleImposterHint from "@/features/game-setting/components/toggle-imposter-hint";
import {
  getRandomQuestionByCategory,
  getRandomWordByCategory,
} from "@/features/game-setting/lib/get-random-item";
import { AVATAR_IDS } from "@/features/role-reveal/lib/avatar";
import { shuffleArray } from "@/features/role-reveal/lib/shuffle";
import { useGameConfig } from "@/hooks/use-game-config";
import { getAllowedImposterCount, pickRandomImposterIds } from "@/lib/imposter";

import Loading from "./loading";

export default function GameSetting() {
  const { config, loading, updateGameConfig } = useGameConfig();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openConfirmModal = () => setShowConfirmModal(true);
  const closeConfirmModal = () => setShowConfirmModal(false);

  const handleStartGame = () => {
    if (!config.players.length) {
      closeConfirmModal();
      return;
    }

    // Start game config (shuffle players and avatars, configure imposter and shuffle words and questions by category)
    const shuffledAvatarIds = shuffleArray([...AVATAR_IDS]);
    const playersWithAvatars = config.players.map((player, index) => ({
      ...player,
      imageId: shuffledAvatarIds[index % shuffledAvatarIds.length],
    }));

    const effectiveImposterCount = getAllowedImposterCount(
      playersWithAvatars.length,
      config.gameSetting.imposterCount,
    );
    const randomImposterIds = pickRandomImposterIds(
      playersWithAvatars,
      effectiveImposterCount,
    );

    const randomWord = getRandomWordByCategory(config.category);
    const randomQuestion = getRandomQuestionByCategory(config.category);

    if (config.gameMode === "word" && !randomWord) {
      closeConfirmModal();
      return;
    }

    if (config.gameMode === "question" && !randomQuestion) {
      closeConfirmModal();
      return;
    }

    updateGameConfig({
      players: playersWithAvatars,
      imposterIds: randomImposterIds,
      gameSetting: {
        imposterCount: effectiveImposterCount,
      },
      word: config.gameMode === "word" ? randomWord : null,
      question: config.gameMode === "question" ? randomQuestion : null,
    });

    closeConfirmModal();
    router.replace(CONFIG.ROLE_REVEAL);
  };

  if (loading) return <Loading />;

  return (
    <ThemedView className="flex-1">
      <View className="mb-6 mt-1 flex-row items-start justify-center">
        <BackButton />

        <ThemedText type="title">ဂိမ်းဆက်တင်</ThemedText>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-10 gap-4"
        showsVerticalScrollIndicator={false}
      >
        <ImposterCounter />
        <TimerMode />
        <ToggleImposterHint />
        <GameInfo />
      </ScrollView>

      <View className="mt-auto pt-6">
        <Button onPress={openConfirmModal}>
          <ThemedText type="subtitle">ဂိမ်းစမယ်</ThemedText>
        </Button>
      </View>

      <Modal
        visible={showConfirmModal}
        title="ဂိမ်းစမှာ သေချာပြီလား"
        message="ဆက်တင်တွေကို စစ်ပြီးပြီဆိုရင် ဂိမ်းကို စတင်နိုင်ပါတယ်။"
        primaryButtonText="စတင်မယ်"
        secondaryButtonText="မစသေးဘူး"
        onPrimaryPress={handleStartGame}
        onSecondaryPress={closeConfirmModal}
      />
    </ThemedView>
  );
}
