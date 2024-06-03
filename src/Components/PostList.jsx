import { useContext } from "react";

import { PostList as PostListData } from "../Store/Posts-list";
import Post from "./Post";
import Welcome from "./Welcome";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);

  const onGetPostsClick = async () => {
    // alert("Clicked get posts");
    await fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };

  return (
    <>
      {postList.length == 0 && <Welcome onGetPostsClick={onGetPostsClick} />}
      
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
