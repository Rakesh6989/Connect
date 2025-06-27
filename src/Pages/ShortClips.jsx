import ShortClipCard from "./ShortClipCard";
const dummyReels = [
  {
    id: 1,
    username: "Rakesh",
    caption: "Throwback to my trip! 🌍",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    time: "5m ago",
  },
  {
    id: 2,
    username: "Sneha",
    caption: "New dance drop 💃🔥",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    time: "10m ago",
  },
  {
    id: 3,
    username: "Ravi Dev",
    caption: "Work hard, stay focused! 🧠💪",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    time: "20m ago",
  },
];

const ShortClips = () => {
  return (
    <div className="bg-black min-h-screen p-4 pt-20">
      <h2 className="text-2xl text-center text-white font-bold mb-6">🔥 Reels</h2>
      <div className="flex flex-col gap-8">
        {dummyReels.map((reel) => (
          <ShortClipCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
};

export default ShortClips;
