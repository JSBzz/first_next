import BoardCardList from "./components/organism/BoardCardList";
export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] ">
      <div className="flex justify-center mt-12 z-0">
        <BoardCardList />
      </div>
    </div>
  );
}
