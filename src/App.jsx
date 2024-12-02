import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import Loader from "./components/Loader";
// import Contact from "./components/contact/Contact";
// import Hero from "./components/hero/Hero";
// import Projects from "./components/projects/Projects";
// import Services from "./components/services/Services";

// to make our app fast inspite of the animations, we have to use dynamic imports and lazy loading
const Hero = lazy(() => import("./components/hero/Hero"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Services = lazy(() => import("./components/services/Services"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section className="h-screen max-h-screen snap-center">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section className="h-screen max-h-screen snap-center ">
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section className="h-screen max-h-screen snap-center "> */}
          <Projects id="projects" />
          {/* </section> */}
        </LazyLoad>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section className="h-screen max-h-screen snap-center ">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
