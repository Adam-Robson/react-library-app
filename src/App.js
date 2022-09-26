import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import Home from './components/Home/Home';

import './App.css';

function App() {

  return (
    <main className="App">
      <h1>Library Catalog</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }>
            <Home />
          </Route>
          <Route path="/books" component={ BookList }>
            <BookList />
          </Route>
          <Route path="/books/:id" component={ BookDetail }>
            <BookDetail />
          </Route>
        </Switch>
      </Router>
      <h2>Check out the amazing selection of books in our <link>catalog</link>.</h2>
    </main>
  );
}

export default App;
