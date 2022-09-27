import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section>
      <h2>Welcome to Dangalfs Library of Computer Science!</h2>
      <p className="home">
        Check out the amazing selection of books in our { ' ' }
        <Link to={ '/books' }>catalog</Link>.</p>
    </section>
  );
}

export default Home;