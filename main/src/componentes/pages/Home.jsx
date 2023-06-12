import styles from "./Home.module.css";

import porco from "../img/1677876954926.png";
import LinkButton from "../layout/LinkButton";

function Home(){

return(
    <section className={styles.homeContainer}>
        <h1>Bem vindo ao <span>TechCosts</span></h1>
        <p>Gerencie os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        <img src={porco} alt="TechCosts"/>
    </section>   
)

}

export default Home;