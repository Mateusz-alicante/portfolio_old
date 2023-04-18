import styles from './Header.module.css'
import Image from 'next/image'

export default function MyImage({title, image}) {
    return (
        <div className={styles.container}>
            <Image className={styles.image} src={image} />
            <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    )
}