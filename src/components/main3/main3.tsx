import React from 'react';
import styles from './main3.module.scss';
import kuva from '../media3/Muokattu.jpg'


const Example3: React.FC = () => {
    return (
        <div className={styles.container}>
            
            <div className={`${styles.flexRow} ${styles.first}`}>
                <div className={styles.split50}>
                    <div className={styles.flexLeft}>
                        <h1 >Hei olen Samuli</h1>
                        <p>I'm an software developer student studying in Myyrmäen varia for 3:thrd year and this is my portfolio. </p>
                    </div>
                    <div className={styles.flexRight}>
                        <img src={kuva} alt="gg" />
                    </div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.projektiKuvat}>

                    <div className={styles.unityKuva}></div>
                    <div className={styles.unityKuva2}></div>
                    <div className={styles.unityKuva3}></div>
                    <div className={styles.unityKuva4}></div>

                    </div>
                </div>
            </div>

        
    )
}

export default Example3;
