import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.education}>
        <h6>Education</h6>
        <div className={styles.studiesinformation}>
          <p>• I'm currently in school doing 3thrd year in Myyrmaen varia ammattiopisto for IT and Programming.</p>
          <p>• My best programming languages are: c#, css, html, javascript, node.</p>
          <p>• I have also completed Cybersecurity introduction, Cyber security essentials, Packet tracer Get connected, Packet tracer intoduction</p>
        </div>
      </div>
      <div className={styles.cv}>
      <h1>Contacts</h1>
      <h4>Please email me: Samuli.karkkainen10@gmail.com </h4>
        <h3>Work experience</h3>
        <h2>Digi- ja väestötieto virasto Helsinki</h2>
        <p>2 weeks of on the job learning,</p>
        <h2>Jakelujuniorit oy</h2>
        <p>I was a mailman for about an year</p>
        <h2>Tikkurilan prisma TET</h2>
        <p>I was shelfing for 2 weeks</p>
        <h2>Current job Transval kilo oy</h2>
        <p>Doing a part time warehouse job in posti</p>
        <div className={styles.certificates}>
          <p>Aaaaaaaa</p>
        </div>
      </div>
      
    </div>
  )
}

export default Cv
