import { useEffect, useRef, useState } from "react";

import { PlayerType } from "@/types/index.types";
// import { animate } from "animejs";
// import type { Player } from "@/types/game.type";

export function useRoleReveal(players: PlayerType[]) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const [revealed, setRevealed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showBlur, setShowBlur] = useState(false);

  const [timeLeft, setTimeLeft] = useState(10);
  const [isResettingProgressBar, setIsResettingProgressBar] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const currentPlayer = players[currentPlayerIndex];
  const nextPlayer = players[currentPlayerIndex + 1];

  useEffect(() => {
    if (timeLeft <= 0) {
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
  }, [timeLeft, confirmed]);

  const handleClickCard = () => {
    if (timeLeft <= 0 || revealed || showBlur || confirmed) return;
    setShowBlur(true);
  };

  const handleReveal = () => {
    setShowBlur(false);
    setRevealed(true);

    if (cardRef.current) {
      //   animate(cardRef.current, {
      //     rotateY: [90, 0],
      //     opacity: [0, 1],
      //     duration: 400,
      //   });
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setRevealed(false);
    setShowBlur(false);
  };

  const goToNextPlayer = () => {
    setIsResettingProgressBar(true);

    setCurrentPlayerIndex((i) => i + 1);

    setTimeLeft(10);
    setRevealed(false);
    setShowBlur(false);
    setConfirmed(false);

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
    cardRef,

    handleClickCard,
    handleReveal,
    handleConfirm,
    goToNextPlayer,
  };
}
