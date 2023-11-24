const Experience: () => JSX.Element = () => (
  <section
    id="experience"
    className="flex justify-center items-center py-40 bg-violet-950"
  >
    <div className="text-center">
      <h2 className="text-4xl text-violet-100 font-bold mb-8">Experience</h2>
      <div className="text-violet-950 bg-white p-6 rounded-lg">
        <p className="text-3xl mb-2 font-bold">Software Developer</p>
        <p className="text-2xl mb-2 font-bold">ScaleMote</p>
        <p className="font-bold mb-2">June 2023 - Present</p>
        <ul className="text-base ml-4 list-none">
          <li>Front-End Development</li>
          <li>Web Development</li>
          <li>Low-Code Platforms (QWirl, LeadPages)</li>
          <li>Graphic and UX Design with Figma, Canva and Adobe Photoshop CC</li>
          <li>Email Marketing Campaigns with Vero</li>
          <li>Marketing Tech</li>
          <li>Testing with Cypress</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
