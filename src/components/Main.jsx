import { memo } from "react"
import { FormAddPost } from "./FormAddPost"
import { Posts } from "./Posts"

export const Main = memo(() => {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  )
})
