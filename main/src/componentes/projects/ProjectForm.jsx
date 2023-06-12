import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, projetoData, btnTexto }){

    const [categorias, setCategorias] = useState([])
    const [projeto, setProjeto] = useState(projetoData || {}) //se mostra um exemplo ou escrever todo//

    useEffect(() => {
        fetch('http://localhost:5000/categorias',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch((err) => console.log(err))
    }, []) //valor inicial é as options vazias []//

    const enviar = (evento) => {
        evento.preventDefault() //para previnir o comportamento padrão de page reload//
        handleSubmit(projeto)
        //console.log(projeto)
    }

    function handleChange(evento){
        setProjeto({ ...projeto, [evento.target.name]: evento.target.value }) //todos input
        
    }

    function handleCategoria(evento){
        setProjeto({ ...projeto,
            numerocategoria: evento.target.value,
            thecategoria: evento.target.options[evento.target.selectedIndex].text, //para o nome escolhido ser a categoria selecionada//
        
        })  
    }

    return(
        <form onSubmit={enviar} className={styles.form}>
            <Input value={projeto.name ? projeto.name : ''} handleOnChange={handleChange} type="text" placeholder="Qual o nome do projeto?" text="Nome do projeto" name="name"/>

            <Input value={projeto.orcamento ? projeto.orcamento : ''} handleOnChange={handleChange} type="number" placeholder="Qual o seu orçamento?" text="Orçamento do projeto" name="orcamento"/>

            <Select value={projeto.numerocategoria ? projeto.numerocategoria : ''} handleOnChange={handleCategoria} name="categoriaId" text="Selecione a categoria" options={categorias}/>

            <SubmitButton text={btnTexto}/>
        </form>
    )
}

export default ProjectForm;