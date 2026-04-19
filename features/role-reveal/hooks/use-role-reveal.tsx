import { useEffect, useState } from "react";

import { PlayerType } from "@/types/index.types";

const ROLE_REVEAL_TIME = 10;

export function useRoleReveal(players: PlayerType[]) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [timeLeft, setTimeLeft] = useState(ROLE_REVEAL_TIME);
  const [isResettingProgressBar, setIsResettingProgressBar] = useState(false);

  const currentPlayer = players[currentPlayerIndex];
  const nextPlayer = players[currentPlayerIndex + 1];

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

    setTimeLeft(ROLE_REVEAL_TIME);
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
    isResettingProgressBar,

    handleClickCard,
    handleReveal,
    goToNextPlayer,
  };
}
