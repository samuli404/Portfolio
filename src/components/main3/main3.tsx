import React from 'react';
import styles from './main3.module.scss';
import kuva from '../media3/Muokattu.jpg'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiGmail, SiUnity } from 'react-icons/si'


const Example3: React.FC = () => {
    return (
        <div className={styles.container}>
            
            <div className={`${styles.flexRow} ${styles.first}`}>
                <div className={styles.split50}>
                    <div className={styles.flexRight}>
                        <img src={kuva} alt="gg" />
                    </div>
                    <div className={styles.flexLeft}>
                        <div className={styles.borderstyles}>
                        <p>I'm Samuli and i'm an software developer student studying in Myyrmaen varia and this is my portfolio.</p>
                        <p>I'm at the very end of my studys and i'm looking for a intership</p>
                        <p>This was my first game</p>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.splitpictures}>
                    <div className={styles.flexup}>
                        <div className={styles.projektiKuvat}>

                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva}></div>
                                <p>First level of the game</p>
                            </div>
                                
                            
                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva2}></div>
                                <p>Second level of the game</p>
                            </div>
                            
                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva3}></div>
                                <p>Pause menu</p>
                            </div>

                            <div className={styles.projectCard}>
                                <div className={styles.unityKuva4}></div>
                                <p>Options menu</p>
                            </div>

                            <div className={styles.projectCard}>
                                
                                
                                
                            </div>
                            
                            </div>
                        
                    </div>
                    <div className={styles.flexdown}>
                        
                        <p>The game is coded with c# and there is 2 levels on it</p>
                        <p>There is an start menu, options menu, and the pause menu</p>
                        <p></p>

                    </div>
                </div>
                
                <div className={styles.information}>
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
                <div className={styles.text}>
                    <p>Contact details and links</p>
                </div>
                </div>
            </div>
        </div>

        
    )
}

export default Example3;
