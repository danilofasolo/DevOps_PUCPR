import { useParams } from "react-router-dom";
import produtos from "../data/produtos";

function Detalhe() {
  const { id } = useParams();

  const produto = produtos.find(
    (p) => p.id === parseInt(id)
  );

  if (!produto) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.preco}</p>
      <p>{produto.descricao}</p>
    </div>
  );
}

export default Detalhe;