import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>Job Portal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
      </div>
    </nav>
  );
}

export default Navbar;