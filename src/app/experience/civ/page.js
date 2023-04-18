import styles from './page.module.css'
import MyImage from '../../../components/image/MyImage'
import Back from '../../../components/Back/Back'
import Header from '../../../components/header/Header'

import main from "./main.jpg"
import building from './building.png'
import drawing from './drawing.png'
import mat from './mat.jpeg'

export default function Civ() {
    return (
      <div className={styles.container}>
        <Back text="Back to experiences" to="/experience" />
        <Header image={main} title="CIV 102 bridge building project:" />
        <h2>Background:</h2>
        <p>The first semester CIV 102 course involves building a cardboard bridge. The bridges are then compared to each other based on which one can hold the largest amount of weight.
</p>
<h2>Design Process:
</h2>
<MyImage
          image={mat}
          size={400}
          caption="Output of my MatLab code showing forces across the bridge."
          pos="right"
        />
<p></p>
<p>The first part of the project was designing a MatLab application to find the most optimal structure for the bridge. This involved a great deal of theory learned throughout the semester, as well as good programming skills to put all this theory into practice. I was personally in charge of doing this, and accordingly I learned a lot about Matlab and about scientific modeling in general. Matlab is a key skill in many industries. It is used in applications ranging from exoskeleton design, to medical imaging of the brain to predict diseases. 
</p>
<p>This project really matched my strengths. I loved the fact that it gave us the chance to learn new skills and methods, and allowed us to employ them in a real world project.
</p>
<MyImage
          image={drawing}
          size={200}
          caption="One of my teamamtes cutting the matboard according to engineering drawings."
          pos="left"
        />
<p>Once the design was decided upon, it was time to build the bridge. This required careful optimization, as we were only allowed to use a limited amount of material in the project. The building process was also a valuable experience. 
</p>
<p>It gave us insight into building physical prototypes. Instead of just relying on mathematics, we realized that there are also many aspects of bridge strength that are not captured by the equations given to us in the course. We decided to also apply common sense and chose a design with many vertically-oriented flanges, which based on our experience would be able to carry a larger load.
</p>
<MyImage
          image={building}
          size={200}
          caption="Building of the bridge."
          pos="right"
        />
<p>Developing this intuition is very important in any engineering  endeavor. An engineer cannot blindly rely on calculations. He must evaluate whether what he is studying is in accordance with his intuition, and study the implications of each of his engineering decisions.
</p>
<p>During the project, we also had to create a set of engineering drawings. This is an important skill to learn, as in any industry it is important to have accurate models and representations of a possible design before starting production. The project has given me the chance to learn how to design comprehensive and clear engineering drawings with software.
</p>

<h2>Design products:</h2>
<MyImage
          image={main}
          size={400}
          caption="The final testing of the bridges."
          pos="left"
        />
<p>
Ultimately, Our bridge design exceeded the expectations set out by the teaching team, and was able to withstand one of the highest loads from among the bridges in our class tutorial section.
</p>

<h2>Acknowledgements:</h2>
<p>Team members during the bridge project.
</p>
<p>Samson Chow
</p>
<p>Anthony Pinson
</p>
      </div>
    );
  }
  