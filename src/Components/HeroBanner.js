import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function HeroBanner () {
  return (
    <div className="hero-banner">
      <Navbar />
      <div className="hero-text">
          <h1>Food Blog</h1>
          <p>FOOD IS MUSIC TO THE BODY</p>
          <Link style={{ 
            color: 'white', 
            backgroundColor: '#006064',
            borderRadius: '8px' ,
            padding:'10px',
            textDecoration: 'none',
            paddingInline: '20px'
          }}>Join</Link>
      </div>
    </div> 
  );
}
 
export default HeroBanner;
