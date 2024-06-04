import CustomImage from "../molecule/CustomImage";
import { Chat } from "./Chat";
import Game2048 from "./Game2048";

export function RightNav() {
  return (
    <div className="fixed right-0 top-0 h-screen bg-slate-300 min-w-56 max-w-56">
      <div>
        <CustomImage.User />
      </div>
      <div className="">
        <form className="w-fit flex">
          <select>
            <option>TEST</option>
          </select>
          <input type="text" />
          <button>search</button>
        </form>
      </div>
      <div className="absolute bottom-0">
        <Game2048 />

        <div className="mt-1">
          <Chat />
        </div>
      </div>
    </div>
  );
}
