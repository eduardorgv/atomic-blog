import { useContext } from "react";
import { PostContext } from "../App";

export const Results = () => {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
};
