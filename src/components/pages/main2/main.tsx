import React from 'react'
import styles from './main.module.scss';
import kuva1 from '../../media3/Muokattu.jpg';
type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentRow}>
        <div className={styles.contentLeft}>
            <h1>Hei olen Samuli</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deserunt voluptatem vel ad sequi, similique excepturi dolor veniam porro cumque modi nam a nemo placeat officiis, assumenda, praesentium ea tenetur repellendus culpa amet eius maiores. Esse accusamus perspiciatis architecto porro fugit laudantium optio debitis quis mollitia, repellat vero dolorum nihil.</p>
            <h2>My first game</h2>
        </div>
        <div className={styles.contentRight}>
            <img src={kuva1} alt="Kuva on rikki D:"/>
        </div>
        <div className={styles.contentTop}>
        <div className={styles.containerImages}></div>
        <div className={styles.containerImages2}></div>
      </div>
      </div>
    </div>
  )
}

export default Main
