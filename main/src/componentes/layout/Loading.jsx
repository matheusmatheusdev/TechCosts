//Loading de quando tiver carregando algo (não estou usando porque estou executando na minha propria maquina)//
//utilizar o useState para executar//
import styles from "./Loading.module.css";
import loading from "../img/loading.png";

function Loading(){
    return(
        <div className={styles.loadingDiv}>
            <img src={loading} alt="loading" />
        </div>
    )

}

export default Loading;