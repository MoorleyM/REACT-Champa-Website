import { Outlet } from 'react-router-dom'

import Footer from '../footer/footer.component';
import Navbar from '../navigation/navbar.component';

import './body.styles.scss'

const Body = () => {
    return (
        <div className='body-container'>
            <nav className='navbar'>
                <Navbar />
            </nav>
            <div className='body'>
                <Outlet />
            </div>
            <footer className='footer-container'>
                <Footer />
            </footer>
        </div>
    );
};
export default Body;