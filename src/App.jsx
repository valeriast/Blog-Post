import './global.css'
import {Header} from './components/Header'
import styles from './app.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post
            author="NomedoAuthor"
            content="primeiro post sobre algo"
          />
          <Post
            author="Laura"
            content="segundo post sobre algo"
          />

        </main>
      </div>
    </div>
  )
}

export default App
