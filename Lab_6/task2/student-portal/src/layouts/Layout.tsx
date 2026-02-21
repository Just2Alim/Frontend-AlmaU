import { NavLink, Outlet, Link } from "react-router-dom";
import "../styles/layout.css";

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand">
            <span className="brand__logo" />
            <span className="brand__text">
              <span className="brand__title">Student Portal</span>
              <span className="brand__subtitle">React Router Lab</span>
            </span>
          </Link>

          <nav className="nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
            >
              Courses
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container card page">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">©️ 2026 Student Portal</div>
      </footer>
    </div>
  );
}