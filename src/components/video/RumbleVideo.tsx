import { FC } from 'react';
import Section from '../ui/Section';
import VideoContainer from './VideoContainer';
import useRumbleScript from './hooks/useRumbleScript';

const RumbleVideo: FC = () => {
  useRumbleScript();

  return (
    <Section 
      className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <VideoContainer />
      </div>
    </Section>
  );
};

export default RumbleVideo;