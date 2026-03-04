import { Link } from "react-router-dom";
import produtos from "../data/produtos";

function Produtos() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.id}`}>
              {produto.nome} {produto.marca}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;