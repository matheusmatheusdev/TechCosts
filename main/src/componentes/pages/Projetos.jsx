import { useLocation } from 'react-router-dom'; //usamos esse hook para pegar o valor de NewProject/EnviarMensagem://
import { useState, useEffect } from 'react';

import styles from "./Projetos.module.css";
import EnviarMensagem from "../layout/EnviarMensagem";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from '../projects/ProjectCard';

function Projetos(){

    const [projetoMensagem, setProjetoMensagem] = useState('')

    const [projetos, setProjetos] = useState([]) //começamos com array vazio//

    const location = useLocation()
    let Mensagem = ''
    if(location.state){ //se tiver algo no location.state//
        Mensagem = location.state.Mensagem
    }

    useEffect(() => {
        fetch('https://json-teste-eta.vercel.app/projetos',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
            setProjetos(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function removeProjeto(id){
        fetch(`https://json-teste-eta.vercel.app/projetos/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProjetos(projetos.filter((projeto) => projeto.id !== id)) //filtro para retornar tudo que não for igual,se for igual deleta//
            setProjetoMensagem("Projeto removido!")
        })
        .catch(err => console.log(err))
        
    }

    return(
        <div className={styles.projetoContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            <>{Mensagem &&<EnviarMensagem type="sucesso" msg={Mensagem}/>}</>
            <>{projetoMensagem && <EnviarMensagem type="sucesso" msg={projetoMensagem}/>}</>
            <Container customClass="start">
                {projetos.length > 0 &&
                projetos.map((projeto) =>
                    <ProjectCard
                    key={projeto.id}
                    categoria={projeto.thecategoria}
                    orcamento={projeto.orcamento}
                    numerodacategoria={projeto.numerocategoria}
                    id={projeto.id}
                    handleRemove={removeProjeto}
                    name={projeto.name}/>)}
            </Container>
        </div>
    )
}

export default Projetos;