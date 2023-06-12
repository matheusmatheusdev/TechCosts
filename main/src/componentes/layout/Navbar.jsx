import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "./Navbar.module.css";

import coin from "../img/1677875966232.png";

function Navbar(){
return(
<nav className={styles.navbar}>
    <Container>
        <Link to="/"><img className={styles.coin} src={coin} alt="Costs"/></Link>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>

            <li className={styles.item}>
                <Link to="/projetos">Projetos</Link>
            </li>

            <li className={styles.item}>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    </Container>
</nav>
)

}

export default Navbar;