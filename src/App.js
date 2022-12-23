import { BrowserRouter as Switch, Route } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import Home from './components/Home/Home';
import './App.css';

function App() {

  return (
    <main className="App">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={ Home }>
        </Route>
        <Route path="/books/:id" component={ BookDetail }>
        </Route>
        <Route path="/books/" component={ BookList }>
        </Route>
      </Switch>

    </main>
  );
}

export default App;
