/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../Store/Posts-list";
import { useContext } from "react";
function Post({ post }) {
  // console.log(post);
  const { deletePost } = useContext(PostListData);

  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        <div className="badge">
          {post.tags.map((tag) => (
            <span className="badge badge-pill text-bg-primary me-2" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* reactions */}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <FaHeart className="me-1" />
        {post.reactions.likes}
      </span>
      <button
        className="btn btn-danger m-2"
        style={{ width: "3rem", height: "3rem", padding: "0rem" }}
        onClick={() => {
          deletePost(post.id);
        }}
      >
        <MdDelete style={{ fontSize: "1.5rem" }} />
      </button>
    </div>
  );
}

export default Post;
