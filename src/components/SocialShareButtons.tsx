import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,  
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
  } from 'next-share';

interface ShareButtonProps {
    url: string,
    title: string,
    coverImage: string
}

export default function SocialShareButtons({ url, title, coverImage }: ShareButtonProps) {
    return (
        <div className='flex flex-wrap gap-2'>
            <WhatsappShareButton
                url={url}
                title={title}
                separator=" -> "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <FacebookShareButton
                url={url}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TelegramShareButton
                url={url}
                title={title}
            >
                <TelegramIcon size={32} round />
            </TelegramShareButton>

            <PinterestShareButton
                media={coverImage}         
                url={url} >
                <PinterestIcon size={32} round />
            </PinterestShareButton>

            <EmailShareButton
                url={url}
                subject={title}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>

            <TwitterShareButton
                url={url}
                title={title}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
    )
}