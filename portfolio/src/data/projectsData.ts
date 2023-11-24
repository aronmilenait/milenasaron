import portfolioImg from '../assets/portfolio.png';
import astronomyImg from '../assets/astronomy101.png';
import currencyImg from '../assets/currency.png';
import memotestImg from '../assets/memotest.png';

export const projectsData = [
  {
    title: "Portfolio",
    description: "My portfolio as a software developer.",
    src: portfolioImg,
    link: "https://aronmilenait.github.io/milenasaron/",
    technologies: ["TypeScript", "ReactJS", "Vite", "Tailwind CSS"],
  },
  {
    title: "Astronomy 101",
    description: "Landing page for an astronomy course.",
    src: astronomyImg,
    link: "https://aronmilenait.github.io/astronomy-web-app/",
    technologies: ["ReactJS", "Bootstrap"],
  },
  {
    title: "Currency Converter",
    description: "Convert between currencies from all over the world.",
    src: currencyImg,
    link: "https://aronmilenait.github.io/currency_converter/",
    technologies: ["Vanilla JS", "RESTFul API"],
  },
  {
    title: "Ocean Memotest",
    description: "A game in spanish, my native language.",
    src: memotestImg,
    link: "https://aronmilenait.github.io/memotest/",
    technologies: ["Vanilla JS", "Bootstrap"],
  },
];