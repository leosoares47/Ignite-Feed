import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/sidebar"

import "./global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Leo Zika" content="Honoravel homem" />
          <Post author="Leo Zika" content="Honoravel homem" />
        </main>
      </div>
    </div>
  )
}
