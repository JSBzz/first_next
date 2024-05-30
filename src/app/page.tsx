import { Chat } from "./components/organism/Chat";
import BoardCardList from "./components/organism/BoardCardList";
export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] ">
      <div>
        <div className="float-right right z-10 mt-20">
          <Chat />
        </div>

        <div className="absolute left-[20%] mt-12 z-0">
          <BoardCardList />
        </div>
      </div>
    </div>
  );
}
