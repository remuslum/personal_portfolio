import type { FC } from "react";
import NavBox from "../../Navigation/NavBox";
import { colors } from "../../../util/colors";

const NavBar: FC = () => {
  return (
    <div className="flex flex-row">
      <NavBox path="/" width="w-1/4">
        _remus_lum
      </NavBox>
      <NavBox path="/" width="w-1/15">
        _home
      </NavBox>
      <NavBox path="/experience" width="w-1/11">
        _experience
      </NavBox>
      <NavBox path="/education" width="w-1/10">
        _education
      </NavBox>

      {/* Spacer */}
      <div className={`flex-1 border border-[${colors.borders.borderColor}]`}></div>

      <NavBox path="/" width="w-1/10">
        _resume
      </NavBox>
    </div>
  );
}


export default NavBar;

