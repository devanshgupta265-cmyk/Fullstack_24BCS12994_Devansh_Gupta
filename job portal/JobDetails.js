import { useParams } from "react-router-dom";
import jobs from "./jobs";
import { useState } from "react";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let apps = JSON.parse(localStorage.getItem("applications")) || [];
    apps.push({ ...formData, jobTitle: job.title });
    localStorage.setItem("applications", JSON.stringify(apps));

    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>

      {!showForm && (
        <button className="btn" onClick={() => setShowForm(true)}>
          Apply Now
        </button>
      )}

      {showForm && !submitted && (
        <form className="form" onSubmit={handleSubmit}>
          <h3>Apply for this job</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="file"
            name="resume"
          />

          <button type="submit" className="btn">
            Submit Application
          </button>
        </form>
      )}

      {submitted && (
        <div className="success-box">
          <h3>🎉 Application Submitted!</h3>
          <p>Thank you <b>{formData.name}</b> for applying.</p>
        </div>
      )}
    </div>
  );
}

export default JobDetails;