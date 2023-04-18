import styles from './page.module.css'
import MyImage from '../../../components/image/MyImage'
import Back from '../../../components/Back/Back'
import Header from '../../../components/header/Header'

import main from "./main.jpg"
import nurdles from "./nurdles.jpeg"
import beach from "./beach.jpg"
import bot from "./bot.jpg"
import comp from "./comp.jpg"
import table from "./table.jpg"
import forces from "./force.jpg"
import test from "./test.jpg"
import poster from "./poster.jpg"

export default function Who() {
    return (
      <div className={styles.container}>
        <Back text="Back to experiences" to="/experience" />
        <Header image={main} title="Praxis II desing project:" />
        <h2>Background:</h2>
     <p>While the Praxis I design project consisted in developing a concept to solve a “splartz”, or minor inconvenience in people's daily life, the design project in Praxis II consisted in improving the lived experience of a community in the GTA (Greater Toronto Area). 
</p>
<MyImage
          image={nurdles}
          size={300}
          caption="Nurdles collected on beach."
          pos="right"
        />
<p>Our team decided to engage in an engineering challenge that focused on helping volunteers at the Non Profit organization “A greener future” collect Nurdles (small plastic pieces) from beaches more efficiently.
</p>
<p>Current methods of nurdle collection are hand-picking nurdles and sifting nurdles with a  conventional sieve (with collection rates of 1 nurdle/min and 4 nurdle/min respectively). Furthermore, back pains and muscle fatigue are common complaints due to the need to squat for extended periods of time. Our solution attempts to facilitate the collection process while reducing the physical strain on volunteers.
</p>
<p>These Nurdles pose a threat to the environment, as toxic microbes grow on its surface. Many animals also starve upon confusing these small pellets with food and ingesting them. 
</p>
<p>The project was especially relevant to me given my position. Being able to contribute even a little in solving a global problem that negatively affects the environment and wildlife was a crucial motivation to me during the Praxis II project.
</p>
<h3>Design Process</h3>
<MyImage
          image={beach}
          size={300}
          caption="Me together with one of my teammates testing one of the initial prototypes on th beach."
          pos="right"
        />
<p>In the first stage of the design we came up with as many prototypes as possible. We wanted to experiment with any possible way we could think of solving the problem, to measure how effective each one of them is.
</p>
<p>This process involved a great deal of research. We had to explore how different mechanisms were used in order to solve similar problems. I believe that during this project I developed valuable engineering research skills. This kind of experience is very useful in any engineering endeavor. Engineers must be able to conduct research about standards and regulations in order for their products to be complacent. Additionally, being able to effectively research previous designs is a crucial skill for any engineering project. I believe this skill will serve me well in any future job. 
</p>
<MyImage
          image={bot}
          size={300}
          caption="The 'Nurdle bot' prototype."
          pos="left"
        />
<p>One of the most interesting prototypes we came up with was the “Nurdle-bot”, this was an automated robot that would be able to navigate through the beach, collecting and sorting nurdles away from the sand. The prototype had caterpillar treats instead of wheels. This helped it navigate in the beach environment reducing the chance of the robot getting stuck. We printed most parts of the robot, and tested them separately. Several times during the testing process, we discovered major changes and small improvements that can be made to the robot. This was a valuable experience of iterative design. I know that in real world engineering projects it is impossible to find the perfect concept as the first idea to come to mind.Professional engineers must possess the ability to build and design their prototypes many times, learning something from each iteration and implementing it in the next one.
</p>
<p>The final “nurdle-bot” iteration incorporated a vibrating sifter which would sort away the sand in the most effective way based on our testing, and allow the volunteers to easily collect the nurdles from the sieve when it is full. 
</p>
<MyImage
          image={comp}
          size={150}
          caption="An exploded version of the sorting mechanism of one of the initial versions of 'nurdle bot'."
          pos="left"
        />
        <MyImage
          image={table}
          size={300}
          caption="A render of the 'Nurdle-no-more portotype'."
          pos="right"
        />
<p>Though designing this prototype was an ambitious endeavor, it matched well with my position as an engineer who is open to learn new skills fast, and not be afraid to make mistakes.
</p>

<p>At one point, it became clear that though this prototype had a lot of potential, it was over-complicated for first year engineering students, and it would not be possible to fully construct this prototype in the little time we had left during the course. 
</p>

<p>Accordingly, we decided to migrate some of the most important features of this design to a new prototype called “Nurdle-No-More”. This prototype was simpler, matched better with our requirements model, and most importantly, did the best job at improving the lived experience of the volunteers from the organization.
</p>
<MyImage
          image={test}
          size={300}
          caption="One of the prototypes during testing."
          pos="right"
        />
<p>Designing all of the prototypes involved in this project required us to use a wide variety of tools, and develop many new skills. One of the most valuable ones was creating photorealistic rendering of our design in order to help us to represent the final concept with more fidelity. Using force analysis on the CAD model ws also very helpful in order to determine the most optimal materials that should be used in the design. Another skill that this project helped me develop and I would like to highlight is prototyping higher fidelity prototypes with the aim of using them in testing. Most of the prototypes I had built before were scoped to serve as tools for representation. However, in this project it was clear that performing rigorous testing would be invaluable in order to provide rigorous justification for our designs. Building prototypes with this aim in mind required us to develop a new mindset towards how to design prototypes. Some of the features that could be described as “eye candy” had to be left out, while most of our attention was devoted to structural and functional components. This was a useful skill to develop, as in industry it is crucial to have the ability to plan and design different kinds of prototypes for a plethora of purposes. 
</p>
<MyImage
          image={forces}
          size={300}
          caption="Test analysis performed on one of our models."
          pos="left"
        />
        <p>The final step of the project involved the design of a poster, and a preparation of a presentation. These would serve as tools to represent our recommended solution and our design work in general to a wide range of audiences during a showcase. This was one of my first experiences doing this kind of work in an engineering context. It involved using python with matplotlib to design custom graphs, as well as using professional design software to help us convey the features of our recommended design in the most informative manner. Developing the skills needed to communicate effective pitches and presentations is invaluable in any engineering field. 
</p>
<div className={styles.space} />
<h3>Results:</h3>
<p>The extensive design work conducted on this project allowed us to develop the “Nurdle-no-more” concept, which allows volunteers to easily separate nurdles from sand at the beach.
</p>
<MyImage
          image={main}
          size={400}
          caption="Our team during the Praxis II showcase."
          pos="right"
        />
        
        <p>It consists of a round sieve suspended from a wooden frame. An electric motor creates the shaking motion which allows us to quickly sort away sand from the nurdles. We have also added the layer of density separation to our prototype: a bucket of saline water that sits at the bottom of the sieve collects nurdles and larger stones and separates them based on their density. This solution requires menial training to operate, it is lightweight, and cost effective.
</p>
<p>We have tested this solution to ensure it has enough structural strength present in our use case, as well that it is indeed efficient in separating nurdles from the sand.
</p>
<p>We also carried out the presentation of our product during the showcase. We prepared a comprehensive explanation of each of the components of our recommended design, as well as of the process we followed in order to arrive at the solution. 
</p>
<MyImage
          image={poster}
          size={550}
          caption="The poster developed for showcase."
          pos="left"
        />
<h3>Acknowladgemnts:</h3>
<p>Team members</p>
<p>Hamza Mahmood,
Jason You,
Tony Yuan
</p>
      </div>
    );
  }
  