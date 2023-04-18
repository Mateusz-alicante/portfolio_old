import styles from './page.module.css'
import MyImage from '../../../components/image/MyImage'
import Back from '../../../components/Back/Back'
import Header from '../../../components/header/Header'

import main from "./main.jpg"
import team from './team.jpeg'

export default function Who() {
    return (
      <div className={styles.container}>
        <Back text="Back to experiences" to="/experience" />
        <Header image={main} title="U of T biomedical competition:" />
        <h3>Background:</h3>
        <MyImage
          image={team}
          size={400}
          caption="Our team with our physical prototype during the competition."
          pos="right"
        />
       <p>The competition consisted of 8 teams of 5 students each having to design a solution to improve sleep quality in students. The teams were only given about 42 hours from the start of the competition to when we were to carry out our presentations.
</p>
<p>This project especially appealed to me because I often find myself having trouble sleeping, and I value the importance good sleep has as a factor that helps people excel in other aspects of life. Bad sleep quality is a problem that affects millions of people around the world. Being aware that what I am working on could have potentially improved the lived experience of people motivated me to do my best during this design competition.
</p>
<h3>Design Process</h3>
<p>This project helped me develop both my research skills, as it involved exploring different factors that affect sleep quality, and prototyping. I found that my previous Praxis experience has allowed me to feel more confident in this project, and properly back up my claims with relevant research. 
</p>
<p>We chose to develop a tent-like structure which would cover the user’s head, blocking light, sound and having LED lights to wake up the user progressively in the morning.
</p>
<p>We developed both a physical prototype, and a 3D model of the design. I modeled the tent with Fusion 360. Developing the physical prototype based on the 3D model required prototyping and teamwork skills.
</p>
<p>The final stage of the project, when we had to prepare our presentation, was an insightful experience. It allowed me to develop skills related to providing justification for my engineering decisions in an engaging, yet rigorous manner. I am sure this skill will be useful in any field of engineering.
</p>
<h3>Results:</h3>
<MyImage
          image={main}
          size={400}
          caption="A rendering of the final prototype of our team."
          pos="left"
        />
<p>The final products of our design work consisted in a physical prototype on which we have worked on as a team, as well as a 3D design of how the tent would look once in production. The competition also required preparing and giving a presentation backing up our claims and justifying our design. We were able to get third place in the competition, as well as getting the honorable mention for most innovative design.
</p>
<h3>Acknowladgemnts:</h3>
<p>Team members</p>
<p>Amin mobedi,
Binying Fang,
Rachel Yang,
Emma Wang
</p>
      </div>
    );
  }
  