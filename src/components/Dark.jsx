import React, { useState } from "react";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";

const Like = () => {
  const [likes, setLikes] = useState(10);
  const [comments, setComments] = useState(20);
  return (
    <div className="relative w-80 rounded-4xl overflow-hidden shadow-lg ml-120 mt-[-360px]">
      <img
        src="src/assets/images/11th.png"
        alt="11th-image"
        className="w-80 h-90 object-cover"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white flex justify-around py-4">
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center space-x-1 cursor-pointer"
        >
          <FaHeart className="text-white" />
          <span>{likes}</span>
        </button>
        <button
          onClick={() => setComments(comments + 1)}
          className="flex items-center space-x-1 cursor-pointer"
        >
          <FaComment className="text-white" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaShareAlt className="text-white" />
        </button>
      </div>
    </div>
  );
};
export default Like;
