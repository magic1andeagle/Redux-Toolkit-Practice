import React, { FC, useState } from "react";
import { IPosts } from "../models/IPosts";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export const PostContainer: FC = () => {
  const [limit, setLimit] = useState(100);

  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(limit);

  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPosts);
  };

  const handleRemove = (post: IPosts) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPosts) => {
    updatePost(post);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Post</button>
      {/*<button onClick={addPosts}>Add posts</button>*/}

      {error && <h1>Произошла ошибка</h1>}
      {isLoading && <h1>Идет загрузка...</h1>}
      {posts?.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          remove={handleRemove}
          update={handleUpdate}
        />
      ))}
    </div>
  );
};

export default PostContainer;
