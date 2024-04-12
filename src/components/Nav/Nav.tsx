import './Nav.css';

import logo from './../../assets/stackline_logo.svg';

export default function Nav() {
  return (
    <nav id='nav'>
      <img id='stackLine-logo' src={logo} className="logo react" alt="React logo" />
    </nav>
  )
}