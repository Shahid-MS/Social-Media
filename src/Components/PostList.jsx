// import { useContext } from "react";

// import { PostList as PostListData } from "../Store/Posts-list";
import Post from "./Post";
import Welcome from "./Welcome";
// import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

function PostList() {
  // const { postList, fetching } = useContext(PostListData);
  // console.log(postList);
  const postList = useLoaderData();

  return (
    <>
      {/* {fetching && <Loading />} */}
      {postList.length == 0 && <Welcome />}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};

export default PostList;
