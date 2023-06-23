import styles from "./NewProject.module.css";
import ProjectForm from "../projects/ProjectForm";
import { useNavigate } from "react-router-dom";

function NewProject(){

    const navigate = useNavigate()

    function criaPost(projetos){

        //iniciar TechCosts e serviços//
        projetos.costs = 0
        projetos.servicos = []

        fetch("https://json-teste-eta.vercel.app/projetos", {
            method: 'POST', //para declarar que é um envio de formulario//
            headers: {
                'Content-Type': 'application/json', //para declarar que quer se comunicar com json//
            },
            body: JSON.stringify(projetos), //enviar no corpo os projetos que o cliente passar transformando em string//
        })
        .then((resp) => resp.json()) //então//
        .then((data) => {
            console.log(data)
            //redirecionando//
            navigate('/projetos',{state:{ Mensagem: 'Projeto criado com sucesso!'}})
        })
        .catch(err => console.log(err)) //capturar algo normalmente um possivel erro//
    }


    return(
        <div className={styles.newprojectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>formulário</p>
            <ProjectForm btnTexto="Criar Projeto" handleSubmit={criaPost}/>
        </div>
    )
}

export default NewProject;