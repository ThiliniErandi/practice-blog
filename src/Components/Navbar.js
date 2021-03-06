import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
    <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#006064',
            borderRadius: '8px' ,
            padding:'10px',
            textDecoration: 'none'
          }}>New blog</Link>
  </nav>
  );
}
 
export default Navbar;
