import styles from './page.module.css'
import judo from './judo.jpg'
import tank from './tank.jpg'
import Image from 'next/image'
import Link from 'next/link';

export default function Who() {
    return (
      <div className={styles.container}>
        <h1>Strenghts:</h1>
        <div className={styles.textContainer}>
          <h2>Persistance:</h2>
          <p>
            I consider my persistence and strong will to be one of my most
            important strengths as an engineer.
          </p>
          <p>
            From a young age I have engaged in an active lifestyle (train judo,
            swimming). I have taken part in many competitions and strived to
            build a strong will.
          </p>

          <div className={styles.imageContainer}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={judo} width={300} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                Me obtaining first place in a judo competition.
              </p>
            </div>
          </div>
          </div>
          
          <p>
            I value persistence in engineering design work. I prefer to start
            projects earlier and work a set amount of time on them every day,
            instead of rushing the projects the last day before the deadline.
            This not only gives me the feeling that I am more organized and have
            everything under control, but also allows me to have more time to
            think about my designs, improving their quality.
          </p>

          <p>
            This clearly shows in my work. In engineering projects I often take
            the lead to organize the first meeting. It also affects my
            perceptions. I place a special focus on how different engineering
            tools and frameworks can help me lead a more organized life and
            improve the knowledge I have about the project I am working on at
            each stage of engineering design.
          </p>
          <p>
            I believe that since the first semester I have also developed my
            ability to rest more efficiently. As an overachieving engineering
            student it is easy to fall into the routine of constant stress and
            anxiety, and the urge to work all day, even after reaching a point
            when it is no longer effective. I have discovered that being able to
            forget about work and being able to spend a day or two having fun is
            as important as being able to sit down and work for hours without
            distractions. Leading a balanced and healthy life is key for a
            successful professional life.
          </p>

          <h2>Fast learning:</h2>

          <div className={styles.imageContainer2}>
          <div className={styles.imageInnerContainer}>
            <Image className={styles.image} src={tank} width={300} />
            <div className={styles.imageCaptionContainer}>
              <p className={styles.imageCaption}>
                Praxis II prototype model.
              </p>
            </div>
          </div>
          </div>
          <p>
            Another personal strength is the ease with which I can learn new
            skills for projects that I have passion for. I often find myself in
            the situation where starting a new project requires me to learn a
            new intimidating skill. I find that if I am passionate about the
            project, and equipped with the confidence the Engineering Science
            degree equips me with, I am able to learn almost anything and
            develop stunning results.{" "}
          </p>
          
          <p>
            More information on my skills can be found in the{" "}
            <Link href={"/skills"}>Skills section</Link>
          </p>

          <p>I really enjoyed the Praxis II design project specifically for this reason. It allowed me to develop a wide range of skills, especially CAD and poster design skills. 
</p>
        </div>
      </div>
    );
  }
  