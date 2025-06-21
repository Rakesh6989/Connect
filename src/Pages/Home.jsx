import { useState } from "react";
import PostCard from "../Components/PostCardComponent";
import PostCreator from "../Components/PostCreator";

const Home = () => {
  const defaultPosts = [
    {
      id: 1,
      username: "Rakesh Ranjan",
      userAvatar: "https://i.pravatar.cc/300?img=5",
      time: "Just now",
      caption: "Just launched my new project! 💻🚀",
      image: "https://source.unsplash.com/random/600x400?tech",
      initialComments: ["Awesome!"],
    },
    {
      id: 2,
      username: "Jane Doe",
      userAvatar: "https://i.pravatar.cc/300?img=15",
      time: "2 hours ago",
      caption: "Exploring the mountains 🏔️",
      image: "https://source.unsplash.com/random/600x400?mountains",
      initialComments: [],
    },
    {
      id: 3,
      username: "John Smith",
      userAvatar: "https://i.pravatar.cc/300?img=12",
      time: "1 day ago",
      caption: "Good vibes only ✨",
      image: "",
    },
    {
      id: 4,
      username: "Anjali Sharma",
      userAvatar: "https://i.pravatar.cc/300?img=9",
      time: "5 minutes ago",
      caption: "Design is not just what it looks like… 💡",
      image: "https://source.unsplash.com/random/600x400?design",
    },
    {
      id: 5,
      username: "Amit Patel",
      userAvatar: "https://i.pravatar.cc/300?img=20",
      time: "10 minutes ago",
      caption: "Sunset views 🌅",
      image: "https://source.unsplash.com/random/600x400?sunset",
    },
    {
      id: 6,
      username: "Kiran Bedi",
      userAvatar: "https://i.pravatar.cc/300?img=18",
      time: "30 minutes ago",
      caption: "Morning motivation 🌞",
      image: "https://source.unsplash.com/random/600x400?morning",
    },
  ];

  const [newPost, setNewPost] = useState({ caption: "", image: "" });
  const [allPostsData, setAllPostsData] = useState(defaultPosts);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handlePostSubmit = () => {
    if (newPost.caption.trim()) {
      const newPostObj = {
        id: Date.now(),
        username: "You",
        userAvatar: "https://i.pravatar.cc/150?img=8",
        time: "Just now",
        caption: newPost.caption.trim(),
        image: newPost.image,
      };
      setAllPostsData((prev) => [newPostObj, ...prev]);
      setNewPost({ caption: "", image: "" });
    }
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen p-4 py-20">
        <PostCreator/>
      <h2 className="text-2xl font-bold mb-6 text-center">📢 Latest Posts</h2>

      {/* Post Creation Box */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost.caption}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, caption: e.target.value }))
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newPost.image}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, image: e.target.value }))
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
        />
        <button
          onClick={handlePostSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      {/* Posts Display */}
      {allPostsData.slice(0, visibleCount).map((post) => (
        <PostCard key={post.id + Math.random()} post={post} />
      ))}

      {/* Load More Button */}
      {visibleCount < allPostsData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            🔄 Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
