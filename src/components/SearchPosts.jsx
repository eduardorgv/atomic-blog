import { useContext } from "react";
import { PostContext } from "../App";

export const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = useContext(PostContext);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};
