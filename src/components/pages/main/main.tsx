import React from 'react'
import styles from './main.module.scss'
import kuva from '../../media3/Muokattu.jpg'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main1}></div>
      <div className={styles.main2}>
        <img className={styles.kuva} src={kuva} alt="ei toimi"/>
      </div>
      
      Main
    </div>
  )
}

export default Main
