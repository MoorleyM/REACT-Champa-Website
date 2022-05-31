import { Link } from 'react-router-dom'

import './navbar.styles.scss'
import Logo from '../../assets/pictures/ChampaKitchenLogo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' >
                <img 
                    src={Logo} 
                    alt='company-log'
                    className='logo-image'
                />
            </Link>
            <div className='nav-menu-container'>
                <Link className='nav-link' to='/'>
                    Index
                </Link>
                <Link className='nav-link' to='/menu'>
                    Menu
                </Link>
                <Link className='nav-link' to='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;