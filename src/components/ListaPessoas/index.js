import Card from "../Card";
import "./style.css";

export default function ListaPessoas(props) {
  const pessoas = props.pessoas;
  console.log(pessoas)
  return (
    <div>
        {pessoas.map((element) => (
            <Card pessoa = {element}/>
        ))}
    </div>

  );
}
