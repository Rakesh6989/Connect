import { useState } from "react";
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const PostCreator = ({ onPost }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!caption.trim()) return;
    onPost({
      id: Date.now(),
      username: "Rakesh Ranjan",
      userAvatar: "https://i.pravatar.cc/150?img=8",
      time: "Just now",
      caption,
      image,
    });
    setCaption("");
    setImage("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 max-w-xl mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="https://i.pravatar.cc/150?img=8"
          alt="avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What's on your mind, Rakesh?"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex gap-4 mb-4 text-gray-600 text-sm">
        <button
          onClick={() => {
            const url = prompt("Enter Image URL");
            if (url) setImage(url);
          }}
          className="flex items-center gap-1 hover:text-blue-500"
        >
          <ImageIcon className="text-lg" /> Photo
        </button>
        <button className="flex items-center gap-1 hover:text-blue-500">
          <PersonAddIcon className="text-lg" /> Tag Friends
        </button>
        <button className="flex items-center gap-1 hover:text-blue-500">
          <LocationOnIcon className="text-lg" /> Location
        </button>
      </div>

      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="preview"
            className="rounded-lg max-h-60 w-full object-cover"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post
      </button>
    </div>
  );
};

export default PostCreator;
