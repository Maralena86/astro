'use client';

import { useState } from 'react';
import { VideoYoutube } from '@/components/video-youtube';
import videos from './lib/videos.json';
import { Login } from '@/components/login';
export default function Home() {
  const [access, setAccess] = useState(false);

  return (
    <main className="flex min-h-screen flex-col p-4">
      {access ? (
        <div>
          <h1 className="p-4 text-center uppercase text-white">Videos</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {videos.map((video) => (
              <VideoYoutube
                key={video.name}
                name={video.name}
                linky={video.link}
              />
            ))}
          </div>
        </div>
      ) : (
        <Login setAccess={setAccess} />
      )}
    </main>
  );
}
