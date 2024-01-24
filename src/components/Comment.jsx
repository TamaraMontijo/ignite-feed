import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://media.licdn.com/dms/image/D4D03AQEn7JPvjHWoIA/profile-displayphoto-shrink_400_400/0/1704826509874?e=1711584000&v=beta&t=AmQ9uf5_k0fVLxG1GRKU7tf2Mb61onpY4wQu5fBGC0I'/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Tamara Montijo
              </strong>
              <time title="11 de maio às 8h13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
