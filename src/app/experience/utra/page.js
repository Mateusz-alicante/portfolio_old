import styles from './page.module.css'
import MyImage from '../../../components/image/MyImage'
import Back from '../../../components/Back/Back'
import Header from '../../../components/header/Header'

import main from "./main.jpg"
import teams from './teams.jpg'
import code from './code.jpg'

export default function Who() {
    return (
      <div className={styles.container}>
        <Back text="Back to experiences" to="/experience" />
        <Header image={main} title="UTRA (University of Toronto Robotics Association) hackathon:" />
        <h3>Background:</h3>
        <MyImage
          image={teams}
          size={400}
          caption="Top 3 teams at the award ceremony."
          pos="right"
        />
      <p>This hackathon consists of two challenges and had a duration of 2 days. The first one is based on completing an obstacle course with as few collisions as possible, while the second one involves designing a robot to meet a specific and relevant challenge in society. Each team is able to choose the one they want to engage in. Me together with my partner decided to focus on the first challenge. There were about 10 other teams which chose to participate in the first challenge.
</p>
<p>The challenge appealed to me because it offered the opportunity to learn something new, and apply it to a competition. It is a fun and engaging way of learning very valuable skills.
</p>

<h3>Design Process</h3>
<p>The hackathon offered participants the opportunity to engage in workshops to help them expand their knowledge about building robots with Arduino and designing 3D parts using Fusion 360. These two workshops were very helpful to get our team started on the design of our robot, and have a better idea of how the components that we were given could be used for this purpose. 
</p>
<p>Attending this workshop was also very valuable in terms of helping me further develop some of my skills as an engineer. Although I have already had some experience with using Fusion 360, I learned a lot about some Arduino components that I have never used before, and which I had the chance to apply later on during the hackathon.
</p>
<MyImage
          image={code}
          size={400}
          caption="Me together with my teammate programming the robot during the competition."
          pos="right"
        />
<p>The first part of the design process consisted of learning how different components work. This was a very valuable part of the design process. It pushed us to understand a large number of components which are used in robotics, and common robotics programming conventions. This will not only be useful in future robotics hackathons, as I will be able to get started on building the robot much quicker, but also in any future possible job, where I may be required to work with electronic components or any type of electric circuit in general.
</p>
<p>The second part of the design process was considering the specific challenges (obstacle courses) our robot would have to pass. This consisted in specifying what behaviors are expected of our design in each environment, and making the best use of the components to achieve these behaviors.
</p>
<p>The robot had to be remotely controlled, be able to follow a line drawn on the ground, and stop a certain distance from an obstacle. 
</p>
<MyImage
          image={main}
          size={300}
          caption="The robot my team built during the competition."
          pos="left"
        />
<h3>Results:</h3>
<p>We were able to design a robot that completes 5 out of 6 of the obstacle courses. We were able to successfully integrate the necessary components and produce the necessary behavior in the robot.
</p>
<p>Our team was able to achieve third place in the competition. This was an excellent experience to learn and test our skills in the domain in robotics. The skills I have learned during this hackathon will certainly prove crucial in future design endeavors.
</p>


<h3>Acknowladgemnts:</h3>
<p>Team members</p>
<p>Amin mobedi
</p>
      </div>
    );
  }
  