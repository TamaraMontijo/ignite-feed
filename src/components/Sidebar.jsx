import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <Avatar src='https://media.licdn.com/dms/image/D4D03AQEn7JPvjHWoIA/profile-displayphoto-shrink_400_400/0/1704826509874?e=1711584000&v=beta&t=AmQ9uf5_k0fVLxG1GRKU7tf2Mb61onpY4wQu5fBGC0I'/>
        <strong>Tamara Montijo</strong>
        <span>Software Engineer</span>
        <footer>
          <a href="/">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
