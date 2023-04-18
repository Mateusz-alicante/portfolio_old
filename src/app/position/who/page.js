import styles from './page.module.css'
import dziadek from './dziadek.jpg'
import Image from 'next/image'

import MyImage from '../../../components/image/MyImage.js'

export default function Who() {
    return (
      <div className={styles.container}>
        <h1>Who Am I?</h1>
        <div className={styles.textContainer}>
          <p>
            I am a first year Engineering Science Student. As a child, I moved
            with my family from Poland, to Spain. Just this year, I have made a
            similar change by coming to study in Canada. These experiences have
            proved crucial in my engineering practice, values and teamwork.
          </p>

          <p>
            In my personal profile earlier this semester I mentioned how I feel
            more identified with an engineering student, than a student
            engineer. I believe that this aspect of my personality has changed
            over the last few months. Coming to the end of first year, I have
            had the chance to work on many different engineering projects,
            engage in student competitions, learn new tools, and become familiar
            with new strategies, some of which I want to present in this report.
            I feel like working on these projects has helped me transition my
            personality to become more familiar and knowledgeable with
            engineering practice. Judging from extracurricular projects I have
            engaged in this last semester, I no longer feel as intimidated as
            before with new engineering tasks.
          </p>
          <MyImage
            image={dziadek}
            size={300}
            caption="Me with my grandfather"
            pos="right"
          />

          <p>
            Right now I would consider myself more of a student engineer. I have
            had some experience with both academic and personal engineering
            projects, which have helped me develop the engineering mindset, and
            I am continuously learning how to build upon this mindset in my
            engineering studies.
          </p>
          
          <p>
            Since I was a kid I have observed my grandfather as a construction
            entrepreneur. This has in large part shaped my beliefs about
            engineering. It showed me how an engineer can use his skills,
            abilities and knowledge to help others lead more comfortable, safe
            and more organized lives. I saw how many people can be benefitted
            from the work of a skilled engineer. This is why I want to practice
            engineering. I believe the highest purpose can be found in helping
            others, and engineering provides me with the chance to improve the
            livelihoods of millions of people.
          </p>
        </div>
      </div>
    );
  }
  