import Image from 'next/image'
import me from './Mateusz.jpg'
import styles from './intro.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function Intro() {
  return (
      <div className={styles.container}>
        <h1>Engineering Portfolio and Handbook</h1>
        <h2>Mateusz Kazimierczak</h2>
        <div className={styles.content}>
        

          <div className={styles.text}>
          <p>
            Hi! I'm Mateusz , and this website will walk you through who I feel I
            am as a first year engineering student, as well as give you an idea
            of my main design products. 
          </p>
          <p>
          The main purpose of this website is to
            be submitted for one of my assignments for the Praxis II subject in
            my second semester of the Engineering Science program. However, I
            also hope it will serve you to get to know me better. 
          </p>
          <p>
          I decided to
            create this portfolio in this form, because I believe it will be
            more interactive and easy to navigate than a traditional document.
            It is also a great way to showcase my skills.
          </p>
          <div className={styles.bottom}>
            <p>Take a look at different sections of the website</p>
            <FontAwesomeIcon  icon={faArrowDown} size="sm" bounce />
          </div>
          </div>

          <Image
            className={styles.image}
            src={me}
            alt="Picture of the author"
            height={400}
          />
        </div>
      </div>
  );
}