import { usePost } from "../PostContext";
import { Test } from "../Test";

export const List = () => {
  const { posts } = usePost();
  
  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* <Test /> */}
    </>
  );
};
