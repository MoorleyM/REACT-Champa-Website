import React from "react"; 

import './footer.styles.scss'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return (
        <footer>
            <div className="footer-left">
                <p>&#169; {currentYear} Champa Kitchen</p>
                <p>Created by TMG 2022</p>
            </div>
            <div className="footer-right">
                <p>Monday: CLOSED</p>
                <p>Tuesday – Friday: LUNCH: 11:30AM - 2:30PM</p>
                <p>(CLOSED 3:00PM – 4:00PM)</p>
                <p>Tuesday – Friday: DINNER : 4:00PM – 9:00PM</p>
                <p>Saturday: 11:30AM – 9:30PM</p>
                <p>Sunday: 3:30PM – 8:00PM</p>
            </div>
        </footer>
    )
}

export default Footer;