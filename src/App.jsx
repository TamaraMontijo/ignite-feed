import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css'

import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
      author="'Tamara Montijo'"
      content="'Lorem ipsum'"
      />
      <Post 
      author="Teste"
      content="Oi"
      />
      </main>
      </div>
      
      
    </div>
    
  )
}

export default App
