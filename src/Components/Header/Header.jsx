import { NavLink, Outlet } from "react-router-dom";
import css from "./Header.module.css";
import { Suspense } from "react";

const Header = () => {
  return (
    <>
      <nav>
        <ul className={css.nav}>
          <li>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
