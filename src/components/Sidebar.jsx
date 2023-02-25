import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1674560109079-0b1cd708cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzcyOTE5MDM&ixlib=rb-4.0.3&q=50&w=500" 
            />

            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/28829768?v=4" />
                <strong>Valéria</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}