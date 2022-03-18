import React from 'react'
import styles from './project.module.scss'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiGmail, SiUnity } from 'react-icons/si'

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
            <div className={styles.anim}>
              <div className={styles.tooltip} data-tooltip="In the game you need to dodge the boxes. • Game is made with Unity c# click it to play it.">
                <div className={styles.projects}>
                  <a href='https://play.unity.com/mg/other/cargamekeskiviikko'>
                    Car game
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.anim}>
              <div className={styles.tooltip} data-tooltip="In the game you need to knock off the enemy balls to survive • Game is made with Unity c# click it to play it.">
                <div className={styles.projects2}>
                <a href='https://play.unity.com/mg/other/prototype4-16'>
                    Ball game
                  </a>
                </div>
              </div>
            </div>
          
          <div className={styles.anim}>
            <div className={styles.tooltip} data-tooltip="In the game you need to jump over the fences using space. • Game is made with Unity c# click it to play it.">
              <div className={styles.projects3}>
                <a href='https://play.unity.com/mg/other/prototype4-15'>
                    Fence jumping game
                </a>
              </div>
            </div>
          </div>
          </div>
            <div className={styles.baseborders3}>
              <p>Here you can see few of my projects.</p>
            </div>
            <div className={styles.informationbox}>
                    {/* <ul>
                    <li className='fa fa-github grow'></li>
                </ul> */}
                    <a href='https://github.com/samuli404'>
                        <AiOutlineGithub/>
                    </a>
                <a href='https://gmail.com'>
                    <SiGmail/>
                </a>
                    <a href='https://play.unity.com/u/SamuliKarkkainen'>
                        <SiUnity/>
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Project
