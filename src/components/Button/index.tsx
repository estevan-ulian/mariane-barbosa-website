import LinkButton from "./LinkButton"

interface ButtonProps {
  content: string
  url: string
  bgTransparent?: boolean
  $big?: boolean
}

export default function Button({content, url, bgTransparent, $big}: ButtonProps) {

  return (
    <>
        <LinkButton $url={url} $bgTransparent={bgTransparent} $big={$big}>
          {content}
        </LinkButton>
    </>
  )
}