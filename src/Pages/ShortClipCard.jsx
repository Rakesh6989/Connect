import { useRef, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SendIcon from "@mui/icons-material/Send";

const ShortClipCard = ({ reel }) => {
  const videoRef = useRef(null);
  const [liked, setLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="relative w-full h-[80vh] sm:h-[85vh] rounded-xl overflow-hidden bg-black shadow-xl">
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        autoPlay
        loop
        muted={isMuted}
        controls={false}
        className="w-full h-full object-cover"
      />

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white z-10"
      >
        {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </button>

      {/* Gradient Overlay Content */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">

        {/* Caption and user */}
        <div className="mb-4">
          <h3 className="font-semibold">@{reel.username}</h3>
          <p className="text-sm opacity-90">{reel.caption}</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center text-white mb-3">
          <div className="flex items-center space-x-6 text-xl">
            <button onClick={() => setLiked(!liked)}>
              {liked ? (
                <FavoriteIcon className="text-red-500" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </button>
            <button>
              <ChatBubbleOutlineIcon />
            </button>
            <button>
              <ShareIcon />
            </button>
          </div>
          <span className="text-xs text-gray-300">{reel.time}</span>
        </div>

        {/* Comment input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 px-3 py-1 rounded-full bg-white text-black text-sm outline-none"
          />
          <button onClick={handleAddComment}>
            <SendIcon />
          </button>
        </div>

        {/* Display Comments */}
        {comments.length > 0 && (
          <div className="mt-2 max-h-32 overflow-y-auto bg-black/40 rounded-md p-2 text-sm">
            {comments.map((cmt, idx) => (
              <p key={idx} className="border-b border-white/10 py-1">{cmt}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortClipCard;
