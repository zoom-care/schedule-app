import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Home</h1>
        <p><Link to="/clinics/">proof of concept - clinic by ID</Link></p>
        <p><Link to="/providers">Providers</Link></p>  
      </div>
      
    );
  }
  
export default Home;
