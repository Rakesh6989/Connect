import React from "react";
import PostCard from "../Components/PostCardComponent";
function Feed() {
  const posts = [
    {
      id: 1,
      user: "X_AE_A_13",
      role: "Product Designer, slothUI",
      avatar: "avatar-url",
      text: "Habitant morbi tristique senectus et netus...",
      hashtags: [
        "#amazing",
        "#great",
        "#lifetime",
        "#uiux",
        "#machinelearning",
      ],
      image: "image-url",
      likes: 12,
      comments: 25,
      shares: 187,
    },
    // more post objects...
  ];
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
