import Image from 'next/image'
import styles from './page.module.css'
import MyImage from '../../components/image/MyImage'
import stats from './stats.jpg'
import tetra from './tetra.jpg'
import print from './print.jpg'
import lathe from './lathe.jpg'
import africa from './africa.jpg'

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills:</h1>
      <p>
        In this section I will go over some of my skills. I will make my best to
        provide some relevant context about how I acquired the skill, and some
        projects where I have used it.
      </p>
      <div className={styles.space} />
      <div>
        <h2>Programing skills:</h2>
        <h3>Python:</h3>
        <MyImage
          image={stats}
          size={300}
          caption="Graph desinged with Matplotlib from Praxis poster"
          pos="right"
        />
        <p>
          Last semester I took the ESC180 (Introduction to Computer Programming)
          course. Having learned this language in high school, I have explored a
          wide range of applications. I can develop Machine Learning models
          using scikit learn, make games and even create 3D visualizations using
          this language.
        </p>
        <p>
          I have also used this skill in my praxis coursework this year.
          Specifically it was helpful to generate custom graphs for our final
          poster.
        </p>
        <h3>C Programming:</h3>
        <p>
          This semester I am taking the ESC 190 (Data Structures and
          Algorithms). The course has given me a deeper understanding of
          programming beyond Python. It has provided in depth insight into how
          computers work, and the different ways different types of data are
          stored in memory.
        </p>
        <MyImage
          image={tetra}
          size={300}
          caption="The tetrahedron visualization tool created by me in Unity"
          pos="left"
        />
        <h3>Javascript + HTML:</h3>
        <p>
          Prior to university, I have worked on several web-development
          projects. Apart from giving me technical expertise in this field, this
          has also shown me how to manage bigger projects, and the importance of
          staying organized in software development tasks. More specifically, I
          learned how to use GitHub to manage the different versions and
          iterations of my projects.
        </p>
        <h3>C# + Unity</h3>
        <p>
          Recently, together with a friend, we set out to develop a mathematical
          visualization tool in the game engine Unity. Because of my experience
          with C, it was a breeze learning the C# language and being able to use
          it in a real-world application.
        </p>

        <h2>CAD skills:</h2>
        <h3>3D printing</h3>
        <MyImage
          image={print}
          size={400}
          caption="One of my 3d prints used for a PRaxis presentation."
          pos="right"
        />
        <p>
          Owning a 3D printer while still being in Spain, and the easy access to
          3d printing services on Campus have allowed me to develop an expertise
          in 3D printing. I have modeled and then printed many parts for my
          Praxis projects this year. With every iteration I learned more and
          more about 3d printing, and now I feel very confident printing my
          models.
        </p>

        <h3>Modeling with Fusion 360</h3>
        <p>
          I started learning Fusion 360 before coming to university. But
          ultimately, it was this last semester that I really got the chance to
          develop my skills. During my praxis projects and biomedical
          competition there was a lot of prototyping involved, and 3D modeling
          proved to be an essential part of this process. It not only allowed us
          to visualize how a prototype would look like were we to build it, but
          it was also a great way to showcase how the design is going so far.
        </p>
        <p>
          I am also able to work with the wide range of complimentary tools that
          CAD software often offers, like stress analysis or photorealistic
          renderings of designs.
        </p>

        <h2>Languages:</h2>
        <h3>Polish:</h3>
        <p>I was born in Poland, and attended school there for about 3 years. I speak Polish with my family and I feel very confident with the language.</p>

        <h3>Spanish</h3>
        <p>I spent most of my life in Spain. Most of my friends are from there, and I maintain contact with many Spanish people. Having spent so many years here I feel almost like this was my first language. It is surprising that despite being Polish I have a Spanish accent when speaking English.</p>

        <h3>English</h3>
        <p>In high school I took many courses in English, which definitely helped ease the transition to university in Canada. I feel like this year was the perfect opportunity for me to develop my language skills even further, and be able to use this language with proficiency, especially in formal applications.</p>

        <h2>Other Skills:</h2>
        
        <MyImage
          image={lathe}
          size={200}
          caption="Me working on a Lathe machine during my George Brown course."
          pos="left"
        />
        <h3>Basic machining:</h3>
        <p>During the first semester I had the opportunity to take part in the George Brown machining course. This has allowed me to learn many useful skills like machine shop safety, lathe, mill and drill press. This experience has helped me to appreciate how much work, planning and experience it takes to manufacture even a small and seemingly simple product.
I have also put this skill into practice during my Praxis design projects.
</p>
<MyImage
          image={africa}
          size={300}
          caption="The banner I used in an MUN in Arnhem, The Netherlands, to represent South Africa."
          pos="right"
        />
<h3>Debate:</h3>
<p>I have attended several MUN conferences, as well as organized one for my own high school. Although this may seem unrelated to engineering, in reality it was a great help. It not only helped me to familiarize myself with the more formal aspects of the English language, but it also helped develop my concise writing and argument skills, which are crucial in engineering. Having knowledge of effective communication is a crucial skill for any engineer. Ultimately. The job of engineers is to make decisions dn justify them.

</p>
      </div>
    </div>
  );
}
