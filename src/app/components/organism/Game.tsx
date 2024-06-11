"use client";
import { useEffect, useRef, useState } from "react";
import { GameFrame } from "../molecule/GameFrame";
import { GameLoader } from "../molecule/GameLoader";

export function Game() {
  const [gameStatus, setGameStatus] = useState({
    selectGame: 2048,
    start: false,
    gameOver: false,
    initFunction: () => {},
  });
  const gameFieldRef = useRef(null);
  useEffect(() => {
    setGameStatus({ ...gameStatus, start: false, gameOver: false, initFunction: () => {} });
  }, [gameStatus.selectGame]);

  return (
    <GameFrame gameStatus={gameStatus} setGameStatus={setGameStatus} gameFieldRef={gameFieldRef}>
      <GameLoader
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        gameFieldRef={gameFieldRef}
      />
    </GameFrame>
  );
}
