import { Post } from "./Post"
import { Header } from "./components/Header"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Leonardo Soares"
        content="TesteTesteTesteTesteTesteTesteTeste"
      />
      <Post
        author="Lorena Soares"
        content="TesteTesteTesteTesteTesteTesteTesteTeste"
      />
    </div>
  )
}
