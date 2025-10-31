import type { FC } from "react";
import { NavLink } from "react-router";
import './NavBox.module.css';
interface NavBoxProps {
  path?: string;
  width: string;
}

const NavBox: FC<React.PropsWithChildren<NavBoxProps>> = ({ path, children, width }) => {
  const boxDimension = `${width} border border-[#1D293D]`
  const textStyle = "block p-3 font-bold text-[#9CA3AF] text-xl"
  const activeBorderColor = `border-b-[#F4A259]`

  const textComponent = <p className={`${textStyle}`}>{children}</p>;
  
  return (
    <div className={boxDimension}>
      {path ? (
        <NavLink
          to={path}
          className={({ isActive }) => {
            return `${textStyle} border-b-4 ${
              isActive
                ? `${activeBorderColor} text-white`
                : "border-b-transparent"
            }`;
          }}
        >
          {children}
        </NavLink>
      ) : (
        textComponent
      )}
    </div>
  );
};

export default NavBox;

