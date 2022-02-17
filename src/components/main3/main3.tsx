import React from 'react';
import styles from './main3.module.scss';
import kuva from '../media3/Muokattu.jpg'

const Example3: React.FC = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.flexRow}>
                <div className={styles.split50}>
                    <div className={styles.flexLeft}>
                        <h1 >Hei olen Samuli</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolor, omnis exercitationem adipisci fugiat possimus earum laborum sequi expedita autem sint delectus soluta illum labore quam. Ex saepe quod dolorem eveniet eum itaque, obcaecati qui quisquam quasi sequi nisi ipsa hic at reiciendis quam voluptates doloribus quos perspiciatis corrupti. Ea?</p>
                    </div>
                    <div className={styles.flexRight}>
                        <img src={kuva} alt="gg" />
                    </div>
                </div>
            </div>

            <div className={styles.flexRow}>
                <div className={styles.projektiKuvat}>
                    <div className={styles.imgItem}></div>
                    <div className={styles.imgItem}></div>
                    <div className={styles.imgItem}></div>
                    <div className={styles.imgItem}></div>
                </div>
            </div>

        </div>
    )
}

export default Example3;
