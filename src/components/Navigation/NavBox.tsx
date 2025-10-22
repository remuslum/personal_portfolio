import type { FC } from "react";
import { NavLink } from "react-router";
import './NavBox.module.css';
import { colors } from "../../util/colors";

interface NavBoxProps {
  path: string;
  width: string;
}

const NavBox: FC<React.PropsWithChildren<NavBoxProps>> = ({ path, children, width }) => {
  const boxDimension = `${width} border border-[${colors.borders.borderColor}]`
  const activeBorderColor = `border-b-[${colors.borders.borderActiveColor}]`

  return (
    <div className={boxDimension}>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return `block p-3 font-bold text-[#9CA3AF] text-xl border-b-4 ${
            isActive ? `${activeBorderColor} text-white` : "border-b-transparent"
          }`;
        }}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default NavBox;

