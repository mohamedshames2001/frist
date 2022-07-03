import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import "./Navbar.css"
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 768) {
            setButton(false);
        }else{
            setButton(true);
        }
    } 

    useEffect(() => {
        showButton();
    })
    window.addEventListener('resize' , showButton);

  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMoblieMenu}>
                React {" "} <i className="fab fa-react"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMoblieMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMoblieMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMoblieMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMoblieMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </div>
  )
}

export default Navbar