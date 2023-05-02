import './App.css'
import { UserCard } from './components/C14-peticiones/UserCard'
import { RickAndMorty } from './components/C14-peticiones/RickAndMorty'
import { Crud } from './components/C15-peticiones/crud'

function App() {
  

  return (
    <div className='App'>
      <h1>React</h1>
      <h3>Peticiones asincronicas, APIs, CRUD</h3>
      <hr />
      <RickAndMorty />
      <hr />
      <UserCard />
      <hr />
      <Crud />
      <hr />

      
    </div>
  )
}

export default App
