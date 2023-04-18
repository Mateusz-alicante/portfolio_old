import styles from './page.module.css'
import comp from './comp.jpg'
import abandoned from './abandoned.jpg'
import Image from 'next/image'
import Link from 'next/link';

export default function Who() {
  return (
    <div className={styles.container}>
      <h1>Biases:</h1>
      <div className={styles.textContainer}>
        <h2>Preference for individual projects:</h2>
        <p>
          I often find myself not giving enough value to teamwork. Since my
          first year in school I have had a strong preference for individual
          projects. I felt that being in a team with different people only
          slowed me down, and did not allow me to work at my own pace. Coming to
          university, this mindset meant that I preferred doing projects on my
          own. This is also something I have mentioned in my personal statement.
          Since then, I have taken part in more group activities. Praxis II, but
          especially extracurricular projects, like the U of T biomedical
          competition, have shown me the power of teamwork. For the first time
          in my life I have experienced how rewarding it can be to work with a
          group of other passionate students, who are ready to do their best for
          the success of the team.
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={comp} width={300} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                Me and my frined taking part in the UofT Marshmallow building
                challenge.
              </p>
            </div>
          </div>
        </div>
        <p>
          I have found that the individual can benefit from teamwork as he has a
          group of people that hold him accountable, thus increasing his own
          efficiency.
        </p>
        <p>
          Team projects can also be extremely rewarding in terms of how
          enjoyable the work is. The best experiences I had since moving to
          Canada were definitely the ones I spent on extracurricular group
          projects.
        </p>
        <p>
          Spending some of my weekends in the Myhal basement building robots for
          a design competition or competing against other teams in building the
          tallest marshmallow tower is an unbeatable experience.
        </p>
        <p>
          Since my personal statement I have valued teamwork more and more. Now
          I have more confidence while working in a team, and are able to see
          how good teamwork is a crucial requirement for coming up with
          something great.
        </p>
        <h2>Hands on attitude towards projects:</h2>
        <div className={styles.imageContainer2}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={abandoned} width={300} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                Praxis II portotype which had to be abandoned.
              </p>
            </div>
          </div>
        </div>
        <p>
          I often catch myself being too enthusiastic about hands-on work. This
          is especially true about Praxis projects. I can spend hours working a
          3d model of a design, or assembling a 3d print, forgetting about the
          importance of justification, argument and testing. This also means
          that If I have a great idea during the divergence process, I have a
          tendency to stick to it, undervaluing any new concepts which come up
          simply because I really want to build the prototype I thought about
          earlier. During these two semesters in praxis I have realized that a
          thoughtful and intentional design is a crucial component of any
          engineering work, and all of its stages, yes, even research and
          verification, are equally important towards the success of a project.
        </p>
        <p>
          A particularly painful, yet valuable experience, was when me and my
          praxis team had to abandon the idea of a complex and cool plastic
          collection robot that would go around beaches with a set of complex
          machinery. Even though I have spent days working on 3d-printing all of
          the parts needed for this robot, it was clear that another solution
          was simpler, which meant that it would be easier to justify.
          Additionally this solution matched better with our requirements model,
          and the expectation of our praxis project, which was to improve the
          levied experience of the community we were working with. This showed
          me even though I can be fixated on a specific design, it is valuable
          to be able to let go, and choose a design that is easier to build,
          verify and recommend.
        </p>
      </div>
    </div>
  );
}
  