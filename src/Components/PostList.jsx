import { useContext } from "react";

import { PostList as PostListData } from "../Store/Posts-list";
import Post from "./Post";

function PostList() {
  const { postList } = useContext(PostListData);
  // console.log(postList);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
