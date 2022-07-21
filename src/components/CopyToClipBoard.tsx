import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import { copyTextToClipboard } from "../utils/copy-to-clipboard"

interface CopyToClipBoardProps {
    content: string
}

export default function CopyToClipBoard({ content }: CopyToClipBoardProps) {    
  const [isCopied, setIsCopied] = useState(false);
  
  function handleCopiedText() {
    if (!isCopied) {
      return (
        <span className="text-sm flex items-center justify-between gap-1 border border-lightColor px-2 py-1 rounded w-full">Copiar URL <AiOutlineCopy /></span>
      )
    } else {
      return (
        <span className="text-sm flex items-center justify-between gap-3 border border-lightColor px-2 py-1 rounded w-full bg-successColor-500 bg-opacity-20">Copiado <BsCheck2All /></span>
      )
    }
  }

  function handleClick() {
        copyTextToClipboard(content)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 4000)
    }

    return (
        <button 
            onClick={() => handleClick()}
            >
        {handleCopiedText()}

        </button>
    )
}