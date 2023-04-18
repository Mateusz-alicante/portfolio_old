"use client"

import Link from 'next/link'
import styles from './layout.module.css'
import { usePathname } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faCompassDrafting, faDumbbell, faHeart, faQuestion, faHouse } from '@fortawesome/free-solid-svg-icons'

const pages = {
    "Home": ["/position", faHouse],
    "Who Am I?": ["/position/who", faPerson], 
    "What Engineering is to me": ["/position/engineering", faCompassDrafting],
    "Strengths": ["/position/strenghts", faDumbbell],
    "Biases": ["/position/biases", faQuestion],
    "Values": ["/position/values", faHeart]
}

export default function Nav({ children }) {
    const pathname = usePathname()
    return (
      <div className={styles.outerContainer}>
        <div className={styles.navContainer}>
          {Object.entries(pages).map(([name, [link, icon]]) => (
            <Link
            scroll={false}
              href={link}
              className={pathname == link ? styles.active : styles.inactive}
              key={link}
            >
              <div className={styles.linkContainer}>
                <div className={styles.linkIcon}>
                  <FontAwesomeIcon size="2x" icon={icon} />{" "}
                </div>
                <h4 className={styles.pageLink}>{name}</h4>
              </div>
            </Link>
          ))}
        </div>
        {children}
      </div>
    );
}