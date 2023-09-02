import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { createRandomPost } from "./helpers/createRandomPost";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddPost = useCallback((post) => {
    setPosts((posts) => [post, ...posts]);
  },[])

  function handleClearPosts() {
    setPosts([]);
  }

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }
  }, [searchedPosts, searchQuery])

  return (
    <PostContext.Provider
      value={value}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext)
  if(context === undefined)
    throw new Error('Error ❌: PostContext was used outside of the PostProvider')
  return context;
}
