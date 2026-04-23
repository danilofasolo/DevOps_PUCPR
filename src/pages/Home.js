
function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '60vh' }}>
      <aside className="sidebar-white-border sidebar-area">
        {/* Menu lateral vazio */}
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <h1>Gerenciador de Cadastro de Produtos</h1>
        <p>Projeto piloto simples usando React, para a disciplina de DevOps</p>
      </main>
    </div>
  );
}

export default Home;