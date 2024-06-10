export function getNextObject(
  direction: string,
  snakeHeadPos: { x: number; y: number },
  playFiled: number[][]
) {
  let object = null;
  let position = { x: 0, y: 0 };
  if (direction == "RIGHT") {
    position = { x: snakeHeadPos.x + 1, y: snakeHeadPos.y };
    object = playFiled[snakeHeadPos.y][snakeHeadPos.x + 1];
  } else if (direction == "LEFT") {
    position = { x: snakeHeadPos.x - 1, y: snakeHeadPos.y };
    object = playFiled[snakeHeadPos.y][snakeHeadPos.x - 1];
  } else if (direction == "UP") {
    position = { x: snakeHeadPos.x, y: snakeHeadPos.y - 1 };
    object = playFiled[snakeHeadPos.y - 1][snakeHeadPos.x];
  } else if (direction == "DOWN") {
    position = { x: snakeHeadPos.x, y: snakeHeadPos.y + 1 };
    object = playFiled[snakeHeadPos.y + 1][snakeHeadPos.x];
  }
  return { object, position };
}

export function makeSnakeFood(copyFiled: any) {
  const floorPosList: { x: number; y: number }[] = [];
  copyFiled.map((objectList: any, objectListIndex: number) => {
    objectList.map((object: any, objectIndex: number) => {
      if (object == SnakeCode.FLOOR) {
        floorPosList.push({ x: objectIndex, y: objectListIndex });
      }
    });
  });
  const randomFoodIndex = Math.floor(Math.random() * floorPosList.length);
  const foodCreatePos = floorPosList[randomFoodIndex];
  return foodCreatePos;
}

export function initSnakeGame(snake: any, gameField: any) {
  const snakePos = snake.getAll();
  snakePos.map((snakeNode: any) => {
    gameField[snakeNode.data.y][snakeNode.data.x] = SnakeCode.SNAKE;
  });
  const floorPosList: { x: number; y: number }[] = [];
  gameField.map((objectList: any, objectListIndex: number) => {
    objectList.map((object: any, objectIndex: number) => {
      if (object == SnakeCode.FLOOR) {
        floorPosList.push({ x: objectIndex, y: objectListIndex });
      }
    });
  });
  const randomFoodIndex = Math.floor(Math.random() * floorPosList.length);
  const foodCreatePos = floorPosList[randomFoodIndex];
  return foodCreatePos;
}

const SnakeCode = {
  FOOD: 3,
  WALL: 2,
  SNAKE: 1,
  FLOOR: 0,
};
