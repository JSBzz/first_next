"use client";

import { colorMap, popBlock, shiftBlock, transposeGameData } from "@/app/_utils/2048GameUtil";
import { useEffect, useRef, useState } from "react";

const initGame: any = () => {
  const emptyGame: any = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  const firstIndex = Math.floor(Math.random() * emptyGame.length);
  const secondIndex = Math.floor(Math.random() * emptyGame.length);
  emptyGame[firstIndex][secondIndex] = 2;

  return emptyGame;
};

export default function Game2048({ gameStatus, setGameStatus, gameFieldRef }: any) {
  const [mount, setMount] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [game, setGame] = useState(initGame());

  useEffect(() => {
    gameStatus.initFunction = () => {
      setGame(initGame());
    };
  }, []);

  useEffect(() => {
    if (mount) {
      const emptyBlockList: { index: number; blockIndex: number }[] = [];
      game.forEach((blockList: number[], index: number) => {
        blockList.forEach((block: number | null, blockIndex: number) => {
          if (block == null) {
            emptyBlockList.push({ index, blockIndex });
          }
        });
      });
      const randomBlock = Math.floor(Math.random() * emptyBlockList.length);
      const toFillBlockIndex = emptyBlockList[randomBlock];
      game[toFillBlockIndex.index][toFillBlockIndex.blockIndex] = 2;
      setGame([...game]);
      if (emptyBlockList.length == 1) {
        setGameStatus({ ...gameStatus, gameOver: true });
        setGame(initGame());
      }
    } else {
      setMount(true);
    }
  }, [isChange]);

  return (
    <div>
      <div
        ref={gameFieldRef}
        onBlur={() => {
          setGameStatus({ ...gameStatus, start: false });
        }}
        onKeyDown={(e) => {
          e.preventDefault();
          let copyGame = game.map((data: number[]) => [...data]);
          let response = { changeData: game };
          switch (e.key) {
            case "ArrowUp":
              copyGame = transposeGameData(copyGame, game);
              response = shiftBlock(copyGame, "ArrowUp");
              break;
            case "ArrowDown":
              copyGame = transposeGameData(copyGame, game);
              response = popBlock(copyGame, "ArrowDown");
              break;
            case "ArrowRight":
              response = popBlock(copyGame, "ArrowRight");
              break;
            case "ArrowLeft":
              response = shiftBlock(copyGame, "ArrowLeft");
              break;
          }
          if (copyGame.toString() != response.changeData.toString()) {
            if (response.changeData.toString() != game.toString()) {
              setGame([...response.changeData]);
              setIsChange(!isChange);
            }
          }
        }}
        tabIndex={-1} // div에 focus 가능하게 설정
        className="grid grid-cols-4 gap-1 bg-gray-100 w-fit p-2 border border-black"
      >
        {game.map((blockList: number[], rowIndex: number) => {
          type ColorKey = keyof typeof colorMap;
          return blockList.map((block: number, colIndex: number) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              className={`border border-black w-12 h-11 flex items-center justify-center font-bold font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
              style={{ backgroundColor: colorMap[block as ColorKey] }}
            >
              {block}
            </span>
          ));
        })}
      </div>
    </div>
  );
}
