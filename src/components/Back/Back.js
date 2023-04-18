import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from './Back.module.css'


export default function Back({text, to}) {
    return (
      <div className={styles.container}>
        <Link href={to} className={styles.link}>
          <div className={styles.innerContainer}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faArrowLeft}
              size="3x"
            />
            <h1 className={styles.text}>{text}</h1>
          </div>
        </Link>
      </div>
    );
}