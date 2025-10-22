import type { FC } from "react";
import { NavLink } from "react-router";
import './NavBox.module.css';

interface NavBoxProps {
  path: string;
  width: string;
}

const NavBox: FC<React.PropsWithChildren<NavBoxProps>> = ({ path, children, width }) => {
  const boxDimension = width + " h-fit" 

  return (
    <div className={boxDimension}>
      <NavLink to={path} className="text-white font-bold text-xl">
        <p className="p-3">{children}</p>
      </NavLink>
    </div>
  );
};

export default NavBox;

