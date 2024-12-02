import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="container">
      <section className="h-screen max-h-screen snap-center ">
        <Hero />
      </section>

      <section className="h-screen max-h-screen snap-center">
        <Services />
      </section>

      {/* <section className="h-screen max-h-screen snap-center"> */}
      <Projects />
      {/* </section> */}

      <section className="h-screen max-h-screen bg-red-400 snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default App;
