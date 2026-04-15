import { router } from "expo-router";
import { useEffect, useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import NotificationModal from "@/components/ui/modal";
import { CONFIG } from "@/constants/config";
import { GAME_SETTING } from "@/constants/dummy-data";
import { svg } from "@/constants/icons";
import NextSection from "@/features/role-reveal/components/next-section";
import Timer from "@/features/role-reveal/components/timer";
import { useRoleReveal } from "@/features/role-reveal/hooks/use-role-reveal";
import { shuffleArray } from "@/features/role-reveal/lib/shuffle";
import { useGameConfig } from "@/hooks/use-game-config";
import { PlayerType } from "@/types/index.types";

import RoleCard from "../features/role-reveal/components/role-card";

export default function RoleRevel() {
  const { config } = useGameConfig();
  const players = config?.players || [];

  const [currentPlayers, setCurrentPlayers] = useState<PlayerType[]>(players);
  const [showModal, setShowModal] = useState<boolean>(false);

  const playerCount = config?.players.length || 0;
  const gameMode = config?.gameMode || "";
  const category = config?.category || "";
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

  useEffect(() => {
    const avatarImages = [
      svg.avatar1,
      svg.avatar2,
      svg.avatar3,
      svg.avatar4,
      svg.avatar5,
      svg.avatar6,
      svg.avatar7,
      svg.avatar8,
      svg.avatar9,
      svg.avatar10,
      svg.avatar11,
      svg.avatar12,
      svg.avatar13,
      svg.avatar14,
      svg.avatar15,
      svg.avatar16,
      svg.avatar17,
      svg.avatar18,
      svg.avatar19,
      svg.avatar20,
    ];

    const shuffledImages = shuffleArray(avatarImages);

    setCurrentPlayers((prev) =>
      prev.map((p, i) => ({
        ...p,
        imageId: shuffledImages[i % shuffledImages.length],
      })),
    );
  }, []);

  const handleSuccessAcknowledge = () => {
    setShowModal(false);
    router.push(CONFIG.GAME_SETTING);
  };

  return (
    <ThemedView className="flex-1 flex-col gap-8">
      <Timer
        timeLeft={timeLeft}
        isResettingProgressBar={isResettingProgressBar}
        handleClickBack={() => setShowModal(true)}
      />

      <ThemedText type="subtitle" className="text-center">
        အမျိုးအစား: {category}
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
        hint={category}
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
