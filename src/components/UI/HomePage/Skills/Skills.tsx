import type { FC } from "react";
import SkillLogo from "../../../SkillLogo/SkillLogo";
import javaLogo from '../../../../assets/java.png';
import jsLogo from '../../../../assets/js.png';
import dockerLogo from '../../../../assets/docker.png';
import pythonLogo from '../../../../assets/python.png';
import goLogo from '../../../../assets/go.png';
import mysqlLogo from '../../../../assets/mysql.png';


const Skills:FC = () => {
    return (
      <div
        className="flex justify-center items-center w-1/2 
      bg-[radial-gradient(closest-side_at_center,#3229B0_0%,#3229B0_38%,#0F172B_78%)]"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center mb-3">
            <h1 className="text-white text-6xl">My Skills: </h1>
          </div>
          <div className="flex justify-center">
            <SkillLogo src={pythonLogo} />
            <SkillLogo src={javaLogo} />
            <SkillLogo src={jsLogo} />
          </div>
          <div className="flex justify-center">
            <SkillLogo src={mysqlLogo} />
            <SkillLogo src={dockerLogo} />
            <SkillLogo src={goLogo} />
          </div>
        </div>
      </div>
    );
}

export default Skills;