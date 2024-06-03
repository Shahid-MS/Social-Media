/* eslint-disable react/prop-types */
const Welcome = ({onGetPostsClick}) => {
    // console.log(onGetPostsClick);
  return (
    <>
      <h1 className="text-center m-3">There is no posts</h1>
      <div className="text-center">
        <button className="btn btn-primary" onClick={onGetPostsClick}>Fetch Posts from Server</button>
      </div>
    </>
  );
};

export default Welcome;
