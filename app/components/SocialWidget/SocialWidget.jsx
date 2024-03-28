import Image from 'next/image';
import X_ICON from '@/public/images/icons/x-icon-unlit.svg';
import DISCORD_ICON from '@/public/images/icons/discord-icon-unlit.svg';
import INSTAGRAM_ICON from '@/public/images/icons/instagram-icon-unlit.svg';
import REDDIT_ICON from '@/public/images/icons/reddit-icon.svg';
import YOUTUBE_ICON from '@/public/images/icons/youtube-icon.svg';

const SocialWidget = () => {
  return (
    <div className="md:flex hidden bg-clip-text z-30 bg-gradient-to-r from-gray-mid to-pink fixed space-x-4 items-center bottom-0 left-6 -rotate-90 origin-left h-10">
      <Image
        className="icon rotate-90 cursor-pointer hover:text-purple-500 hover:scale-110 hover:shadow-md"
        src={X_ICON}
        alt="X Icon"
      />
      <Image
        className="icon rotate-90 cursor-pointer hover:text-blue-500 hover:scale-110 hover:shadow-md"
        src={YOUTUBE_ICON}
        alt="Youtube Icon"
        onClick={() => window.location.href = "https://www.youtube.com/@EnchantedCanvas"}  // YouTube Link
      />
      <Image
        className="icon rotate-90 cursor-pointer hover:text-orange-500 hover:scale-110 hover:shadow-md"
        src={REDDIT_ICON}
        alt="Reddit Icon"
      />
      <Image
        className="icon rotate-90 cursor-pointer hover:text-blurple-500 hover:scale-110 hover:shadow-md"
        src={DISCORD_ICON}
        alt="Discord Icon"
        onClick={() => window.location.href = "https://discord.gg/9Rrka7GqZ9"}  // Discord Link
      />
      <Image
        className="icon rotate-90 cursor-pointer hover:text-pink-500 hover:scale-110 hover:shadow-md"
        src={INSTAGRAM_ICON}
        alt="Instagram Icon"
        onClick={() => window.location.href = "https://www.instagram.com/enchantedcanvasgames"}  // Instagram Link
      />
    </div>
  );
};

export default SocialWidget;
