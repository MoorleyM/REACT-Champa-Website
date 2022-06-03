import React from "react";

import Facebook from '../../assets/social-pictures/Facebook.png'
import Instagram from '../../assets/social-pictures/instagram.png'

import './footer.styles.scss'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-left-top">
                    <a href='https://www.facebook.com/champakitchen.info' className="social-image">
                        <img src={Facebook} alt='Facebook' />        
                    </a>
                    <a href='https://www.instagram.com/champakitchen.info/' className="social-image">
                        <img src={Instagram} alt='Instagram' />        
                    </a>
                </div>
                <div className="footer-left-bottom">
                    <p>&#169; {currentYear} Champa Kitchen</p>
                    <p>Created By TMG</p>
                </div>
            </div>
            <div className="footer-right">
                <p>Monday: CLOSED</p>
                <p>Tuesday – Friday: LUNCH: 11:30AM - 2:30PM</p>
                <p>(CLOSED 3:00PM – 4:00PM)</p>
                <p>Tuesday – Friday: DINNER : 4:00PM – 9:00PM</p>
                <p>Saturday: 11:30AM – 9:30PM</p>
                <p>Sunday: 3:30PM – 8:00PM</p>
            </div>
        </div>
    )
}

export default Footer;