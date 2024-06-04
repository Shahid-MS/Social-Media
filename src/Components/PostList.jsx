import { useContext } from "react";

import { PostList as PostListData } from "../Store/Posts-list";
import Post from "./Post";
import Welcome from "./Welcome";
import Loading from "./Loading";

function PostList() {
  const { postList, fetching } = useContext(PostListData);
  // console.log(postList);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length == 0 && <Welcome />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
