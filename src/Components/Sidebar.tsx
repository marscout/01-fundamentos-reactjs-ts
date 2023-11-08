import { Avatar } from './Avatar';
import styles from './sidebar.module.css'
import { PencilLine } from "phosphor-react";



export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1698414392375-fb1d76af5edc?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
           
            <div className={styles.profile}>

                <Avatar src="https://github.com/marscout.png"/>

                <strong>Marcelo Rondini</strong>
                <span>Fullstack Developer</span>
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