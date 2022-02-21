import './style.js'
import { CardWorker } from './style'
import { CardWorkerImg } from './style'
import { Container } from './style.js';
import {CardSalario} from './style' 

export default function Card(props) {
    const salario = props.pessoa.salario
    return (
        <CardWorker className="card">
            <CardWorkerImg src={props.pessoa.imagem} alt="Avatar" width={100} />
            <Container className="container">
                <h1><b>{props.pessoa.nome}</b></h1>
                <p>{props.pessoa.cargo}</p>
                <CardSalario salario={props.pessoa.salario}>{props.pessoa.salario}</CardSalario>
            </Container>
        </CardWorker>
    );
}