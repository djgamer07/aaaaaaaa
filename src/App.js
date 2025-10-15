import "./App.css";
import Cabecalho from "./cabecalho";
import Nav from "./nav";
import Tabela from "./tabela";
import Slideshow from "./slideshow";
import Footer from "./footer";
import ListaMusicos from "./listamusicos";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Cabecalho />
      <main className="main-container">
        <Nav />
        <div className="content-container">
          <h2>Próximos Eventos</h2>
          <h3>Concerto no Iscte - Dezembro 2022</h3>
          <a href="https://www.iscte-iul.pt/event/3096/trio-de-jazz-concerto" target="_blank" rel="noreferrer">
            <img src="/source_imgs/banda_jazz.png" alt="Trio Jazz performing" id="imgjazz" width="400" />
          </a>
          <p>A 16 de dezembro de 2022, o Iscte irá promover uma noite agradável de partilha de música e cultura do jazz...</p>
          <Tabela />
          <Slideshow />
          <h2>Conheça os nossos músicos</h2>
          <ListaMusicos />
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button
              onClick={() => navigate("/formvoluntario")}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              Tornar-me Voluntário
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;