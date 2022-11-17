import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Project />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
