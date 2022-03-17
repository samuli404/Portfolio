import React from 'react'
import styles from './project.module.scss'

type ProjectProps = {

}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.baseborders}>
          <p>Aaaaaaaaaa</p>
        </div>
        <div className={styles.baseborders2}>
          <div className={styles.projects}>
          <a href='https://play.unity.com/mg/other/cargamekeskiviikko'>
            Car game
          </a>
          </div>
          <div className={styles.projects2}>
          <p>challenge</p>
          </div>
          <div className={styles.projects3}>
          <p>prototype</p>
          </div>
          
          
        </div>
        <div className={styles.baseborders3}>
          <p>Aaaaaaaaaaa</p>
        </div>
      </div>

    </div>
  )
}

export default Project
