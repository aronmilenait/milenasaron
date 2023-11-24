import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

const Skills: () => JSX.Element = () => (
    <section id="skills" className="bg-white flex flex-col justify-center items-center py-40">
      <h3 className="text-4xl text-violet-950 text-center font-bold mb-8">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="bg-violet-900 p-6 rounded-lg shadow-lg text-center text-white">
          <FontAwesomeIcon icon={faCode} className="text-4xl mb-4" />
          <p className="text-xl font-bold mb-4">Front-End Developer</p>
          <p className="text-lg font-semibold mb-2">My skills are:</p>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>RESTful API</li>
            <li>ReactJS</li>
            <li>Vite</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Cypress</li>
            <li>Github</li>
          </ul>
        </div>
  
        <div className="bg-violet-900 p-6 rounded-lg shadow-lg text-center text-white">
          <FontAwesomeIcon icon={faSwatchbook} className="text-4xl mb-4" />
          <p className="text-xl font-bold mb-4">Designer</p>
          <p className="text-lg font-semibold mb-2">My skills are:</p>
          <ul>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>
  
        <div className="bg-violet-900 p-6 rounded-lg shadow-lg text-center text-white">
          <FontAwesomeIcon icon={faLaptopCode} className="text-4xl mb-4" />
          <p className="text-xl font-bold mb-4">Marketing Tech</p>
          <p className="text-lg font-semibold mb-2">My skills are:</p>
          <ul>
            <li>Low-Code Platforms</li>
            <li>LeadPages</li>
            <li>QWirl</li>
            <li>Email Marketing Campaigns</li>
            <li>Vero</li>
            <li>Liquid</li>
          </ul>
        </div>
      </div>
    </section>
  );
  
  export default Skills;
  