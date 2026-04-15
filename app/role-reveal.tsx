import { router } from "expo-router";
import { useEffect, useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import NotificationModal from "@/components/ui/modal";
import { CONFIG } from "@/constants/config";
import { GAME_CONFIG, GAME_SETTING, PLAYERS } from "@/constants/dummy-data";
import { svg } from "@/constants/icons";
import NextSection from "@/features/role-reveal/components/next-section";
import Timer from "@/features/role-reveal/components/timer";
import { useRoleReveal } from "@/features/role-reveal/hooks/use-role-reveal";
import { shuffleArray } from "@/features/role-reveal/lib/shuffle";
import { PlayerType } from "@/types/index.types";

import RoleCard from "../features/role-reveal/components/role-card";

const CATEGORY = "အစားအသောက်";

export default function RoleRevel() {
  const [players, setPlayers] = useState<PlayerType[]>(PLAYERS);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { gameMode, word, question, imposterId } = GAME_CONFIG;

  const revealContent = gameMode === "word" ? word?.text : question?.text;
  const revealImageId = gameMode === "word" ? word?.imageId : question?.imageId;
  const hint = gameMode === "word" ? word?.hint : question?.hint;

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
      svg.avatar1Svg,
      svg.avatar2Svg,
      svg.avatar3Svg,
      svg.avatar4Svg,
      svg.avatar5Svg,
      svg.avatar6Svg,
      svg.avatar7Svg,
      svg.avatar8Svg,
      svg.avatar9Svg,
      svg.avatar10Svg,
      svg.avatar11Svg,
      svg.avatar12Svg,
      svg.avatar13Svg,
      svg.avatar14Svg,
      svg.avatar15Svg,
      svg.avatar16Svg,
      svg.avatar17Svg,
      svg.avatar18Svg,
      svg.avatar19Svg,
      svg.avatar20Svg,
      svg.avatar21Svg,
      svg.avatar22Svg,
      svg.avatar23Svg,
      svg.avatar24Svg,
    ];

    const shuffledImages = shuffleArray(avatarImages);

    setPlayers((prev) =>
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
        အမျိုးအစား: {CATEGORY}
      </ThemedText>

      <RoleCard
        currentPlayer={currentPlayer}
        revealed={revealed}
        showBlur={showBlur}
        confirmed={confirmed}
        timeLeft={timeLeft}
        handleClickCard={handleClickCard}
        handleReveal={handleReveal}
        revealContent={revealContent ?? ""}
        revealImageId={revealImageId ?? ""}
        imposterId={imposterId!}
        imposterCanGetHint={GAME_SETTING.canImposterGetHint}
        hint={hint ?? ""}
      />

      <NextSection
        currentPlayerIndex={currentPlayerIndex}
        playersLength={GAME_CONFIG.players.length}
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
