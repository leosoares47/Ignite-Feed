import React from "react"

export function App() {
  return (
    <div>
      <header className="header">
        <img src="src/assets/logo.png" alt="Logotipo Ignite Feed" />
        <h1>Ignite Feed</h1>
      </header>
      <section className="sectionp">
        <img src="src/assets/perfil.png" alt="foto de perfil" />
        <h3>Leslie Alexander</h3>
        <p>UI Designer</p>
        <div className="separator"></div>
        <button className="editperfil">
          <img src="src/assets/pincel.png" alt="pincel" />
          Editar seu Perfil
        </button>
      </section>
    </div>
  )
}
