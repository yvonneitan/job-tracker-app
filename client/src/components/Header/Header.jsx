import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Job Applications</h1>
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
  );
}

export default Header;
