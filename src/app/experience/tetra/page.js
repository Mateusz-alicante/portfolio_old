import styles from './page.module.css'
import MyImage from '../../../components/image/MyImage'
import Back from '../../../components/Back/Back'
import Header from '../../../components/header/Header'
import unity from './unity.jpeg'
import tetra from './tetra.jpg'

import main from "./main.jpg"

export default function Who() {
    return (
      <div className={styles.container}>
        <Back text="Back to experiences" to="/experience" />
        <Header image={main} title="Tetrahedron reflection visualization tool:" />
        <h2>Background:</h2>
        <p>One of my friends is attending a mathematics club. Right now, they are working on knot theory with Goursat tetrahedrons <a href='https://en.wikipedia.org/wiki/Goursat_tetrahedron'>(Read more about it here)</a>. This consists of reflecting tetrahedrons on one of its edges in 3D space, and completing a closed path with all of the reflected tetrahedrons (this is called a knot). It is not hard to imagine that students in the club often had problems visualizing what is going on, and how a specific sequence of tetrahedron reflections would look like. 
I offered to work on a visualization tool for this niche aspect of mathematics. I considered this would be great practice to learn a new programming language, while helping people to better understand concepts and improve their learning experience, which is consistent with my values.
</p>
<h2>Design Process and products:</h2>
 
<MyImage
          image={tetra}
          size={400}
          caption="The unity web application I worked on."
          pos="right"
        />
<p>The design process involved both theoretical understanding of the field, as well as the use of practical skills to program the behavior. I had many meetings with my friend who explained what specifically his team needed, and taught me the basics of Goursat tetrahedra. This was a great experience of working with stakeholders. I had to develop the application according to their needs, as well as understand their problem in depth. This gave me my first ever experience of participatory design with a real stakeholder, which is a crucial skill for any engineer.
</p>
<p>I was set to develop this tool using the Unity game engine, as I knew it was a very powerful solution and it allows to make the design products easily accessible on the web. This aligns with my values, as it makes educational material easily accessible to anyone.
</p>
<p>As part of the participatory design as the project progressed, me and my friend often came together to discuss what features the tool should have, and make minor aesthetic changes to how the app looks.
</p>
<MyImage
          image={unity}
          size={400}
          caption="The interface of the Unity game engine."
          pos="left"
        />
<p>This project required me to learn about 3D graphics, game design with Unity and the C# language. All of these are very valuable skills which will allow me to work on other hobby projects in the future.
</p>
<p>Ultimately We were able to develop a comprehensive online tool that allows users to build knots with Goursat tetrahedrons. This has eased the burden of visualizing complex tetrahedron sequences for students.
</p>
<p>Click <a href='https://mateusz-alicante.github.io/Geo-Web/'>here</a> to try out the visualization tool!</p>

<h3>Acknowladgemnts:</h3>
<p>Amin Mobedi - contact in a project involving tetrahedrons.
</p>
      </div>
    );
  }
  