import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header__links">
      <div className="header">
        <h1 className="header__title">Job Hunt or Haunt?</h1>
        <h3 className="header__subtitle">
          --the ultimate job tracker for the brave...
        </h3>
        <Link to={`/`} className="header__link">
          HomePage
        </Link>
        <Link to={`/active`} className="header__link">
          Active Jobs
        </Link>
        <Link to={`/inactive`} className="header__link">
          Inactive Jobs
        </Link>
      </div>
    </div>
  );
}

export default Header;
