import React, { useState } from "react";

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

export const CommentBox: React.FC<CommentBoxProps> = ({ onPost }) => {
  const [comment, setComment] = useState("");

  const handlePost = () => {
    if (!comment.trim()) return;
    onPost(comment);
    setComment("");
  };

  return (
    <div>
      <input
        aria-label="comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};
