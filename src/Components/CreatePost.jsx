import { Form, redirect } from "react-router-dom";


const CreatePost = () => {
  // const navigate = useNavigate();

  // const { addPost } = useContext(PostList);

  return (
    <Form className="m-5 col-8" method="Post">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input type="text" className="form-control" id="title" name="title" />
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
          name="description"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          UserId
        </label>
        <input type="text" className="form-control" id="userId" name="userId" />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          How many people reacted
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          name="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          tags
        </label>
        <input type="text" className="form-control" id="tags" name="tags" />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  // console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost({ ...post, id: Date.now() });
      console.log(post);
    });

  return redirect("/");
};

export default CreatePost;
