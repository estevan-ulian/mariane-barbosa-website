import { useState } from "react";
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'

interface AccordionProps {
    title: string
    content: any
}

export default function Accordion({title, content}: AccordionProps) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={`
    w-full sm:w-4/5 md:w-3/4 mb-4 bg-lightColor rounded-2xl p-4  
     
    transition-all duration-300 ease-in-out 
    `}
    >
      <button
        className={`w-full relative text-left bg-transparentColor cursor-pointer`}        
        onClick={toggle}
        type="button"
      >
        <div className="flex justify-between items-center">
          <h3 className={`
          ${isShowing ? "text-secondaryColor-700" : "text-accentColor-700"}  
          outline-none font-bold text-base sm:text-lg
          `}
          >{title}</h3>
          {!isShowing ? <BiChevronRight /> : <BiChevronDown />}
        </div>
      </button>
      <div className={`
        text-sm sm:text-base
        transition-all duration-300 
        ${isShowing ? "visible mt-2 h-auto" : "invisible opacity-0 h-0"}
      `}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}