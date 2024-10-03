import "./InactivePage.scss";
import axios from "axios";

function InactivePage() {
  return (
    <div className="inactive">
      <h2 className="inactive__header">🎃The Job Graveyard🪦</h2>

      <table className="inactive__table">
        <thead>
          <tr className="inactive__header-row">
            <th className="inactive__date">Application Date</th>
            <th className="inactive__title">Job Title</th>
            <th className="inactive__company">Company</th>
            <th className="inactive__link">Job Link</th>
            <th className="inactive__deadline">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr className="inactive__details-row">
            <td className="inactive__date">2024/10/01</td>
            <td className="inactive__title">Software Engineer</td>
            <td className="inactive__company">Google</td>
            <td className="inactive__link">
              <a
                href="https://techinnovations.com/careers/software-engineer"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://techinnovations.com/careers/software-engineer
              </a>
            </td>
            <td className="inactive__deadline">2024/11/30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InactivePage;
