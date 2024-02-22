import Image from 'next/image';
import X_ICON from '@/public/images/icons/x-icon-unlit.svg';
import DISCORD_ICON from '@/public/images/icons/discord-icon-unlit.svg';
import INSTAGRAM_ICON from '@/public/images/icons/instagram-icon-unlit.svg';
import REDDIT_ICON from '@/public/images/icons/reddit-icon.svg';
import YOUTUBE_ICON from '@/public/images/icons/youtube-icon.svg';


const SocialWidget = () => {
    return (
        <div className="md:flex hidden bg-clip-text z-30 bg-gradient-to-r from-grad-pink via-grad-yellow to-grad-blue fixed space-x-4 items-center bottom-0 left-6 -rotate-90 origin-left h-10">
            <Image className="rotate-90" src={X_ICON} alt="X Icon" />
            <Image className="rotate-90" src={YOUTUBE_ICON} alt="Youtube Icon" />
            <Image className="rotate-90" src={REDDIT_ICON} alt="Reddit Icon" />
            <Image className="rotate-90" src={DISCORD_ICON} alt="Discord Icon" />
            <Image className="rotate-90" src={INSTAGRAM_ICON} alt="Instagram Icon" />
        </div>
    );
};

export default SocialWidget;