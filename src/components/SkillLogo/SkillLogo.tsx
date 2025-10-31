import type { FC } from "react";

interface SkillLogoProps {
    src:string
}

const SkillLogo:FC<SkillLogoProps> = ({src}) => {
  return <img src={src} className="size-30 m-3 object-contain"/>;
}

export default SkillLogo;