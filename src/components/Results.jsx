import { usePost } from "../PostContext";

export const Results = () => {
  const { posts } = usePost();
  return <p>🚀 {posts.length} atomic posts found</p>;
};
