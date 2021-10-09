import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './screen_pages/LandingPage/LandingPage';

function App() {
  return (
    <>
      <main style={{ minHeight: "93vh" }}>
        <Header />
        <LandingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
