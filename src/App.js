import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
