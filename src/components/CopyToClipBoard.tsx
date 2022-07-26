import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import { copyTextToClipboard } from "../utils/copy-to-clipboard"
import tw from "tailwind-styled-components";

interface CopyToClipBoardProps {
    content: string
}

export default function CopyToClipBoard({ content }: CopyToClipBoardProps) {    
  const [isCopied, setIsCopied] = useState(false);
  
  function handleCopiedText() {
    if (!isCopied) {
      return (
        <WrapperCopy>Copiar URL <AiOutlineCopy /></WrapperCopy>
      )
    } else {
      return (
        <WrapperCopied>Copiado <BsCheck2All /></WrapperCopied>
      )
    }
  }

  function handleClick() {
        copyTextToClipboard(content)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 4000)
    }

  return (
      <Button onClick={() => handleClick()}>{handleCopiedText()}</Button>
  )
}

const WrapperCopy = tw.span`
  text-sm flex items-center justify-between gap-1 border border-lightColor px-2 py-1 rounded w-full
`

const WrapperCopied = tw.span`
  text-sm flex items-center justify-between gap-3 border border-lightColor px-2 py-1 rounded w-full bg-successColor-500 bg-opacity-20
`

const Button = tw.button`
  h-8
`