import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.imgur.com/CCMsBQc.png"
        alt=""
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/leosoares47.png"
          alt=""
        />
        <strong>Leonardo Soares</strong>
        <span>Web Developer Junior</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
