import styles from './MyImage.module.css'
import Image from 'next/image'

export default function MyImage({image, caption, size, pos}) {
    const style = (pos == "right") ? styles.imageContainerRight : styles.imageContainerLeft
    return (
        <div className={style}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={image} width={size} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                {caption}
              </p>
            </div>
          </div>
        </div>
    )
}