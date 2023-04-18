import styles from './page.module.css'
import MyImage from '../../../components/image/MyImage'
import Back from '../../../components/Back/Back'
import Header from '../../../components/header/Header'

import main from "./main.jpg"
import diverge from "./diverge.jpg"
import concepts from './concepts.png'
import forces from './forces.jpg'

export default function Who() {
    return (
      <div className={styles.container}>
        <Back text="Back to experiences" to="/experience" />
        <Header image={main} title="Praxis I design project:" />
        <h2>Background:</h2>
       <p>Our design work in Praxis I was framed at solving a “splartz”, an inconvenience in daily life. Because a number of team members are active, young students, a splartz we often encountered was the strap on a gym duffle bag slipping and lengthening while the user is walking with it. Transporting gym equipment with the duffle bag is irritating and bothersome, as the slide buckle does not provide enough force to hold the strap while the user is wearing the bag. We set out to find a solution to this problem, and improve the lived experience of duffle bag users.				
</p>
<h3>Design Process</h3>
<MyImage
          image={diverge}
          size={300}
          caption="Our team members during the diverging process."
          pos="right"
        />
<p>
As part of our commitment to find the best solution, we explored a wide range of alternatives to assess their fit for the application and choose the best performing design. We designed prototypes ranging from belts which can attach to the bag and the user’s hip, to texturized buckles to increase friction on the strap.		
</p>


 
<p>We tested the prototypes based on a range of objectives. These included the weight the attachment can withstand, the comfort of using the attachment and its affordability.
</p>

<p>
Developing these prototypes helped us develop a number of skills. Many of the prototypes were modeled in Fusion 360, which helped me deepen my CAD skills. Testing the prototypes helped us understand how to conduct rigorous and replicable tests, which is crucial for any type of design in industry. Engineers in any industry must not only come up with concepts to solve a design challenge, but they must also develop relevant tests in order to be able to assess how well the design meets expectations.
</p>


<p>The project also required us to write a detailed report explaining our design process and our recommendation. Writing this kind of report is one of the responsibilities of most engineers, and I consider this will be a useful skill in my future engineering projects.
</p>
<MyImage
          image={concepts}
          size={400}
          caption="Two of our concpets in the divergence phase."
          pos="right"
        />
<p>It can be easily seen how this design blends in with my position, and more specifically the “healthy lifestyle” value. The project was a great way of helping people to engage in physical activity while removing some of the bothering details inherent to doing so.
</p>
<MyImage
          image={forces}
          size={400}
          caption="Force analysis performed on one of our portotypes."
          pos="left"
        />

<div className={styles.space} />
<h3>Results:</h3>
<p>As the result of our engineering design work, we designed and recommended a “flap lock” system for duffle bags to prevent the strap of the bag from slipping under heavy weights. We demonstrated how our system allows users to carry around 3.2 times the weight they would normally be able to carry in a duffle bag before the strap starts slipping, and poses significant discomfort for the user. 
</p>
<h3>Acknowladgemnts:</h3>
<p>Team members</p>
<p>Kishan Vethanayagam, Oliver Petrovic, Derrick Xu
</p>
      </div>
    );
  }
  