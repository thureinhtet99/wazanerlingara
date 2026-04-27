import { useFocusEffect } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { BackHandler } from "react-native";

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
import {
  registerGoToNextPlayer,
  resetGoToNextPlayer,
} from "@/hooks/use-spinner-next-player";

import RoleCard from "../features/role-reveal/components/role-card";

import Loading from "./loading";

export default function RoleRevel() {
  const { config, loading } = useGameConfig();

  const players = config.players;
  const { playClickSound } = useAudioSettings();

  const [showModal, setShowModal] = useState<boolean>(false);

  const playerCount = config.players.length;
  const gameMode = config.gameMode;
  const category = config.category;

  const categoryTitle =
    CATEGORIES.find((item) => item.type === category)?.title || category;
  const imposterIds = config.imposterIds;
  const revealContent =
    gameMode === "word"
      ? (config.word?.text ?? "")
      : (config.question?.text ?? "");
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
    isResettingProgressBar,
    handleClickCard,
    handleReveal,
    goToNextPlayer,
  } = useRoleReveal(players);

  useEffect(() => {
    registerGoToNextPlayer(goToNextPlayer);
    return () => {
      resetGoToNextPlayer();
    };
  }, [goToNextPlayer]);

  const canProceedNext = timeLeft <= 0 && confirmed;

  const handleSuccess = () => {
    setShowModal(false);
    router.replace(CONFIG.GAME_SETTING);
  };

  const handleBack = useCallback(() => {
    setShowModal(true);
    playClickSound();
  }, [playClickSound]);

  useFocusEffect(
    useCallback(() => {
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          if (showModal) {
            setShowModal(false);
            return true;
          }

          handleBack();
          return true;
        },
      );

      return () => subscription.remove();
    }, [showModal, handleBack]),
  );

  if (loading) return <Loading />;

  if (!currentPlayer) {
    return (
      <ThemedView className="flex-1 items-center justify-center px-6">
        <ThemedText type="subtitle" className="text-center">
          ကစားသမား မရှိသေးပါ။{" "}
          <Link href={CONFIG.HOME} className="underline active:text-red-500">
            Start screen
          </Link>{" "}
          မှာ player တွေထည့်ပြီး ပြန်ဝင်ပါ။
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="flex-1 flex-col gap-12">
      <Timer
        timeLeft={timeLeft}
        isResettingProgressBar={isResettingProgressBar}
        handleBack={handleBack}
      />

      <ThemedText type="subtitle" className="text-center">
        အမျိုးအစား: {categoryTitle}
      </ThemedText>

      <RoleCard
        currentPlayer={currentPlayer}
        gameMode={gameMode}
        revealed={revealed}
        showBlur={showBlur}
        confirmed={confirmed}
        timeLeft={timeLeft}
        handleClickCard={handleClickCard}
        handleReveal={handleReveal}
        revealContent={revealContent}
        imposterIds={imposterIds}
        imposterCanGetHint={config.gameSetting.canImposterGetHint}
        hint={hint}
      />

      <NextSection
        currentPlayerIndex={currentPlayerIndex}
        playersLength={playerCount}
        nextPlayerName={nextPlayer?.name || ""}
        canProceedNext={canProceedNext}
        // handleClickNext={goToNextPlayer}
      />

      <NotificationModal
        visible={showModal}
        variant="error"
        title="ထွက်မှာသေချာပြီလား"
        message="အခုထွက်လိုက်ရင် ကစားလက်စပွဲစဉ် ပျက်သွားပါလိမ့်မယ်"
        primaryButtonText="ထွက်မယ်"
        secondaryButtonText="ဆက်ကစားမယ်"
        onPrimaryPress={handleSuccess}
        onSecondaryPress={() => setShowModal(false)}
      />
    </ThemedView>
  );
}
