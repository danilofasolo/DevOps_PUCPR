import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-white-border" style={{ padding: "20px" }}>
      <Link className="navbar-link" to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>

      <Link className="navbar-link" to="/produtos" style={{ color: "white" }}>
        Produtos
      </Link>
    </nav>
  );
}

export default Navbar;