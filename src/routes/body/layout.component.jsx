import { Outlet } from 'react-router-dom'

import './layout.styles.scss'

import Footer from '../footer/footer.component';
import Navbar from '../navigation/navbar.component';

const Layout = () => {
    return (
        <div>
            <nav className='navbar-container'>
                <Navbar />
            </nav>
            <div className='body-container'>
                <Outlet />
            </div>
            <footer className='footer-container'>
                <Footer />
            </footer>
        </div>
    );
};
export default Layout;