import "./ActivePage.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ActivePage() {
  const [jobStatus, setJobStatus] = useState("Active");
  const navigate = useNavigate();

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setJobStatus(newStatus);

    if (newStatus === "Rejected") {
      //add logic to remove job and add it to inactive page

      navigate("/inactive");
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
          <tr className="active__details-row">
            <td className="active__date">2024/9/15</td>
            <td className="active__title">Full-stack Engineer</td>
            <td className="active__company">Meta</td>
            <td className="active__link">
              <a
                href="https://techinnovations.com/careers/software-engineer"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://techinnovations.com/careers/software-engineer
              </a>
            </td>
            <td className="active__deadline">2024/10/15</td>
            <td className="active__status">
              <select
                value={jobStatus}
                onChange={handleStatusChange}
                className="active__status-dropdown"
              >
                <option value="Active">Active</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ActivePage;
