import './Nav.css'; // CSS

// Company LOGO
import logo from './../../assets/stackline_logo.svg';

export default function Nav() {
  // Navbar which is not being used as a navbar, but for later scaling it could be added here.
  return (
    <nav id='nav'>
      <img id='stackLine-logo' src={logo} className="logo react" alt="React logo" />
    </nav>
  )
}