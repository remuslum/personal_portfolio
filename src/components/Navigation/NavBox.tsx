import type { FC } from "react";
import { NavLink } from "react-router";

interface NavBoxProps {
    name: string
}

const NavBox:FC<NavBoxProps> = ({ name }) => {
    return (
        <NavLink to="/" className="text-white">{name}</NavLink>
    )
}

export default NavBox