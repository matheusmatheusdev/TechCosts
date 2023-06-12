import {useState} from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "../projects/ProjectForm.module.css";

function ServicoForm({ manipulaEnviar, text, projectData }){

    const [servico, setServico] = useState({})

    function enviar(evento){
        evento.preventDefault() //prevenir o comportamento padrao do evento formulario de enviar e recarregar//
        projectData.servicos.push(servico) //enviar os serviços dentro do servico,alterando o projeto original//
        manipulaEnviar(projectData) //envio os dados pro componenete pai//
    }

    function manipula(evento){
        setServico({ ...servico, [evento.target.name]: evento.target.value}) //pegar o valor que o usuario passar no name//


    }
    return(
        <form onSubmit={enviar} className={styles.form}>
            <Input type="text" text="Nome do serviço" name="name" placeholder="Insira o nome do serviço" handleOnChange={manipula}/>

            <Input type="number" text="Custo do serviço" name="costs" placeholder="Insira o valor total do projeto" handleOnChange={manipula}/>

            <Input type="text" text="Descrição do serviço" name="description" placeholder="Descreva o serviço" handleOnChange={manipula}/>

            <SubmitButton text={text}/>
        </form>
        )

}

export default ServicoForm;