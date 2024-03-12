import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 cursor-pointer hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative"
    >
      <a
        href={`https://px-${projectTitle}.netlify.app`}
        className={overlayStyles}
      >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{desc}</p>
      </a>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-48 pb-48"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Welcome to my Projects Showcase! Here, you'll find a curated
          collection of my passion-driven work, showcasing my skills and
          creativity in the world of web development. Each project is a unique
          journey, a testament to my commitment to excellence, and a reflection
          of my dedication to solving real-world problems with elegant and
          innovative solutions.
        </p>
      </motion.div>

      {/* SECTIONS */}
      <div className="flex justify-center">
        <motion.div
          className="flex flex-col gap-4 sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            desc="Same oul' rock paper scissors, but on the web, and with
            a bit more color and style.."
          />
          <Project
            title="Project 2"
            desc="A wise man once said...."
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            desc="An experimental project building what could become and integral component of a larger site."
          />
          <Project
            title="Project 4"
            desc="A fully responsive website showcasing the possibilities
            of Artificial Intelligence."
          />
          <Project
            title="Project 5"
            desc="A website built for a gymnasium service."
          />

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
