import { Post } from "./Post"
import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Leo Zika" content="Honoravel homem" />
        </main>
      </div>
    </div>
  )
}
