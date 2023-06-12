import { useState, useEffect } from 'react'; //hooks//

import styles from "./EnviarMensagem.module.css"; //css//

function EnviarMensagem({type, msg}){ //função com dois parâmetros//

    const [visible, setVisible] = useState(false) //hooks// recebe fakse de inicio//

    useEffect(() => { //hooks//arrow function//

        if(!msg){ //se não tiver msg//
            setVisible(false)
            return
        }else{ //caso  ao contrario//
            setVisible(true)
            const timer = setTimeout(() =>{
                setVisible(false)
            },3000)
    
            return () => clearTimeout(timer)
        }

    }, [msg]) //useEffect sempre precisa estar ligado a alguem e esta ligado ao msg//



    return(
    <>
    {visible && ( //se visible//
        <div className={`${styles.EnviarMensagemcss} ${styles[type]}`}>{msg}</div>
    )}
    </>
    )
}

export default EnviarMensagem;