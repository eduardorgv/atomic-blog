import { List } from "./List"

export const Posts = ({ posts }) => {
  return (
    <section>
      <List posts={posts} />
    </section>
  )
}
