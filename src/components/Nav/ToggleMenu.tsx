import { CloseIcon, MenuIcon } from '../Icons';
import tw from "tailwind-styled-components";

export interface ToogleMenuProps {
    onClick: () => void
    open: boolean
  }
  
export default function ToggleMenu({ onClick, open }: ToogleMenuProps) {    
    
    function renderMenuIcon() {
        const styles = `w-8 h-8 stroke-whiteColor`;
        if(!open) {
            return <MenuIcon className={styles} />
        } else {
            return <CloseIcon className={styles} />
        }
    }

    return (
        <>
            <ToogleMenuButton onClick={onClick}>
                    {renderMenuIcon()}
            </ToogleMenuButton>
        </>
    )
}

const ToogleMenuButton = tw.button`
    absolute z-20 right-3 top-10 text-3xl cursor-pointer lg:hidden    
`