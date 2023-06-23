import styles from "./Projeto.module.css";
import Container from "../layout/Container";
import ProjectForm from "../projects/ProjectForm";
import EnviarMensagem from "../layout/EnviarMensagem";
import ServicoForm from "../serviços/ServicoForm";
import ServicoCard from "../serviços/ServicoCard";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


function Projeto(){

    const { id } = useParams()
    console.log(id)

    const [servicos, setServicos] = useState([])
    const [projeto, setProjeto] = useState([]) //iniciam vazios//
    const [mostraProjectForm, setMostraProjectForm] = useState(false)
    const [mensagem, setMensagem] = useState()
    const [tipo, setTipo] = useState()
    const [mostraServicoForm, setMostraServicoForm] = useState(false)

    useEffect(() => {
        fetch(`https://json-teste-eta.vercel.app/projetos/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjeto(data)
            setServicos(data.servicos)
        })
        .catch((err) => console.log)
    }, [id])

    function editaPost(projeto){
        setMensagem('')
        //validação do orçamento//
        if(projeto.orcamento < projeto.costs){
            setMensagem("O orçamento não pode ser menor que o custo do projeto!")
            setTipo('error')
            return false
        }

        fetch(`https://json-teste-eta.vercel.app/projetos/${projeto.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projeto),
        })
        .then(resp => resp.json())
        .then((data) => {
            setProjeto(data)
            setMostraProjectForm(false)
            //mensagem//
            setMensagem("Projeto atualizado!")
            setTipo('sucesso')
        })
        .catch((err) => console.log(err))
    }

    function criaServico(projeto){
        setMensagem('') //mensagem de erro aparecendo apenas uma unica vez arrumar//
        //ultimo serviço (serviço atual)//
        const ultimoServico = projeto.servicos[projeto.servicos.length - 1]

        ultimoServico.id = uuidv4() //gerando um id unico//

        const ultimoServicoCusto = ultimoServico.costs

        const novoCusto = parseFloat(projeto.costs) + parseFloat(ultimoServicoCusto)

        //validação//
        if(novoCusto > parseFloat(projeto.orcamento)){
            setMensagem("Orçamento ultrapassado,verifique o valor do serviço")
            setTipo("error")
            projeto.servicos.pop()
            return false
        }

        //adiciona um custo ao servico para o total do orcamento//
        projeto.costs = novoCusto
    
        //atualiza o projeto//
        fetch(`http://localhost:5000/projetos/${projeto.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projeto) //enviar em string//
        })
        .then((resp) => resp.json())
        .then((data) => {
        setMostraServicoForm(false)
        
        })
        .catch((err) => console.log(err))
    }

    function removeServico(id, costs){
        
        const servicosUpdated = projeto.servicos.filter(
            (servico) => servico.id !== id //apenas ficara os id do serviço que não são iguais ao que estamos manipulando//
        )

        const projetoUpdated = projeto

        projetoUpdated.servicos = servicosUpdated
        projetoUpdated.costs = parseFloat(projetoUpdated.costs) - parseFloat(costs)

        fetch(`https://json-teste-eta.vercel.app/projetos/${projetoUpdated.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projetoUpdated)
        }).then((resp) => resp.json())
        .then((data) => {
            setProjeto(projetoUpdated)
            setServicos(servicosUpdated)
            setMensagem("Serviço removido!")
        })
        .catch((err) => console.log(err))
    }

    function alternarProjectForm(){
        setMostraProjectForm(!mostraProjectForm) //troca o estado////se esta true vira false && se esta false vira true//
    }

    function alterarServicoForm(){
        setMostraServicoForm(!mostraServicoForm)
    }

    return(
        <div className={styles.projetoContainer}>
           <Container customClass="column">
            {EnviarMensagem && <EnviarMensagem type={tipo} msg={mensagem}/>}
            <div className={styles.projetoDetalhes}>

            <h1>Projeto : {projeto.name}</h1>

            <button className={styles.btn} onClick={alternarProjectForm}>{!mostraProjectForm ? "Editar Projeto" : "Fechar"}</button>

            <div>
                {!mostraProjectForm ? (
                    <div className={styles.projetoInfo}>
                        <p>
                            <span>Categoria : </span>{projeto.thecategoria}
                        </p>

                        <p>
                            <span>Total de Orçamento : </span>R$ {projeto.orcamento}
                        </p>

                        <p>
                            <span>Total Utilizado : </span>R$ {projeto.costs}
                        </p>
                    </div>
                ) : (
                    <div className={styles.projetoInfo}>
                        <ProjectForm btnTexto="Concluir Edição" handleSubmit={editaPost} projetoData={projeto}/>
                    </div>
                )}
            </div>
            </div>

            <div className={styles.containerServicoForm}>
                <h2>Adicione um serviço:</h2>
                <button className={styles.btn} onClick={alterarServicoForm}>
                    {!mostraServicoForm ? "Adicionar serviço" : "Fechar"}
                </button>
                <div className={styles.projetoInfo}>
                    {mostraServicoForm && (
                        <ServicoForm manipulaEnviar={criaServico} text="Adicionar Serviço" projectData={projeto}/>
                    )}
                </div>
            </div>
            <h2>Serviços</h2>
                <Container customClass="start">
                    {servicos.length > 0 && //se os serviços for maior que zero faça algo//
                    servicos.map((servico) => (
                        <ServicoCard 
                        id={servico.id}
                        key={servico.id}
                        name={servico.name} 
                        costs={servico.costs} 
                        removeCard={removeServico}
                        description={servico.description}
                        />
                    ))
                    }
                    {servicos.length === 0 && <p>Você não adicionou nenhum serviço</p>}
                </Container>
           </Container>
        </div>
    )
}

export default Projeto;