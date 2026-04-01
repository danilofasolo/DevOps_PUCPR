import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-white-border" style={{ padding: "20px" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/produtos" style={{ color: "white" }}>
        Produtos
      </Link>
    </nav>
  );
}

export default Navbar;