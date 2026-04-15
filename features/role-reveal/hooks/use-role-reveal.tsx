import { useEffect, useMemo, useState } from "react";

import { useGameConfig } from "@/hooks/use-game-config";
import { PlayerType } from "@/types/index.types";
// import { animate } from "animejs";

export function useRoleReveal(players: PlayerType[]) {
  const { config } = useGameConfig();
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const [revealed, setRevealed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const maxTime = useMemo(() => {
    const mode = config.gameSetting.timerMode;
    return mode === "duration"
      ? config.gameSetting.durationTimer
      : config.gameSetting.turnTimer;
  }, [
    config.gameSetting.durationTimer,
    config.gameSetting.timerMode,
    config.gameSetting.turnTimer,
  ]);

  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [isResettingProgressBar, setIsResettingProgressBar] = useState(false);

  const currentPlayer = players[currentPlayerIndex];
  const nextPlayer = players[currentPlayerIndex + 1];

  useEffect(() => {
    setTimeLeft(maxTime);
  }, [maxTime, currentPlayerIndex]);

  useEffect(() => {
    if (!isTimerRunning) {
      return;
    }

    if (timeLeft <= 0) {
      setIsTimerRunning(false);

      if (!confirmed) {
        setConfirmed(true);
        setRevealed(false);
        setShowBlur(false);
      }

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, confirmed, isTimerRunning]);

  const handleClickCard = () => {
    if (timeLeft <= 0 || revealed || showBlur || confirmed) {
      return;
    }

    setShowBlur(true);
  };

  const handleReveal = () => {
    if (!showBlur || revealed || confirmed) {
      return;
    }

    setShowBlur(false);
    setRevealed(true);

    setIsTimerRunning(true);
  };

  const goToNextPlayer = () => {
    if (timeLeft > 0 || !confirmed) {
      return;
    }

    if (currentPlayerIndex >= players.length - 1) {
      return;
    }

    setIsResettingProgressBar(true);

    setCurrentPlayerIndex((i) => i + 1);

    setTimeLeft(maxTime);
    setRevealed(false);
    setShowBlur(false);
    setConfirmed(false);
    setIsTimerRunning(false);

    setTimeout(() => setIsResettingProgressBar(false), 50);
  };

  return {
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
  };
}
