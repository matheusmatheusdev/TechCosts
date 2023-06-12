import styles from "./ProjectCard.module.css";

import { Link } from "react-router-dom";
import {BsPencil, BsFillTrashFill} from "react-icons/bs";

function ProjectCard({id, name, orcamento, categoria, handleRemove, numerodacategoria}){

    const remove = (evento) =>{
        evento.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.projetoCard}>
            <h4>{name}</h4>
            
            <p>
                <span>Orçamento:</span> R${orcamento}
            </p>

            <p className={styles.categoriaTexto}>
                <span className={`${styles[categoria.toLowerCase()]}`}></span> {categoria}
            </p>
            <div className={styles.projetoCardActions}>
                <Link to={`/projeto/${id}`}>
                    <BsPencil/> Editar
                </Link>
                
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;