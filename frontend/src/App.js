import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './screen_pages/LandingPage/LandingPage';
import MyNotes from './screen_pages/MyNotes/MyNotes';

import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <main style={{ minHeight: "93vh" }}> */}
      <main >
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
        {/* <LandingPage /> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
