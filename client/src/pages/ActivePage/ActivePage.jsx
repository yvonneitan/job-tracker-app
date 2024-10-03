import "./ActivePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jobsData from "../../data/jobs.json";

const baseUrl = "http://localhost:8080";
const dataUrl = "http://localhost:8080/data";

function ActivePage() {
  // const [jobStatus, setJobStatus] = useState("Active");
  const [jobs, setJobs] = useState([]);
  const [activeJobs, setActiveJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${baseUrl}/data`);
      //set videos data to response.data
      setJobs(response.data);
    }
    getData();
  }, []);
  useEffect(() => {
    //populate active jobs from JSON file
    const populateJobs = jobsData.map((job) => ({
      id: job.id,
      applicationDate: new Date().toLocaleDateString(),
      jobTitle: job.job_title,
      company: job.company,
      jobLink: job.job_link,
      deadline: job.deadline,
      status: "Active", //default status
    }));
    setActiveJobs(populateJobs);
  }, []);

  const handleStatusChange = (e, jobId) => {
    const newStatus = e.target.value;

    if (newStatus === "Rejected") {
      // Move job to inactive when rejected
      setActiveJobs((prev) => prev.filter((job) => job.id !== jobId));
      navigate("/inactive");
    } else {
      // Update status for other statuses
      setActiveJobs((prev) =>
        prev.map((job) =>
          job.id === jobId ? { ...job, status: newStatus } : job
        )
      );
    }
  };

  return (
    <div className="active">
      <h2 className="active__header">👩‍💻Hustlin' & Thrivin'🧚</h2>

      <table className="active__table">
        <thead>
          <tr className="active__header-row">
            <th className="active__date">Application Date</th>
            <th className="active__title">Job Title</th>
            <th className="active__company">Company</th>
            <th className="active__link">Job Link</th>
            <th className="active__deadline">Deadline</th>
            <th className="active__status">Status</th>
          </tr>
        </thead>
        <tbody>
          {activeJobs.map((job) => (
            <tr key={job.id} className="active__details-row">
              <td className="active__date">{job.applicationDate}</td>
              <td className="active__title">{job.jobTitle}</td>
              <td className="active__company">{job.company}</td>
              <td className="active__link">
                <a href={job.jobLink} target="_blank" rel="noopener noreferrer">
                  {job.jobLink}
                </a>
              </td>
              <td className="active__deadline">{job.deadline}</td>
              <td className="active__status">
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(e, job.id)}
                  className="active__status-dropdown"
                >
                  <option value="Active">Active</option>
                  <option value="Interviewed">Interviewed</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ActivePage;
