import styles from './page.module.css'
import Image from 'next/image'
import diversity from './diversity.jpg'
import val from './val.jpg'
import Link from 'next/link';

export default function Who() {
  return (
    <div className={styles.container}>
      <h1>Values:</h1>
      <div className={styles.textContainer}>
     
        <h2>Access to learning resources:</h2>
        <p>
        I believe having access to free and available learning resources is a crucial step in having a more equal and developed society. In my years in high school, I have greatly benefited from free online materials that helped me learn many skills ranging from Python programming to Fusion 360 3D modeling. In my engineering practice, I want to make sure that any materials that can help other people develop their skills are readily available for them.
        </p>
        
        <h2>Responsibility:</h2>
        <p>
        I bear responsibility to be one of the most noble causes any engineer, and even every human in general, can aspire to. I believe that if we take full responsibility for our work, and for the people our work affects, we will be able to work in the best manner possible, and do so for the good of other people. 
        </p>
        <p>In my engineering practice I feel responsible for the tasks that are assigned to me, and I want to complete them in the best quality possible. I avoid at all cost leaving important tasks unattended, or delegating them to other people because I do not want to bear the responsibility.
</p>
<h2>Diversity:</h2>
<div className={styles.imageContainer}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={diversity} width={300} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                My MAT185 class in the second semester with high diversiy.
              </p>
            </div>
          </div>
        </div>
        <p>
        Being an international student, it is easy for me to relate to people from different cultures and backgrounds. I enjoy being in multicultural settings and learning about everyone’s story. 
        </p>
        <p>
        In my engineering teamwork last semester, I felt I could relate closely to foreign members of my group, and easily understand their approach to engineering.
</p>
<p>
  In my design work, I am also determined to make sure that language and culture are not barriers for users and designers. I have experienced how enriching interactions with other cultures can be, and I want to make sure that my design products are able to help people from any background, no matter their culture or language.
</p>

<h2>Healthy life balance:
</h2>
        <p>
        I strongly believe that taking good care of oneself is the most important aspect in any type of work, or even in life. It has been proven again and again that good sleep and a good diet are a cornerstone for performance in the workplace. It can often be a challenge to be able to let things wait until tomorrow, and being able to go to sleep at a reasonable time. However, I believe that taking good care of oneself is well worth it, and that it should take precedence over working unreasonable hours.
        </p>

        <h2>Concern for others:

</h2>
<div className={styles.imageContainer2}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={val} width={300} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                One of my group members validating one of our desings during the Praxis II project.
              </p>
            </div>
          </div>
        </div>
        <p>
        When working on an engineering project, I often find that designing a device which helps people in any way is a great motivation for me in order to do my best. Knowing that what I am working on will have a real impact on the lives of people, and will allow them to overcome a minor inconvenience or a major problem allows me to see a deeper meaning in my engineering work. I have found it helpful to frame some of my engineering projects from this perspective, being mindful about how my work will be able to help people.
        </p>
      </div>
    </div>
  );
}
  