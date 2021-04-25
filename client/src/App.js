import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './components/Data/DataProvider';

import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from './pages/aboutpage/about.comp';
import Header from './components/header/header.comp';
import BookPage from './pages/bookspage/bookspage.comp';
import Footer from "./components/footer/footer.comp";
import ProductPage from "./pages/productpage/productpage.comp";
import PopUp from './components/pop-up/pop-up.comp';
import ScrollToTop from './components/ScrollToTop.comp';

const App = () => {



  useEffect(() => {
    setTimeout(() => {
      setTimedPup(true)
    }, 2000);
  }, []);

  const [timedPup, setTimedPup] = useState(false);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <DataProvider >
      <div>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/lee-author" element={<HomePage />} preload={scrollTop} />
            <Route path="/about" element={<AboutPage />} preload={scrollTop} />
            <Route path="/books" element={<BookPage />} preload={scrollTop} />
            <Route path="/books/:title" element={<ProductPage />} preload={scrollTop} />
          </Routes>
          <PopUp trigger={timedPup} closePup={setTimedPup} />
          <div className="footer-section">
            <Footer />
          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
