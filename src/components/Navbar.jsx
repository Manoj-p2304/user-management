import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">User Management</Link>
      <Link to="/add">
        <button>Add User</button>
      </Link>
    </nav>
  );
};

export default Navbar;