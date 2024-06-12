export function GameFrame({ gameStatus, setGameStatus, gameFieldRef, children }: any) {
  return (
    <div>
      <div className="bg-gray-200  h-[269px] w-[224px] rounded-md border border-gray-400 ">
        <div className=" bg-gray-300 text-center font-bold bold h-[25px]">
          <select
            onChange={(e) => {
              setGameStatus({ ...gameStatus, selectGame: e.target.value });
            }}
          >
            <option>2048</option>
            <option>snake</option>
          </select>
        </div>
        <div
          className="bg-yellow-200 absolute h-[207px] w-[224px] z-10 opacity-90 text-center content-center"
          onFocus={() => {
            setGameStatus({ ...gameStatus, start: true });
            gameFieldRef?.current?.focus();
          }}
          hidden={gameStatus.start}
          tabIndex={-1}
        >
          <span className="font-bold text-2xl">Press To Start</span>
        </div>
        <div
          className="bg-yellow-200 absolute h-[207px] w-[224px] z-10 opacity-90 text-center content-center"
          onFocus={() => {
            setGameStatus({ ...gameStatus, gameOver: false });
            gameFieldRef?.current?.focus();
          }}
          hidden={!gameStatus.gameOver}
          tabIndex={-1}
        >
          <span className="font-bold text-2xl">Game Over</span>
        </div>
        <div className="bottom-0">{children}</div>
        <div className="h-[30px] flex mt-1 object-center m-auto">
          <button
            className="bg-red-300 rounded-md border hover:bg-red-400 p-1"
            onClick={gameStatus.initFunction}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
