import { router } from "expo-router";
import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import NotificationModal from "@/components/ui/modal";
import { CONFIG } from "@/constants/config";
import { CATEGORIES, GAME_SETTING } from "@/constants/dummy-data";
import NextSection from "@/features/role-reveal/components/next-section";
import Timer from "@/features/role-reveal/components/timer";
import { useRoleReveal } from "@/features/role-reveal/hooks/use-role-reveal";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";

import RoleCard from "../features/role-reveal/components/role-card";

export default function RoleRevel() {
  const { config } = useGameConfig();
  const players = config?.players || [];
  const { playClickSound } = useAudioSettings();

  const [showModal, setShowModal] = useState<boolean>(false);

  const playerCount = config?.players.length || 0;
  const gameMode = config?.gameMode || "";
  const category = config?.category || "";
  const categoryTitle =
    CATEGORIES.find((item) => item.type === category)?.title || category;
  const imposterId = config?.imposterId || "";
  const revealImageId = "";

  const {
    currentPlayer,
    nextPlayer,
    currentPlayerIndex,
    revealed,
    confirmed,
    showBlur,
    timeLeft,
    isResettingProgressBar,
    handleClickCard,
    handleReveal,
    handleConfirm,
    goToNextPlayer,
  } = useRoleReveal(players);

  const handleSuccessAcknowledge = () => {
    setShowModal(false);
    router.push(CONFIG.GAME_SETTING);
  };

  const handleClickBack = () => {
    setShowModal(true);
    playClickSound();
  };

  return (
    <ThemedView className="flex-1 flex-col gap-16">
      <Timer
        timeLeft={timeLeft}
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
        revealContent={gameMode}
        revealImageId={revealImageId ?? ""}
        imposterId={imposterId!}
        imposterCanGetHint={GAME_SETTING.canImposterGetHint}
        hint={categoryTitle}
      />

      <NextSection
        currentPlayerIndex={currentPlayerIndex}
        playersLength={playerCount}
        nextPlayerName={nextPlayer?.name || ""}
        confirmed={confirmed}
        revealed={revealed}
        timeLeft={timeLeft}
        handleConfirm={handleConfirm}
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
