"use client";
import { LinkedList } from "@/app/_utils/CommonUtils";
import { getNextObject, makeSnakeFood } from "@/app/_utils/SnakeGameUtil";
import Button from "@/app/components/molecule/Button";
import { useEffect, useRef, useState } from "react";

const SnakeCode = {
  SNAKEHEAD: 4,
  FOOD: 3,
  WALL: 2,
  SNAKE: 1,
  FLOOR: 0,
};

const rotateDegree = {
  UP: "",
  RIGHT: "rotate-90",
  DOWN: "rotate-180",
  LEFT: "-rotate-90",
};

const initFiled = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

export default function Test() {
  const [playFiled, setPlayField] = useState<number[][]>(initFiled);
  const [inputDirection, setInputDirection] = useState("RIGHT");
  const [food, setFood] = useState({ exist: false, position: { x: 0, y: 0 } });
  const directionRef = useRef<"UP" | "DOWN" | "RIGHT" | "LEFT">("RIGHT");
  const [snake, setSnake] = useState(new LinkedList({ x: 5, y: 5 }));
  const snakeRef = useRef(snake.getAll());
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (!isGameOver) {
      const timer = setTimeout(() => {
        if (!isGameOver) {
          setInputDirection(directionRef.current);
          const copyFiled = initFiled.map((data: number[]) => [...data]);
          const snakeHeadPos = snake.getHead().data;
          const direction = directionRef.current;
          const nextData = getNextObject(direction, snakeHeadPos, playFiled);

          if (nextData.object == SnakeCode.WALL || nextData.object == SnakeCode.SNAKE) {
            setIsGameOver(true);
          } else if (nextData.object == SnakeCode.FOOD) {
            snake.move(direction);
            snake.insertTail();
            setFood({ exist: false, position: { x: 0, y: 0 } });
          } else if (nextData.object == SnakeCode.FLOOR) {
            snake.move(direction);
          }
          snakeRef.current = snake.getAll();
          snakeRef.current.map((snakeNode) => {
            if (snakeNode == snake.getHead()) {
              copyFiled[snakeNode.data.y][snakeNode.data.x] = SnakeCode.SNAKEHEAD;
            } else {
              copyFiled[snakeNode.data.y][snakeNode.data.x] = SnakeCode.SNAKE;
            }
          });
          if (!food.exist) {
            const foodCreatePos = makeSnakeFood(copyFiled);
            setFood({ exist: true, position: { x: foodCreatePos.x, y: foodCreatePos.y } });
          } else {
            copyFiled[food.position.y][food.position.x] = SnakeCode.FOOD;
          }
          setPlayField([...copyFiled]);
          setTime(time + 1);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [time, isGameOver]);
  // useEffect(() => {
  //   const copyFiled = initFiled.map((data: number[]) => [...data]);
  //   snakeRef.current.map((snakeNode) => {
  //     console.log("snakeNode: ", snakeNode);
  //     copyFiled[snakeNode.data.y][snakeNode.data.x] = SnakeCode.SNAKE;
  //   });
  //   setPlayField([...initFiled]);
  //   console.log(playFiled);
  // }, [snakeRef.current]);
  return (
    <div>
      {isGameOver && "GAME OVER"}
      <div>
        {isGameOver && (
          <Button
            onClick={() => {
              setIsGameOver(false);
              setSnake(new LinkedList({ x: 5, y: 5 }));
            }}
          >
            Retry?
          </Button>
        )}
      </div>
      <div
        className="mt-11 "
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key == "ArrowRight" && inputDirection != "LEFT") directionRef.current = "RIGHT";
          else if (e.key == "ArrowLeft" && inputDirection != "RIGHT") directionRef.current = "LEFT";
          else if (e.key == "ArrowDown" && inputDirection != "UP") directionRef.current = "DOWN";
          else if (e.key == "ArrowUp" && inputDirection != "DOWN") directionRef.current = "UP";
        }}
      >
        {playFiled.map((blockList, index) => {
          return (
            <div key={`${index}-row`} className="max-h-4">
              {blockList.map((block, key) => {
                const degree = rotateDegree[directionRef.current];
                switch (block) {
                  case 4:
                    return (
                      <div
                        className={`relative bg-green-600 inline-block w-4 h-4 border border-gray-400 rounded-t-full ${degree}`}
                      ></div>
                    );
                  case 3:
                    return (
                      <span
                        key={`${index}-${key}-col`}
                        className="bg-yellow-400 inline-block m-[-2] w-4 h-4"
                      ></span>
                    );
                  case 2:
                    return (
                      <span
                        key={`${index}-${key}-col`}
                        className="bg-slate-900 inline-block m-[-2] w-4 h-4"
                      ></span>
                    );
                  case 1:
                    return (
                      <span
                        key={`${index}-${key}-col`}
                        className="bg-green-600 inline-block m-[-2] w-4 h-4 border border-gray-400"
                      ></span>
                    );
                  case 0:
                    return (
                      <span
                        key={`${index}-${key}-col`}
                        className="bg-teal-100 inline-block m-[-2] w-4 h-4 border border-gray-400"
                      ></span>
                    );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
