import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/post/post.action";

const Posts = () => {
  const posts = useSelector((store) => store.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
}, []);
return (
  <div>
    <h1>Post</h1>
    {posts.map((post) => (
      <ul key={post.id}>
        <img style={{width:"200px",height:"200px"}} src={post.message}/>
      </ul>
    ))}
  </div>
);
};

export default Posts;
