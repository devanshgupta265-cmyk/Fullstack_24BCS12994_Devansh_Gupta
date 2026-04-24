import jobs from "./jobs";
import { Link } from "react-router-dom";
import { useState } from "react";

function JobList() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Job Listings</h2>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredJobs.map(job => (
        <div key={job.id} className="card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <Link to={`/job/${job.id}`} className="btn">View</Link>
        </div>
      ))}
    </div>
  );
}

export default JobList;