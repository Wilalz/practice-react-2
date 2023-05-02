import './App.css'
import { Link, Outlet} from 'react-router-dom'
import styles from './styles/styles.module.css'


function App() {
  

  return (
    <div className='App'>
      <div >
        <h1>React</h1>
        <h3>Peticiones asincronicas, APIs, CRUD, Router (rutas) </h3>
        <nav className={styles.nav}>
          <ul className={styles.listas_simples}>
            <br />
            <li>
              {/* ya no se ua el "a" sino el "Link" */}
              {/* <a href="/Home">Home</a> */}
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/rickandmorty"}>1. Rick And Morty API</Link>
            </li>
            <li>
              <Link to={"/userapi"}>2. User Api</Link>
            </li>
            <li>
              <Link to={"/posts"}>3. Posts</Link>
            </li>
            <li>
              <Link to={"/posts/123"}>3.1 Post detail</Link>
            </li>
            <li>
              <Link to={"/reactrouter"}>4. React router</Link>
            </li>
          </ul>
          <br />
        </nav>
      </div>
        <Outlet />

      <hr />
        <span>By Wilson Alzate</span>

      
    </div>
  )
}

export default App
