import type { FC } from "react";
import './Introduction.module.css'
import '../../../../styles/fonts.css'

const Introduction:FC = () => {
    return (
      <div className="flex justify-center items-center w-1/2">
        <div className="flex flex-col text-left font-primary">
          <p className="text-lg text-[#9CA3AF] mb-2">Hi all, I am</p>
          <h1 className="text-6xl text-white mb-4">Remus Lum</h1>
          <p className="text-3xl text-[#4F61E8] mb-3">
            &gt; Software Engineer
          </p>
          <p className="text-lg text-[#9CA3AF] mb-3 opacity-25">// Find my profile on Github</p>
          <p className="text-lg">
            <span className="text-[#4F61E8]">const</span>
            <span className="text-[#10B981]"> githubLink </span>
            <span className="text-white">=</span>
            <span className="text-[#F87171]"> "https://github.com/remuslum"</span>
          </p>
        </div>
      </div>
    );
}

export default Introduction;