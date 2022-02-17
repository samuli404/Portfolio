import React from 'react';
import styles from './example3.module.scss';

const Example3: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexRow}>
                <div className={styles.split50}>
                    <div className={styles.flexLeft}>
                        <h1>OON SAMPPA</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dolor, omnis exercitationem adipisci fugiat possimus earum laborum sequi expedita autem sint delectus soluta illum labore quam. Ex saepe quod dolorem eveniet eum itaque, obcaecati qui quisquam quasi sequi nisi ipsa hic at reiciendis quam voluptates doloribus quos perspiciatis corrupti. Ea?</p>
                    </div>
                    <div className={styles.flexRight}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam voluptatem porro iure, magni quisquam dolore quo eum suscipit eius labore autem, ut, fuga necessitatibus culpa voluptate? Minus aut voluptate voluptatem odio. Et, voluptate atque! Voluptatem facere deserunt et dolorem suscipit reprehenderit unde, dignissimos tempora tenetur praesentium sit nam illum quo commodi ut illo eaque doloremque, fugiat cum facilis alias aspernatur. Officiis consequatur, autem at quaerat sapiente quae voluptatibus error quisquam velit minima id ipsum, eaque et distinctio hic? Quam iusto necessitatibus eum fugit id recusandae cupiditate minus dolorem ea quisquam. Autem eaque odio praesentium non, pariatur aliquid recusandae ex.
                    </div>
                </div>
            </div>
            <div className={styles.flexRow}>
                <div>
                    Aaaaaaaaaaaa
                </div>
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
