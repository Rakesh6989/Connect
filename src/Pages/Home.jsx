import { useState } from "react";
import PostCard from "../Components/PostCardComponent";
const Home = () => {
  const [posts] = useState([
    {
      id: 1,
      username: "Rakesh Ranjan",
      userAvatar: "https://i.pravatar.cc/300?img=5",
      time: "Just now",
      caption: "Just launched my new project! 💻🚀",
      image: "https://cdn.pixabay.com/photo/2024/12/27/14/58/owl-9294302_1280.jpg",
      initialComments: ["Great job!", "Congrats!"],
    },
    {
      id: 2,
      username: "Jane Doe",
      userAvatar: "https://i.pravatar.cc/300?img=15",
      time: "2 hours ago",
      caption: "Exploring the mountains 🏔️",
      image: "https://cdn.pixabay.com/photo/2015/08/10/18/01/dancing-882940_960_720.jpg",
      initialComments: ["Beautiful!", "Wish I was there!"],
    },
    {
      id: 3,
      username: "John Smith",
      userAvatar: "https://i.pravatar.cc/300?img=12",
      time: "1 day ago",
      caption: "Good vibes only ✨",
      image: "https://cdn.pixabay.com/photo/2023/01/12/18/08/beach-7714610_960_720.jpg",
    },
  ]);

  return (
    <div className="bg-[#f2f2f2] min-h-screen p-4 py-[5rem]">
      <h2 className="text-2xl font-bold mb-6 text-center">📢 Latest Posts You May Like</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
