import styles from './Cabecalho.module.css'



export default function Cabecalho(){
    return(
        <header>
            <h1>Aula Intro React</h1>
            <p className={styles.paragr1}>Primeira aula sobre estilos no CSS</p>
        </header>
    )
}