import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/D4D03AQEn7JPvjHWoIA/profile-displayphoto-shrink_400_400/0/1704826509874?e=1711584000&v=beta&t=AmQ9uf5_k0fVLxG1GRKU7tf2Mb61onpY4wQu5fBGC0I"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Tamara Montijo</strong>
            <span>Frontend Engineer</span>
          </div>
        </div>

        <time title="11 de maio às 8h13" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋 </p>
          
          <p>Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀</p>
          
          <p>👉{' '}<a href="/">jane.design/doctorcare</a></p>
            
          <p>
            <a href="/">#novoprojeto</a>{' '}
            <a href="/">#nlw</a>{' '}
            <a href="/">#rocketseat</a>{' '}
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
