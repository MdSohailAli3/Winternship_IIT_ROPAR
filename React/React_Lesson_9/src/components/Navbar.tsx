import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/lecture/1">Lecture</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
