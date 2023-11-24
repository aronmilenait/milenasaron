import aboutMeImg from "../assets/aboutme.png";

const AboutMe: () => JSX.Element = () => (
  <section 
    id="about-me"
    className="flex justify-center items-center py-40 bg-white">
      
    <div className="container mx-auto flex items-center text-violet-950">
      <div className="w-1/2 pr-8 flex justify-center items-center">
        <img
          src={aboutMeImg}
          alt="Violet girl shape."
          className="w-auto h-26"
        />
      </div>

      <div className="w-1/2 pl-8">
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-xl">
        I'm Milena, a 22-year-old software developer from Argentina with experience in Front-End Development, Marketing Tech, and the design field. Beyond coding, I'm deeply passionate about Linux and have been using it as my operating system since 2015. Starting in January 2024, I'll be pursuing a Technicature in Programming at the University of Hurlingham to expand my knowledge.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;