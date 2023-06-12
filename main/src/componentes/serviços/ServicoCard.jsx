import styles from "../projects/ProjectCard.module.css";

import {BsFillTrashFill} from "react-icons/bs";

function ServicoCard({ id, name, costs, description, removeCard }){

    const remove = (evento) =>{
        evento.preventDefault()
        removeCard(id, costs)

    }
return(
    <div className={styles.projetoCard}>
        <h4>{name}</h4>
        <p>
            <span>Custo total:</span> R${costs}
        </p>
        <p>{description}</p>
        <div className={styles.projetoCardActions}>
            <button onClick={remove}>
                <BsFillTrashFill/>
                Excluir
            </button>
        </div>
    </div>
    )
}

export default ServicoCard;