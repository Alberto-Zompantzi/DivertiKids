import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header></Header>

      <main>
        <Hero></Hero>
        <Activities></Activities>
        <Packages></Packages>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </>
  );
}
