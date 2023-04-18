
import styles from './page.module.css'

import Link from 'next/link';
import Image from 'next/image'

import tetra from './tetra/main.jpg'
import civ from './civ/main.jpg'
import p1 from './p1/main.jpg'
import bio from './bio/main.jpg'
import utra from './utra/main.jpg'
import p2 from './p2/main.jpg'

const pages = {"Tetrahedron reflection visualization tool": [tetra, "/experience/tetra"], "CIV 102 brdige building project": [civ, "/experience/civ"],
"Praxis I desing project": [p1, "/experience/p1"], "U of T biomedical competition:": [bio, "/experience/bio"],
"UTRA hackathon": [utra, "/experience/utra"], "Praxis II design project": [p2, "/experience/p2"]}

export default function Home() {
  return (
    <div>
      <div>
        <h1>Design Experiences:</h1>
        <p>
          In this section I will write about the main engineering design
          experiences I had had in my first year in university. This will
          include both design done for courses, as well as extracurricular
          student competitions, or hobby projects. I will make an effort to
          frame these experiences from the perspective of my position, and
          reflect on the values, strengths and biases that had an impact in each
          one of these.
        </p>
        <p>
          I will start giving a quick summary of the main desing expereinces I
          have taken part in:
        </p>
        <table>
          <tr>
            <th>Activity</th>
            <th>Main skill used</th>
            <th>Design result</th>
          </tr>
          <tr>
            <td>Tetrahedron reflection visualization tool</td>
            <td>
              Unity game development, C# programming, participatory design.
            </td>
            <td>
              Web 3D applications to help students understand and play with math
              concepts.
            </td>
          </tr>
          <tr>
            <td>CIV 102 bridge</td>
            <td>
              Matlab programming, Prototyping, Resource management, engineering
              drawings and diagrams.
            </td>
            <td>
              One of the strongest cardboard bridges in my tutorial section.
            </td>
          </tr>
          <tr>
            <td>U of T biomedical competition</td>
            <td>
              Fusion 360 3D modeling, physical prototyping, Research.
              Engineering presentations
            </td>
            <td>
              Design of products to help users sleep better. Third place in
              competition.
            </td>
          </tr>
          <tr>
            <td>Praxis I design project</td>
            <td>
              3D design and printing. Engineering report writing. Creating tests
              for engineering concepts.
            </td>
            <td>
              A mechanism that allows gym users to carry more weight in their
              bags more comfortably.
            </td>
          </tr>
          <tr>
            <td>UTRA hacks competition</td>
            <td>Fusion 360 3D design. Arduino.</td>
            <td>Third place in the first challenge of the hackathon.</td>
          </tr>
          <tr>
            <td>Praxis II design project</td>
            <td>
              Engineering Research. Analysis of CAD models. Showcase
              presentation
            </td>
            <td>
              Concept to help volunteers efficiently remove nurdles from the
              beach. Presentation of our design at showcase.
            </td>
          </tr>
        </table>

        <h2>Read about each of my experiences:</h2>
        <div className={styles.expContainer}>
            {Object.entries(pages).map(([name, [image, url]]) => (
               <Link href={url} className={styles.link}>
                <div className={styles.indivContainer}>
                  <Image width={400} src={image} className={styles.image} />
                  <h3 className={styles.title}>{name}</h3>
                </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
