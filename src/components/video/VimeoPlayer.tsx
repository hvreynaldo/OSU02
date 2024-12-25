import { FC } from 'react';
import useVimeoScript from './hooks/useVimeoScript';

const VimeoPlayer: FC = () => {
  useVimeoScript();

  return (
    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
      <iframe 
        src="https://player.vimeo.com/video/1042170361?badge=0&autopause=0&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        className="w-full h-full"
        title="IF Ad 2.mp4"
      />
    </div>
  );
};

export default VimeoPlayer;