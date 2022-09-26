import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section>
      <h2>Welcome to Dangalfs Library of Computer Science!</h2>
      <h3 className="home">
        Check out the amazing selection of books in our{ ' ' }
        <Link to="/books" aria-label="link to book list">
          catalog
        </Link>
        .
      </h3>
    </section>
  );
}

export default Home;