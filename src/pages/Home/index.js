import { Link } from "react-router-dom";
import Titulo from "../../components/Titulo";

import ListaPessoas from '../../components/ListaPessoas';
import lista from '../../data/people';

export default function Home() {
    document.title = "Página inicial";
    return (
        <div>
            <Titulo titulo="Página Home" />

            <Link to="/about">Sobre</Link>

            <br /><br />

            <div>
                <ListaPessoas pessoas={lista}></ListaPessoas>
            </div>
        </div>
    );
}