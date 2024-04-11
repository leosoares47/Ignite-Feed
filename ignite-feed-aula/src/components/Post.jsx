import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/leosoares47.png"
          />
          <div className={styles.authorInfo}>
            <strong>Leonardo Soares</strong>
            <span>Web Developer Junior</span>
          </div>
        </div>
        <time dateTime="">Publicado há 1hr</time>
      </header>
      <div className={styles.content}>
        <p>Falaa galeraa</p>
        <p>Hoje vou ter uma reunião as 15hrs me desejem sortee !!</p>
        <p>
          <a href="#">#novoprojeto</a>
        </p>
        <p>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submite">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
