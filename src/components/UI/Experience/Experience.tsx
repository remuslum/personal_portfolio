import type { FC } from "react";
import NavBox from "../../Navigation/NavBox";
import SideBarExpandable from "../../SideBar/SideBarExpandable";

const Experience:FC = () => {
    return (
      <>
        <SideBarExpandable>Professional</SideBarExpandable>

        <NavBox width="w-1/4">Visa.java</NavBox>

        <SideBarExpandable>Internships</SideBarExpandable>

        <NavBox width="w-1/4">DBS.ts</NavBox>

        <NavBox width="w-1/4">Lomotif.py</NavBox>

        <NavBox width="w-1/4">StrongArm.go</NavBox>
      </>
    ); 

    
}

export default Experience;