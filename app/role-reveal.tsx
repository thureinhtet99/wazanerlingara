import { router } from "expo-router";
import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import NotificationModal from "@/components/ui/modal";
import { CONFIG } from "@/constants/config";
import { CATEGORIES } from "@/constants/dummy-data";
import NextSection from "@/features/role-reveal/components/next-section";
import Timer from "@/features/role-reveal/components/timer";
import { useRoleReveal } from "@/features/role-reveal/hooks/use-role-reveal";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";

import RoleCard from "../features/role-reveal/components/role-card";

export default function RoleRevel() {
  const { config } = useGameConfig();
  const players = config.players;
  const { playClickSound } = useAudioSettings();

  const [showModal, setShowModal] = useState<boolean>(false);

  const playerCount = config.players.length;
  const gameMode = config.gameMode;
  const category = config.category;
  const categoryTitle =
    CATEGORIES.find((item) => item.type === category)?.title || category;
  const imposterId = config.imposterId;
  const revealContent =
    gameMode === "word"
      ? (config.word?.text ?? "")
      : (config.question?.text ?? "");
  const revealImageId =
    gameMode === "word"
      ? (config.word?.imageId ?? undefined)
      : (config.question?.imageId ?? undefined);
  const hint =
    gameMode === "word"
      ? (config.word?.hint ?? "")
      : (config.question?.hint ?? "");

  const {
    currentPlayer,
    nextPlayer,
    currentPlayerIndex,
    revealed,
    confirmed,
    showBlur,
    timeLeft,
    maxTime,
    isResettingProgressBar,
    handleClickCard,
    handleReveal,
    goToNextPlayer,
  } = useRoleReveal(players);

  const canProceedNext = timeLeft <= 0 && confirmed;

  const handleSuccessAcknowledge = () => {
    setShowModal(false);
    router.push(CONFIG.GAME_SETTING);
  };

  const handleClickBack = () => {
    setShowModal(true);
    playClickSound();
  };

  if (!currentPlayer) {
    return (
      <ThemedView className="flex-1 items-center justify-center px-6">
        <ThemedText type="subtitle" className="text-center">
          ကစားသမား မရှိသေးပါ။ Start screen မှာ player တွေထည့်ပြီး ပြန်ဝင်ပါ။
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="flex-1 flex-col gap-16">
      <Timer
        timeLeft={timeLeft}
        maxTime={maxTime}
        isResettingProgressBar={isResettingProgressBar}
        handleClickBack={handleClickBack}
      />

      <ThemedText type="subtitle" className="text-center">
        အမျိုးအစား: {categoryTitle}
      </ThemedText>

      <RoleCard
        currentPlayer={currentPlayer}
        revealed={revealed}
        showBlur={showBlur}
        confirmed={confirmed}
        timeLeft={timeLeft}
        handleClickCard={handleClickCard}
        handleReveal={handleReveal}
        revealContent={revealContent}
        revealImageId={revealImageId}
        imposterId={imposterId!}
        imposterCanGetHint={config.gameSetting.canImposterGetHint}
        hint={hint}
      />

      <NextSection
        currentPlayerIndex={currentPlayerIndex}
        playersLength={playerCount}
        nextPlayerName={nextPlayer?.name || ""}
        canProceedNext={canProceedNext}
        timeLeft={timeLeft}
        handleClickNext={goToNextPlayer}
      />

      <NotificationModal
        visible={showModal}
        variant="error"
        title="ထွက်မှာသေချာပြီလား"
        message="အခုထွက်လိုက်ရင် ကစားလက်စပွဲစဉ် ပျက်သွားပါလိမ့်မယ်"
        primaryButtonText="ထွက်မယ်"
        secondaryButtonText="ဆက်ကစားမယ်"
        onPrimaryPress={handleSuccessAcknowledge}
        onSecondaryPress={() => setShowModal(false)}
      />
    </ThemedView>
  );
}
