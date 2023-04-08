"use client"

import Link from 'next/link'
import styles from './nav.module.css'
import { usePathname } from 'next/navigation';

const pages = {"Home": '/', "About me": '/position', "Skills": "/skills", "Experiences" : "/experience"}

export default function Nav() {
    const pathname = usePathname()
    return (
        <div className={styles.container}>
            {Object.entries(pages).map(([name, link]) => 
                        <Link key={link} href={link} className={styles.linkText}><div className={styles.link}><div className={
                            link == '/' ? (pathname == link ? styles.active : "") : (pathname.includes(link) ? styles.active : "")
                        }>{name}</div></div></Link>
            )}
        </div>
    )
}