import { useState, type FC } from "react";

const SideBarExpandable:FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div
      className="flex items-center space-x-2 w-1/4 border border-[#1D293D] pl-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className={`w-6 h-6 text-[#9CA3AF] transition-transform duration-300 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m9 5 7 7-7 7"
        />
      </svg>
      <p className="block p-3 font-bold text-[#9CA3AF] text-xl">{children}</p>
    </div>
  );
}

export default SideBarExpandable;