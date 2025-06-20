const PostCard = ({ post }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        <div>
          <h4 className="font-semibold">{post.user}</h4>
          <p className="text-xs text-gray-500">{post.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{post.text}</p>
      <div className="flex flex-wrap gap-2 text-blue-500 text-xs mb-3">
        {post.hashtags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <img
        src={post.image}
        alt="post"
        className="w-full rounded-xl border-2 border-purple-500 hover:scale-105 transition"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-3">
        <span>👍 {post.likes} Likes</span>
        <span>💬 {post.comments} Comments</span>
        <span>↗️ {post.shares} Shares</span>
      </div>
    </div>
  );
  
  export default PostCard;