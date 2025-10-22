import type { FC } from "react";
import NavBox from "../../Navigation/NavBox";
import './Navbar.module.css';

const NavBar: FC = () => {
  return (
    <div className="flex flex-row">
      <NavBox path="/" width="w-1/4">
        _remus_lum
      </NavBox>
      <NavBox path="/" width="w-1/15">
        _home
      </NavBox>
      <NavBox path="/" width="w-1/11">
        _experience
      </NavBox>
      <NavBox path="/" width="w-1/10">
        _education
      </NavBox>

      <div className="flex-1"></div>

      <NavBox path="/" width="w-1/10">
        _resume
      </NavBox>
    </div>
  );
}


export default NavBar;

