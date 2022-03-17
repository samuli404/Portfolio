import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.education}>
        <h6>asd</h6>
      </div>
      <div className={styles.cv}>
      <h1>Contacts</h1>
      <p>Please email me for: Samuli.karkkainen10@gmail.com </p>
        <h1>Work experience</h1>
        <h2>Digi- ja väestötieto virasto Helsinki</h2>
        <p>2 weeks of on the job learning,</p>
        <h3>Jakelujuniorit oy</h3>
        <p>I was a mailman for about an year</p>
        <h4>Tikkurilan prisma TET</h4>
        <p>I was shelfing for 2 weeks</p>
        <h5>Current job Transval kilo oy</h5>
        <p>Doing a part time warehouse job in posti</p>
        <div className={styles.certificates}>
          <p>Aaaaaaaa</p>
        </div>
      </div>
      
    </div>
  )
}

export default Cv
