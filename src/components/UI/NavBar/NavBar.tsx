import type { FC } from "react";
import NavBox from "../../Navigation/NavBox";

const NavBar: FC = () => {
  return (
    <div className="flex flex-row">
      <NavBox width="w-1/4">
        _remus_lum
      </NavBox>
      <NavBox path="/" width="w-1/15">
        _home
      </NavBox>
      <NavBox path="/experience" width="w-1/11">
        _experience
      </NavBox>
      <NavBox path="/education" width="w-1/10" >
        _education
      </NavBox>

      {/* Spacer */}
      <div className="flex-1 border border-[#1D293D]"></div>

      <NavBox width="w-1/10">
        _resume
      </NavBox>
    </div>
  );
}


export default NavBar;

