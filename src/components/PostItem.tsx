import React, { FC } from "react";
import { IPosts } from "../models/IPosts";
import { postAPI } from "../services/PostService";
import "../styles/Post.css";

interface PostItemProps {
  post: IPosts;
  remove: (post: IPosts) => void;
  update: (post: IPosts) => void;
}

export const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    event.stopPropagation();
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <div className="post" onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
