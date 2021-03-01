import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from './pages/aboutpage/about.comp';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.comp';
import BookPage from './pages/bookspage/bookspage.comp';

const App = () => {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/books" component={BookPage} />
      </Switch>
    </div>
  );
}

export default App;
