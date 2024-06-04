//ArrowLeft
export function shiftBlock(copyGame: number[][], arrowType: "ArrowUp" | "ArrowLeft") {
  const initGame: any[][] = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  copyGame.map((blockList: number[], index: number) => {
    const newLine: { number: number | null; merged: boolean }[] = [];
    while (blockList.length != 0) {
      const shiftBlock = blockList.shift();
      if (shiftBlock != null) {
        if (newLine.length == 0) {
          newLine.push({ number: shiftBlock, merged: false });
        } else if (newLine.at(-1)?.number == shiftBlock && newLine.at(-1)?.merged != true) {
          newLine[newLine.length - 1] = { number: shiftBlock * 2, merged: true };
        } else {
          newLine.push({ number: shiftBlock, merged: false });
        }
      }
    }
    while (newLine.length < 4) newLine.push({ number: null, merged: false });
    if (arrowType == "ArrowLeft") {
      newLine.map((block, blockIndex) => {
        return (initGame[index][blockIndex] = block.number);
      });
    } else {
      newLine.map((block, blockIndex) => {
        return (initGame[blockIndex][index] = block.number);
      });
    }
  });

  return { changeData: initGame };
}

export function popBlock(copyGame: number[][], arrowType: "ArrowRight" | "ArrowDown") {
  const initGame: any[][] = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  copyGame.map((blockList: number[], index: number) => {
    const newLine: { number: number | null; merged: boolean }[] = [];
    while (blockList.length != 0) {
      const popBlock = blockList.pop();
      if (popBlock != null) {
        if (newLine.length == 0) {
          newLine.unshift({ number: popBlock, merged: false });
        } else if (newLine[0].number == popBlock && newLine[0].merged != true) {
          newLine[0] = { number: popBlock * 2, merged: true };
        } else {
          newLine.unshift({ number: popBlock, merged: false });
        }
      }
    }
    while (newLine.length < 4) newLine.unshift({ number: null, merged: false });
    if (arrowType == "ArrowRight") {
      newLine.map((block, blockIndex) => {
        return (initGame[index][blockIndex] = block.number);
      });
    } else {
      newLine.map((block, blockIndex) => {
        return (initGame[blockIndex][index] = block.number);
      });
    }
  });
  return { changeData: initGame };
}

export function transposeGameData(copyGame: number[][], originData: number[][]) {
  copyGame.map((blockList: number[], index: number) => {
    blockList.map((block: number, blockIndex: number) => {
      return (copyGame[blockIndex][index] = originData[index][blockIndex]);
    });
  });
  return copyGame;
}
export const colorMap = {
  2: "#EDE0C8",
  4: "#F2B179",
  8: "#F59563",
  16: "#F67C5F",
  32: "#F65E3B",
  64: "#EDCF72",
  128: "#EDCC61",
  256: "#EDC850",
  512: "#EDC53F",
  1024: "#EDC22E",
  2048: "#3C3A32",
  4096: "#8BC34A",
  8192: "#00BCD4",
  16384: "#FF5722",
};
