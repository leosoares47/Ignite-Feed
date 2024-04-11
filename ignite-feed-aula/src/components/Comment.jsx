import styles from "./Comment.module.css"
import { Trash } from "phosphor-react"
import { ThumbsUp } from "phosphor-react"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/leosoares47.png" />
      <div className={styles.commentBox}>
        <div className={styles.content}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Léo Soares</strong>
              <time dateTime="">Cerca de 1hr atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Léo, parabéns boa sorte!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
