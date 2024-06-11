"use client";
import { useEffect, useState } from "react";
import Game2048 from "../organism/Game2048";
import GameSnake from "../organism/GameSnake";

export function GameLoader({ gameStatus, setGameStatus, gameFieldRef }: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;
  if (gameStatus.selectGame == 2048) {
    return (
      <Game2048 gameStatus={gameStatus} setGameStatus={setGameStatus} gameFieldRef={gameFieldRef} />
    );
  } else if (gameStatus.selectGame == "snake") {
    return (
      <GameSnake
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        gameFieldRef={gameFieldRef}
      />
    );
  }
}
