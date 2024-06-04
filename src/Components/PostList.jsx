import { useContext, useEffect, useState } from "react";

import { PostList as PostListData } from "../Store/Posts-list";
import Post from "./Post";
import Welcome from "./Welcome";
import Loading from "./Loading";

function PostList() {
  const [fetching, setFetching] = useState(false);
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return ()=>{
        controller.abort();
        console.log("Aborting");
      }
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length == 0 && <Welcome />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
