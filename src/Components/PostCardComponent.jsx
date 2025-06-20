import { useState } from "react";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(post.initialComments || []);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
    } else {
      setLikes((prev) => (prev > 0 ? prev - 1 : 0));
    }
    setLiked(!liked);
  };

  const handleCommentToggle = () => {
    setShowCommentInput((prev) => !prev);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;
    setComments((prev) => [...prev, commentText.trim()]);
    setCommentText("");
  };

  const handleShare = () => {
    alert("Post shared! (demo action)");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-6 w-full max-w-xl mx-auto">
      <div className="flex items-center mb-3">
        <img
          src={post.userAvatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold">{post.username}</h3>
          <p className="text-sm text-gray-500">{post.time}</p>
        </div>
      </div>

      <p className="mb-3 text-gray-800">{post.caption}</p>
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full h-auto rounded-xl mb-3 object-cover"
        />
      )}
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <button
          onClick={handleLike}
          className={`hover:text-blue-500 flex items-center ${
            liked ? "text-blue-600 font-semibold" : ""
          }`}
        >
          👍 Like {likes}
        </button>
        <button onClick={handleCommentToggle} className="hover:text-blue-500">
          💬 Comment
        </button>
        <button onClick={handleShare} className="hover:text-blue-500">
          🔗 Share
        </button>
      </div>
      {showCommentInput && (
        <form
          onSubmit={handleCommentSubmit}
          className="mt-3 flex flex-col space-y-2"
        >
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-3 py-1 rounded self-start"
          >
            Post Comment
          </button>
        </form>
      )}
      {comments.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold">Comments:</h4>
          {comments.map((c, i) => (
            <p
              key={i}
              className="text-gray-700 text-sm border-b border-gray-200 pb-1"
            >
              {c}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
