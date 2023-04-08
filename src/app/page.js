import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
  
    <div className={styles.info}>
      <FontAwesomeIcon icon={faArrowUp} size="lg" /> 
      <h3>Click a section to read more</h3>
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </div>
    )
}
