import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

import styles from "./Footer.module.css";

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook/>
                </li>

                <li>
                    <FaInstagram/>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/matheus-fernandes-9b6382259/"><FaLinkedin/></a>
                </li>
            </ul>
            <p className={styles.copyRight}>
                <span>TechCosts</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;