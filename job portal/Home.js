import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Job Portal</h1>
      <p>Find your dream job easily</p>
      <Link to="/jobs" className="btn">Browse Jobs</Link>
    </div>
  );
}

export default Home;