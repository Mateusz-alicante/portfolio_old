import styles from './page.module.css'
import Image from 'next/image'
import french from './french.jpg'
import strands from './strands.jpg'

export default function Who() {
    return (
      <div className={styles.container}>
        <h1>What Engineering is to me?</h1>
        <div className={styles.textContainer}>
          <p>
            I believe engineering to be the application of scientific and
            mathematical tools to build things that accomplish a specific goal.
            It must follow a structured approach and be verifiable according to
            strict rules.
          </p>

          <p>
            I see design, on the other hand, as the application of subjective
            skills like creativity and communication to create something that is
            elegant and is verifiable under subjective terms. Engineering design
            is the combination of these two fields in methodically producing
            something that safely accomplishes a specific task with a specific
            user in mind, elegantly, and with a comprehensive approach.
          </p>
          <div className={styles.imageContainer}>
            <div className={styles.imageInnerContainer}>
              <Image width={100} className={styles.image} src={french} />
              <div className={styles.imageCaptionContainer}>
                <p className={styles.imageCaption}>
                  Model of engineering design by French (1999), emphasises
                  linearity.{" "}
                  <a href="https://www.researchgate.net/figure/Frenchs-model-of-the-design-process-French-1999_fig4_237044149">
                    (source)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <p>
            With regards to the spectrum between Engineering and Design I place
            myself closer to engineering. I feel more confident working with
            more mathematically based concepts, rather than subjective ones. A
            personal bias I often catch myself engaging in is underestimating
            the importance of good justification and argument in my engineering
            projects. For example, in my design report last semester I quickly
            jumped to making a recommendation of a final design, without
            justifying intermediate steps. I hope that future years in the
            Engineering Science program will help me develop the more soft-skill
            aspect of my character.
          </p>

          <p>
            I have the impression that since I wrote the personal statement, I
            have acquired practice with backing my claims up by research, and
            realized how important proper justification is for design. An
            especially eye opening moment for me this semester was the showcase.
            It gave me the opportunity to see how following a proper
            justification process can help an engineer back up his claims and
            engineering decisions to a broad audience. Having proper
            justification really increases the confidence of the public towards
            the design.
          </p>
          <div className={styles.imageContainer2}>
            
            <div className={styles.imageInnerContainer}>
            <Image className={styles.image2} src={strands} width={300} />
              <div className={styles.imageCaptionContainer}>
                <p className={styles.imageCaption}>
                  Strand model of engineering desing{" "}
                  <a href="https://www.researchgate.net/publication/365313393_Metaphors_To_Design_By_Developing_Representations_of_Engineering_Design">
                    (source)
                  </a>
                </p>
              </div>
            </div>
          </div>
          <p>
            Although at the beginning of the semester I argued that I prefer to
            view engineering design as a more linear process, and often feel
            lost in the Frame, Diverge, Converge, Represent (FDCR) model, I
            believe that my position with respect to this has changed. The
            design project in Praxis II has proven to challenge my belief about
            engineering design being a linear process. I experienced that in
            order to complete a design project on time it is crucial not to get
            stuck on one stage of the design, trying to polish everything before
            moving to the next stage. it is also necessary to work on several
            concurrently, as well as return to previous stages of the process.
            What was especially insightful is how much a designer can learn
            about his problem well beyond the framing stage. For example,
            working on developing prototypes can help him develop a deeper
            understanding of the problem at hand.
          </p>
        </div>
      </div>
    );
  }
  