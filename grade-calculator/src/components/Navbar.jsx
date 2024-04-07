import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  // toggle between clicks
  const [click, setClick] = useState(false);
  // toggles if buttons are shown
  const [button, setButton] = useState(true);

  // function that toggles clicks
  const handleClick = () => setClick(!click);
  // toggles the mobile menu
  const closeMobileMenu = () => setClick(false);

  // checks size of screen and determines if buttons shoould be shown
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };

  // only renders showButton function once (prevents signup button from reappeearing after refresh)
  useEffect(() => {
    showButton();
  }, []);

  // runs showButton to check window size for change
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            ShowMyGrades.com  <i class="fa-solid fa-check"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'} /> 
          </div>

          <ul className={click? 'nav-menu active' : 'nav-menu'}>


          <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign-up
              </Link>
            </li>


          </ul>

          {button && <Button buttonStyle='btn--outline'>Sign-Up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
