
import React, { useState } from "react";
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
      <div style={{ marginTop: 24 }}>
        <ProductImage id={produto.id} />
      </div>
    </div>
  );

function ProductImage({ id }) {
  const [imgError, setImgError] = useState(false);
  const src = `/images/${id}.png`;
  console.log(`Tentando carregar imagem: ${src}`);
  if (imgError) {
    return (
      <div style={{ width: 200, height: 200, background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, border: '1px solid #ccc', fontWeight: 'bold', fontSize: 16 }}>
        imagem não encontrada
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`Produto ${id}`}
      width={200}
      height={200}
      style={{ objectFit: 'cover', borderRadius: 8, background: '#fff', border: '1px solid #ccc' }}
      onError={() => setImgError(true)}
    />
  );
}
}

export default Detalhe;