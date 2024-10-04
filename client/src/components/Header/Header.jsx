import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__links">
        <div className="header__logo">
        <Link to={`/`} className="header__logo-name">
          Job and Hunt
        </Link>
        </div>
        <nav className="header__nav">
          <Link to={`/`} className="header__link">
            HomePage
          </Link>
          <Link to={`/active`} className="header__link">
            Active Jobs
          </Link>
          <Link to={`/inactive`} className="header__link">
            Inactive Jobs
          </Link>
        </nav>
      </div>
    </header>
    
  );
}

export default Header;
