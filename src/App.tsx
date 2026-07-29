import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Modules />
      <Benefits />
      <Footer />
    </div>
  );
}