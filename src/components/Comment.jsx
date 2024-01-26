/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
