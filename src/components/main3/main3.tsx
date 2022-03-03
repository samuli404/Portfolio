import React from 'react';
import styles from './main3.module.scss';
import kuva from '../media3/Muokattu.jpg'
import pelikuva from '../media5/Unitylogopeliin.jpg'

const Example3: React.FC = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.flexRow}>
                <div className={styles.split50}>
                    <div className={styles.flexLeft}>
                        <h1 >Hei olen Samuli</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolor, omnis </p>
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
                    <div className={styles.unityKuva2}></div>
                    <div className={styles.unityKuva3}></div>

                    </div>
                </div>
            </div>

        
    )
}

export default Example3;
