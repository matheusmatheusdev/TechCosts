import styles from "./Contato.module.css";

import {AiOutlineMail} from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"
import {FaWhatsapp} from "react-icons/fa"

function Contato(){
    return(
        <div className={styles.contatoContainer}>
            <div className={styles.divTitulo}><h1>Como você prefere falar com a gente?</h1></div>

            <div className={styles.opcoes}>
                <div className={styles.divEmail}>
                    <a href="https://www.linkedin.com/in/matheus-fernandes-9b6382259/"><AiOutlineMail/></a>
                    <h1>E-mail</h1>
                    <p>Tem alguma dúvida?</p>
                    <h2>contatomatheus2004dev@gmail.com</h2>
                </div>

                <div className={styles.divTelefone}>
                    <a href="https://www.linkedin.com/in/matheus-fernandes-9b6382259/"><FiPhoneCall/></a>
                    <h1>Telefone</h1>
                    <p>Você pode ligar!</p>
                    <h2>51 985907830</h2>
                </div>

                <div className={styles.divZap}>
                    <a href="https://www.linkedin.com/in/matheus-fernandes-9b6382259/"><FaWhatsapp/></a>
                    <h1>WhatsApp</h1>
                    <p>Mande uma mensagem!</p>
                    <h2>51 983086190</h2>
                </div>
            </div>
        </div>

    )
}

export default Contato;