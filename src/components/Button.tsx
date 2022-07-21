interface ButtonProps {
  content: string
  url: string
  variation: 'bgPink' | 'bgTransparent'
  big?: boolean
  handleClick?: () => void
}

export default function Button({content, url, variation, big, handleClick}: ButtonProps) {
  const bgPink = `bg-secondaryColor-700 border-secondaryColor-700`
  const bgTransparent = `border-lightColor lg:hover:bg-secondaryColor-700 lg:hover:border-secondaryColor-700`

  return (
    <button onClick={() => handleClick} className={`${variation === 'bgPink' ? 'transition-all duration-300 ease-out hover:scale-105': ''}`}>
      <a href={url} className={`
        border rounded-full
        px-6 py-3 sm:px-10 sm:py-4 
        text-whiteColor text-base
        transition-all duration-300 ease-out
        ${big ? 'sm:text-lg' : 'text-base'}
        ${variation === 'bgPink' ? bgPink : bgTransparent}`}
      >
        {content}
      </a>
    </button>
  )
}