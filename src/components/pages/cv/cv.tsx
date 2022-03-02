import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.d}>My Cv</h1>
      <div className={styles.a}>Lorem ipsum dolor sit amet.</div>
      <div className={styles.b}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt recusandae eos fuga repellat illum reprehenderit culpa, nesciunt tenetur magni.</div>
      <div className={styles.c}>Infobox</div>
    </div>
  )
}

export default Cv
