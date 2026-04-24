import { useFocusEffect } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { BackHandler, Pressable, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Modal from "@/components/ui/modal";
import { SvgAsset } from "@/components/ui/svg-asset";
import { CONFIG } from "@/constants/config";
import { CATEGORIES } from "@/constants/dummy-data";
import BottomControls from "@/features/game-play/components/bottom-controls";
import InstructionText from "@/features/game-play/components/instruction-text";
import TimerRing from "@/features/game-play/components/timer-ring";
import { useAudioSettings } from "@/hooks/use-audio-settings";
import { useGameConfig } from "@/hooks/use-game-config";
import { changeToMMNumber } from "@/lib/change-to-mm-number";

import Loading from "./loading";

export default function GamePlay() {
  const { config, loading } = useGameConfig();
  const { playClickSound } = useAudioSettings();

  const timerMode = config.gameSetting.timerMode;
  const totalDuration =
    timerMode === "turn"
      ? config.gameSetting.turnTimer
      : config.gameSetting.durationTimer;

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [remainingMs, setRemainingMs] = useState(totalDuration * 1000);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isDiscussPaused, setIsDiscussPaused] = useState(false);

  const lastTickRef = useRef<number | null>(null);
  const wasTimerRunningBeforeExitRef = useRef(false);

  const players = config.players;
  const playersLength = players.length;
  const currentPlayer = players[currentPlayerIndex];
  const nextPlayer = players[currentPlayerIndex + 1];

  const categoryTitle =
    CATEGORIES.find((item) => item.type === config.category)?.title ||
    config.category;

  const isLastPlayer = currentPlayerIndex >= playersLength - 1;
  const timeLeft = Math.max(Math.ceil(remainingMs / 1000), 0);
  const arcProgress =
    totalDuration > 0
      ? Math.min(1, 1 - remainingMs / (totalDuration * 1000))
      : 1;
  const isWarning =
    totalDuration > 0 && remainingMs <= totalDuration * 1000 * 0.4;

  const canProceedNext = timerMode === "turn" ? timeLeft <= 0 : true;

  useEffect(() => {
    setCurrentPlayerIndex(0);
    setRemainingMs(totalDuration * 1000);
    setIsTimerRunning(true);
    setIsDiscussPaused(false);
    lastTickRef.current = null;
  }, [timerMode, totalDuration, playersLength]);

  useEffect(() => {
    if (!isTimerRunning) {
      lastTickRef.current = null;
      return;
    }

    let frameId = 0;

    const tick = (now: number) => {
      if (lastTickRef.current === null) {
        lastTickRef.current = now;
      }

      const delta = now - lastTickRef.current;
      lastTickRef.current = now;

      setRemainingMs((prev) => Math.max(prev - delta, 0));
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [isTimerRunning]);

  useEffect(() => {
    if (remainingMs <= 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
  }, [remainingMs, isTimerRunning]);

  const handleBack = useCallback(() => {
    wasTimerRunningBeforeExitRef.current = isTimerRunning;
    setIsTimerRunning(false);
    setShowConfirmModal(true);
    playClickSound();
  }, [isTimerRunning, playClickSound]);

  const closeConfirmModal = useCallback(() => {
    setShowConfirmModal(false);

    if (
      wasTimerRunningBeforeExitRef.current &&
      remainingMs > 0 &&
      !isDiscussPaused
    ) {
      setIsTimerRunning(true);
    }
  }, [isDiscussPaused, remainingMs]);

  useFocusEffect(
    useCallback(() => {
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          if (showConfirmModal) {
            closeConfirmModal();
            return true;
          }

          handleBack();
          return true;
        },
      );

      return () => subscription.remove();
    }, [showConfirmModal, closeConfirmModal, handleBack]),
  );

  const handleExit = () => {
    router.replace(CONFIG.GAME_SETTING);
  };

  const handlePrimaryAction = () => {
    if (!currentPlayer) return;

    if (timerMode === "turn" && !canProceedNext) return;

    if (isLastPlayer) {
      handleVote();
      return;
    }

    setCurrentPlayerIndex((prev) => Math.min(prev + 1, playersLength - 1));

    if (timerMode === "turn") {
      setRemainingMs(totalDuration * 1000);
      setIsTimerRunning(true);
      lastTickRef.current = null;
    }
  };

  const handlePauseDuration = () => {
    if (timerMode !== "duration") return;

    setIsTimerRunning(false);
    setIsDiscussPaused(true);
  };

  const handleContinue = () => {
    if (timerMode !== "duration") return;

    setIsDiscussPaused(false);
    if (remainingMs > 0) {
      setIsTimerRunning(true);
    }
  };

  const handleVote = () => {
    router.replace(CONFIG.VOTE);
  };

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
    <ThemedView className="flex-1 gap-6">
      <View className="mb-6 mt-1 flex-row items-start justify-end">
        <Pressable
          className="h-14 w-14 items-center justify-center"
          onPress={handleBack}
          accessibilityRole="button"
          accessibilityLabel="Exit"
        >
          <SvgAsset
            source={require("@/assets/svg/exit.svg")}
            width={38}
            height={38}
          />
        </Pressable>
      </View>

      <View className="gap-3">
        <ThemedText type="description" className="text-center">
          အမျိုးအစား: {categoryTitle}
        </ThemedText>

        <ThemedText type="description" className="text-center">
          Imposter အရေအတွက်: (
          {changeToMMNumber(config.gameSetting.imposterCount)}) ယောက်
        </ThemedText>
      </View>

      {timerMode === "turn" && (
        <ThemedText type="title" className="text-center my-6">
          လက်ရှိ အလှည့်ကျသူ: {currentPlayer.name}
        </ThemedText>
      )}

      <View className="items-center justify-center my-6">
        <TimerRing
          timeLeft={timeLeft}
          arcProgress={arcProgress}
          isPaused={timerMode === "duration" && isDiscussPaused}
          isWarning={isWarning}
        />
      </View>

      <View className="mt-auto gap-4 w-full">
        {timerMode === "turn" && (
          <InstructionText
            isLastPlayer={isLastPlayer}
            nextPlayerName={nextPlayer?.name || "-"}
          />
        )}

        <BottomControls
          timerMode={timerMode}
          isLastPlayer={isLastPlayer}
          disabledPrimary={!canProceedNext}
          isDiscussPaused={isDiscussPaused}
          onPrimaryPress={handlePrimaryAction}
          onPausePress={handlePauseDuration}
          onContinuePress={handleContinue}
          onVote={handleVote}
        />
      </View>

      <Modal
        visible={showConfirmModal}
        variant="error"
        title="ဂိမ်းကိုရပ်မှာ သေချာပြီလား"
        message="အခုထွက်လိုက်ရင် ကစားလက်စ ပွဲစဉ် ပျက်သွားပါလိမ့်မယ်။"
        primaryButtonText="ထွက်မယ်"
        secondaryButtonText="ဆက်ကစားမယ်"
        onPrimaryPress={handleExit}
        onSecondaryPress={closeConfirmModal}
      />
    </ThemedView>
  );
}
