import { useContext, useRef } from "react";
import { PostList } from "../Store/Posts-list";

const CreatePost = () => {
  const userId = useRef();
  const title = useRef();
  const description = useRef();
  const reactions = useRef();
  const tags = useRef();

  const { addPost } = useContext(PostList);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPost = {
      id: Date.now(),
      title: title.current.value,
      body: description.current.value,
      reactions: reactions.current.value,
      userId: userId.current.value,
      tags: tags.current.value.split(" "),
    };

    addPost(newPost);

    title.current.value = "";
    description.current.value = "";
    reactions.current.value = "";
    userId.current.value = "";
    tags.current.value = "";
  };

  return (
    <form className="m-5 col-8" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input type="text" className="form-control" id="title" ref={title} />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          rows={5}
          ref={description}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          UserId
        </label>
        <input type="text" className="form-control" id="userId" ref={userId} />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          How many people reacted
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactions}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          tags
        </label>
        <input type="text" className="form-control" id="tags" ref={tags} />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
